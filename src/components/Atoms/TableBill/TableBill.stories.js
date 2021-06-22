import TableBill from ".";

export default{
    title: 'Atoms/TableBill',
    component: TableBill
};

const Template = args => <TableBill {...args} />

export const Default = Template.bind();
Default.args={
    table: {
        id: "table2",
        tableName: "Table-2",
        tableItems: [],
        bill: 0
      }
};