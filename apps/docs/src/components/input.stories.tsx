import {InputField} from "@bitwyre/ui-kit";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";

const Validation = z.object({
  email: z.string().email().min(1, "Email must not be empty"),
  password: z.string().min(1, "Password must not be empty"),
});

export const FormComponent = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          register={register}
          name="email"
          className="w-full border"
          errors={errors}
          label="Email"
          placeholder="Enter your email"
        />

        <InputField
          register={register}
          name="password"
          type="password"
          className="w-full border"
          errors={errors}
          inputChildren={() => <p className="absolute right-3 top-0">Eye</p>}
          label="Password"
          placeholder="Enter your Password"
        />

        <button type="submit">Submit</button>
      </form>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};
