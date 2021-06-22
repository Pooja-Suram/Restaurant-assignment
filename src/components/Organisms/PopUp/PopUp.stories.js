import PopUp from '.';
import './PopUp.css';

export default {
    title: 'Organisms/PopUp',
    component: PopUp,
};

const Template = args => <PopUp {...args} />

export const Default = Template.bind();
Default.args = {
    table: {
        id: "table2",
        tableName: "Table-2",
        tableItems: [
            {
                id: "item1",
                itemName: "Spring Rolls",
                courseType: "starters",
                price: 105.00,
                count: 2
            },
            {
                id: "item2",
                itemName: "French Onion Soup",
                courseType: "starters",
                price: 100.00,
                count: 1
            }
        ],
        bill: 0
    },
    onCloseHandler: () => console.log("closing table popup"),
    onDeleteHandler: () => console.log("delete particular element"),
    onQuantityChange: () => console.log("changing item quantity")
};