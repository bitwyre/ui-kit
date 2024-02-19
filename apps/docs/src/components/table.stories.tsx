import {
  For,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  cn,
} from "@bitwyre/ui-kit";

const data = [
  {
    name: "John",
    age: 24,
    job: "Software Engineer",
    salary: 100000,
    favLang: "JS",
    hobby: "Football",
    os: "Mac",
    keyboard: "Logitech",
  },
  {
    name: "Adi",
    age: 24,
    job: "Software Engineer",
    salary: 100000,
    favLang: "JS",
    hobby: "Football",
    os: "Mac",
    keyboard: "Logitech",
  },
  {
    name: "Hansen",
    age: 27,
    job: "Software Engineer",
    salary: 100000,
    favLang: "JS",
    hobby: "Football",
    os: "Mac",
    keyboard: "Logitech",
  },
  {
    name: "Rim",
    age: 24,
    job: "Software Engineer",
    salary: 100000,
    favLang: "JS",
    hobby: "Football",
    os: "Mac",
    keyboard: "Logitech",
  },
  {
    name: "Rin",
    age: 24,
    job: "Software Engineer",
    salary: 100000,
    favLang: "JS",
    hobby: "Football",
    os: "Mac",
    keyboard: "Logitech",
  },
  {
    name: "Sana",
    age: 24,
    job: "Software Engineer",
    salary: 100000,
    favLang: "JS",
    hobby: "Football",
    os: "Mac",
    keyboard: "Logitech",
  },
];
export const TableComponent = () => {
  return (
    <Table className="table-auto">
      <TableHeader>
        <TableRow>
          <TableHead>NO</TableHead>
          <For each={Object.keys(data[0])}>
            {(key) => <TableHead>{key.toUpperCase()}</TableHead>}
          </For>
        </TableRow>
      </TableHeader>
      <TableBody>
        <For each={data}>
          {(item, idx) => (
            <TableRow>
              <TableCell>{idx + 1}</TableCell>
              <For each={Object.values(item)}>
                {(value, idxValue) => (
                  <TableCell
                    className={cn(idx === 0 && idxValue === 2 && "p-0 text-nowrap ")}>
                    {value}
                  </TableCell>
                )}
              </For>
            </TableRow>
          )}
        </For>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={Object.keys(data[0]).length + 1} className="text-end">
            Total {data.length}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};
