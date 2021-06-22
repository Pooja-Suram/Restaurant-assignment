import TableItem from ".";
import './TableItem.css';


export default{
    title: 'Atoms/TableItem',
    component: TableItem
};

const Template = args => <TableItem {...args} />

export const Default = Template.bind();
Default.args = {
    item: {
        id: "item1",
        itemName: "Spring Rolls",
        courseType: "starters",
        price: 105.00,
        count: 1
    },
    sNo: 1,
    onDeleteHandler: () => console.log("clicked on delete button"),
    onQuantityChange: ()=> console.log("Quantity of item changed")
};