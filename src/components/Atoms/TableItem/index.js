import { TableRow, TableCell } from "@material-ui/core";
import './TableItem.css';
import { IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';


const TableItem = ({item, sNo, onDeleteHandler, onQuantityChange}) => {
    return(
        <TableRow>
            <TableCell align="center">{sNo}</TableCell>
            <TableCell>{item.itemName}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell align="center"><input type="number" min='1' value={item.count} className="item-quantity" onChange={(event) => onQuantityChange(item, event.target.value)}/></TableCell>
            <TableCell align="center"><IconButton onClick={() => onDeleteHandler(item)}><DeleteIcon /></IconButton></TableCell>
        </TableRow>
    );
};

export default TableItem;