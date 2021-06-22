import Main from './index';
import { React } from 'react';
import { TableList, ItemsList } from '../../data';

export default {
    title: 'Template/Main',
    component: Main
};

const Template =  args  => <Main {...args} />

export const DefaultMain = Template.bind();

DefaultMain.args = {
    tables: TableList,
    defaultItems: ItemsList,
    dragStartHandle: ()=> {
        console.log("drag started");
    },
    dragOverHandle: ()=>{
        console.log("dragged over a table");
    },
    onSearchHandler: ()=>{},
    onDropHandle: ()=>{}, 
    onClickTable: ()=>{},
};