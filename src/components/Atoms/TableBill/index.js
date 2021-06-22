import { TableRow, TableCell } from "@material-ui/core";

const TableBill = ({ table }) => {
    return (
        <TableRow>
            <TableCell colSpan={4} align="right">Total</TableCell>
            <TableCell >{table.bill}</TableCell>
        </TableRow>
    )
};

export default TableBill;