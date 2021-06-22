import TableItem from "../../Atoms/TableItem";
import { TableBody } from "@material-ui/core";

const PopUpContent = ({ items, onDeleteHandler, onQuantityChange }) => {
    return (
        <TableBody>
            {items.map((item, index) => <TableItem item={item} sNo={index + 1} key={'table-item-' + item.id} onDeleteHandler={onDeleteHandler} onQuantityChange={onQuantityChange}/>)}
        </TableBody>
    );
};

export default PopUpContent;