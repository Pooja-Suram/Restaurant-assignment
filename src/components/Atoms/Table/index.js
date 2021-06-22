import Paper from '@material-ui/core/Paper';
import './Table.css';
import Typography from '@material-ui/core/Typography';

const Table = ({table, dragOverHandle, onDropHandle, onClickTable}) => {
    return(
        <Paper elevation={5} key={table.id} className="table-details" onDragOver={(event) => dragOverHandle(event)} onDrop={onDropHandle} onClick={() => onClickTable(table)}>
            <p>{table.tableName}</p>

            {table.bill > 0 ? <Typography variant='caption' key={table.id + 'bill'}>Bill: {table.bill} | Number of items: {table.tableItems.length}</Typography> : null}
            {console.log("table bill changed : " + table.bill)}
        </Paper>
    )
};

export default Table;