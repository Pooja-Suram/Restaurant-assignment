import Item from './index';
import './Item.css';

export default {
    title: 'Atoms/Item',
    component: Item
};

const Template = args => <Item {...args} />

export const DefaultItem = Template.bind();
DefaultItem.args = {
    item: {
        id: "item1",
        itemName: "Spring Rolls",
        courseType: "starters",
        price: 105.00
    },
    dragStartHandle: ()=> {
        console.log("drag started");
    }
};
