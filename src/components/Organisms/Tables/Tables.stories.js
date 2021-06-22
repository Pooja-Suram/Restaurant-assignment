import Tables from './index';
import { TableList } from '../../data';

export default {
    title: 'Organisms/Tables',
    component: Tables
};

const Template =  args  => <Tables {...args} />

export const DefaultTables = Template.bind();

DefaultTables.args = {
    tables: TableList,
    dragOverHandle: ()=>{
        console.log("dragged over a table");
    },
    onDropHandle: ()=>{},
    onClickTable: () => console.log("open or close table popup"),

};