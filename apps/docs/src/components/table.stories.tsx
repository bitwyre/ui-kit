import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@bitwyre/ui-kit";

export const TableComponent = () => {
  return (
    <Table>
      <TableHeader>
        <TableHead>No</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Age</TableHead>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John</TableCell>
          <TableCell>24</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Adi</TableCell>
          <TableCell>24</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableHead>Total</TableHead>
        <TableHead>24</TableHead>
        <TableHead>48</TableHead>
      </TableFooter>
    </Table>
  );
};
