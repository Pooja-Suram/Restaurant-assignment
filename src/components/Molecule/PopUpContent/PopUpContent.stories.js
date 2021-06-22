import PopUpContent from ".";

export default {
    title: 'Molecules/PopUpContent',
    component: PopUpContent
};

const Template = args => <PopUpContent {...args} />

export const Default = Template.bind();
Default.args = {
    items: [{
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
    }],
    onDeleteHandler: () => console.log("delete handler"),
    onQuantityChange: () => console.log("quantity changed"),
};