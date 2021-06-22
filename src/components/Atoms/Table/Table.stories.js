import Table from './index';

export default {
    title: 'Atoms/Table',
    component: Table
};

const Template = args => <Table {...args} />

export const DefaultTable = Template.bind();
DefaultTable.args = {
    table: {
        id: "table3",
        tableName: "Table-3",
        tableItems: [],
        bill: 500
    },
    dragOverHandle: () => {
        console.log("dragged over a table");
    },
    onDropHandle: () => {},
    onClickTable: () => {},
};