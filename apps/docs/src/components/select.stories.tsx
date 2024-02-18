import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  cn,
  For,
  SelectTrigger,
  SelectValue,
} from "@bitwyre/ui-kit";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {z} from "zod";

const fruitLists = [
  {name: "Apple"},
  {name: "Banana"},
  {name: "Blueberry"},
  {name: "Grapes"},
  {name: "Avocado"},
];

const WithoutRHFComponent = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <For each={fruitLists}>
            {(item) => (
              <SelectItem value={item.name} key={item.name}>
                <p>{item.name}</p>
              </SelectItem>
            )}
          </For>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const fruitSchema = z.object({
  fruits: z.string().min(1, {message: "Fruit is required"}),
});

const WithRHFComponent = () => {
  const {
    formState: {errors},
    handleSubmit,
  } = useForm<z.infer<typeof fruitSchema>>({resolver: zodResolver(fruitSchema)});

  const [fruit, setFruit] = useState("");

  const onSubmit = (value: z.infer<typeof fruitSchema>) => {
    console.log(value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-col space-y-2">
      <Select onValueChange={(value) => setFruit(value)}>
        <SelectTrigger
          className={cn("w-full", {
            "border-red-500 text-red-500": !fruit && Object.keys(errors).length,
            "border-bw-navy-400 text-black": fruit && !errors,
          })}>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <For each={fruitLists}>
              {(item) => (
                <SelectItem value={item.name} key={item.name}>
                  <p>{item.name}</p>
                </SelectItem>
              )}
            </For>
          </SelectGroup>
        </SelectContent>
      </Select>

      {!fruit && Object.keys(errors).length ? (
        <p className="mt-1 text-[12px] text-red-500">Please select fruit</p>
      ) : null}
      <Button type="submit" className="bg-black text-white w-full">
        Submit
      </Button>
    </form>
  );
};

export function MainComponent() {
  return (
    <div className="flex flex-wrap gap-x-20 gap-y-10">
      <div>
        <h1 className="text-2xl mb-4">Without RHF Component</h1>
        <WithoutRHFComponent />
      </div>
      <div>
        <h2 className="text-2xl mb-4">With RHF Component</h2>
        <WithRHFComponent />
      </div>
    </div>
  );
}
