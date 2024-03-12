import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  cn,
} from "@bitwyre/ui-kit";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type TUserForm = z.infer<typeof formSchema>;

export function FormComponent() {
  const [dataForm, setDataForm] = useState<TUserForm | null>(null);

  const form = useForm<TUserForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {username: ""},
  });

  function onSubmit(values: TUserForm) {
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
