import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBill from '../../Atoms/TableBill';
import { TableRow, TableCell, TableHead } from '@material-ui/core';



import './PopUp.css';
import PopUpHeader from '../../Atoms/PopUpHeader';
import PopUpContent from '../../Molecule/PopUpContent';

const PopUp = ({ table, onCloseHandler, onDeleteHandler, onQuantityChange }) => {

    return (
        <div className="popup">
            <div className="popup_inner">
                <TableContainer>
                    <Table>
                        <TableHead >
                            <TableRow className="table-popup">
                                <TableCell colSpan={5} align='left' color='white'>{table.tableName} | Order Details</TableCell>
                                <TableCell align='right'><IconButton className="close-btn" onClick={() => onCloseHandler()} ><CloseIcon /></IconButton></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <TableContainer >
                    <Table aria-label="simple table">
                        <PopUpHeader />
                        {table.tableItems.length > 0 ? <>
                            <PopUpContent items={table.tableItems} onDeleteHandler={onDeleteHandler} onQuantityChange={onQuantityChange} />
                            <TableBill table={table} />
                        </> :
                            <TableRow id="popup-error" >
                                <TableCell colSpan={5} align='center'>No items ordered from this table</TableCell>
                            </TableRow>
                        }
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default PopUp;