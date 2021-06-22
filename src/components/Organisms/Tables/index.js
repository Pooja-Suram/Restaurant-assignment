import Table from '../../Atoms/Table';

const Tables = ({tables, dragOverHandle, onDropHandle, onClickTable}) => {
    return(
          tables.map((table, index) => <Table table={table} key={table.id} dragOverHandle={dragOverHandle} onDropHandle={() => onDropHandle(table, index)} onClickTable={onClickTable} index={index}/>)
    );
}

export default Tables;