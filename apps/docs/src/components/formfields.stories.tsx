import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  Button,
  FormItem,
  FormLabel,
  cn,
  FormInput,
  FormMessage,
} from "@bitwyre/ui-kit";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FormComponent() {
  const [dataForm, setDataForm] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {username: ""},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setDataForm(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({field}) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <FormInput
                  className={cn({
                    "border-red-500": form.formState.errors.username?.message,
                  })}
                  placeholder="Input your username"
                  {...field}
                />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="gradient-blue" className="w-full">
          Submit Data
        </Button>
      </form>

      {dataForm && <p className="mt-4">Data: {JSON.stringify(dataForm)}</p>}
    </Form>
  );
}
