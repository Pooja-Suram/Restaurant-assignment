import Items from './index';
import './Items.css';

export default {
  title: 'Organisms/Items',
  component: Items
};

const Template = args => <Items {...args} />

export const DefaultItems = Template.bind();

DefaultItems.args = {
  items: [{
    id: "item1",
    itemName: "Spring Rolls",
    courseType: "starters",
    price: 105.00
  },
  {
    id: "item2",
    itemName: "French Onion Soup",
    courseType: "starters",
    price: 100.00
  },
  {
    id: "item3",
    itemName: "Mixed Green Salad",
    courseType: "side dishes",
    price: 90.00
  },
  {
    id: "item4",
    itemName: "French Fries",
    courseType: "side dishes",
    price: 160.00
  },
  {
    id: "item5",
    itemName: "Chicken and Mushroom Pie",
    courseType: "main course",
    price: 120.00
  },
  {
    id: "item6",
    itemName: "Eggplant Lasagne",
    courseType: "main course",
    price: 130.00
  },
  {
    id: "item7",
    itemName: "Apple Pie with Cream",
    courseType: "dessert",
    price: 30.00
  },
  {
    id: "item8",
    itemName: "Vanilla Ice Cream",
    courseType: "dessert",
    price: 60.00
  }],
  dragStartHandle: () => {
    console.log("drag started");
  }
};

export const EmptyMenu = Template.bind();
EmptyMenu.args = {
  items: []
};