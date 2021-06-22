import MenuSearch  from ".";
import './MenuSearch.css';

export default{
    title: 'Atoms/MenuSearch',
    component: MenuSearch 
};

const Template = args => <MenuSearch {...args} />

export const Default = Template.bind();

Default.args={
    onSearchHandler: () => {
        console.log("typing");
    }
}
