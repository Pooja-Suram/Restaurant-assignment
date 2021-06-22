import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const PopUpHeader = () => {
    return (
        <TableHead>
            <TableRow>
                <TableCell align="center">S.No</TableCell>
                <TableCell >Item Name</TableCell>
                <TableCell >Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Remove</TableCell>
            </TableRow>
        </TableHead>

    );
};

export default PopUpHeader;