import {Button, InputField} from "@bitwyre/ui-kit";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";

const Validation = z.object({
  email: z.string().email().min(1, "Email must not be empty"),
  password: z.string().min(1, "Password must not be empty"),
});

export const InputComponent = () => {
  const [data, setData] = useState<Record<string, any> | null>(null);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<z.infer<typeof Validation>>({
    resolver: zodResolver(Validation),
  });

  const onSubmit = (data: Partial<z.infer<typeof Validation>>) => setData(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3">
        <InputField
          register={register}
          name="email"
          className="px-3 py-2 w-full border"
          errors={errors}
          label="Email"
          placeholder="Enter your email"
        />

        <InputField
          register={register}
          name="password"
          type="password"
          className="px-3 py-2 w-full border"
          errors={errors}
          withEyeIcon
          label="Password"
          placeholder="Enter your Password"
        />

        <Button type="submit" className="bg-black text-white">
          Submit
        </Button>
      </form>

      <div className="mt-3">
        {data && <pre>data: {JSON.stringify(data, null, 2)}</pre>}
      </div>
    </>
  );
};
