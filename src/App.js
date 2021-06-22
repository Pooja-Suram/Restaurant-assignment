import './App.css';
import { ItemsList, TableList } from './components/data';
import Main from './components/Template/Main';
import { useState, useEffect } from 'react';
import PopUp from './components/Organisms/PopUp';
import { useAuth0 } from '@auth0/auth0-react';
import UserButton from './components/Atoms/UserButton';

function App() {

  const { isAuthenticated } = useAuth0();

  const [currentDragItem, setCurrentDragItem] = useState();

  const [tables, setCurrentTables] = useState(TableList);

  const [items, setItems] = useState(ItemsList);

  const [searchTerm, setSearchTerm] = useState('');

  const [popUpTable, setPopUpTable] = useState('');

  const [open, setOpen] = useState(false);

  const dragStartHandle = (item) => {
    setCurrentDragItem(item);
  };

  const dragOverHandle = (event) => {
    event.preventDefault();
  };

  const onSearchHandler = (value) => {
    setSearchTerm(value);
  };

  const onDropHandle = (table, index) => {

    const currTableItems = table.tableItems;
    let flag = false;

    const newTables = [...tables];

    for (let i = 0; i < currTableItems.length; i++) {
      if (currTableItems[i].id === currentDragItem.id) {
        currTableItems[i].count += 1;
        flag = true;
      }
    }

    if (!flag) {
      const currItem = { ...currentDragItem, count: 1 };
      currTableItems.push(currItem);
    }

    const newBill = calcBill(table);
    table.bill = newBill;

    newTables[index] = table;

    setCurrentTables(newTables);
  };

  const calcBill = (table) => {
    let sum = 0;
    for (let i = 0; i < table.tableItems.length; i++) {
      sum += table.tableItems[i].price * table.tableItems[i].count;
    }
    return sum;
  };

  const onQuantityChange = (item, newQuant) => {
    const currentItems = popUpTable.tableItems;
    for (let i = 0; i < currentItems.length; i++) {
      if (currentItems[i].id === item.id) {
        currentItems[i].count = newQuant;
      }
    }
    updateTable(currentItems);
  }


  const onClickTable = (table) => {
    console.log("clicked on table " + table.tableName);
    setPopUpTable(table);
    setOpen(!open);
  }

  const onCloseHandler = () => {
    setOpen(!open);
  }

  const onDeleteHandler = (item) => {
    const currentTableItems = popUpTable.tableItems.filter((currItem) => currItem.id !== item.id);
    updateTable(currentTableItems);
  }


  const updateTable = (updatedTableItems) => {
    const newTablesList = [...tables];
    const index = parseInt(popUpTable.id.substring(5, 6)) - 1;
    const newTable = { ...popUpTable, tableItems: updatedTableItems };
    newTable.bill = calcBill(newTable);
    newTablesList[index] = newTable;
    setCurrentTables(newTablesList);
    setPopUpTable(newTable);
  }

  useEffect(() => {
    if (searchTerm === "") {
      setItems(ItemsList);
    }
    else {
      const currentItems = ItemsList.filter((item) => item.itemName.toLowerCase().includes(searchTerm.toLowerCase()) || item.courseType.toLowerCase().includes(searchTerm.toLowerCase()));
      setItems(currentItems);
    }
  }, [searchTerm])

  return (
    <div className="App">
      {!isAuthenticated && <UserButton login />}

      {isAuthenticated &&
        <>
          <Main tables={tables} defaultItems={items} dragStartHandle={dragStartHandle} dragOverHandle={dragOverHandle} onSearchHandler={onSearchHandler} onDropHandle={onDropHandle} onClickTable={onClickTable} />
          {open ? <PopUp table={popUpTable} onCloseHandler={onCloseHandler} onDeleteHandler={onDeleteHandler} onQuantityChange={onQuantityChange} /> : null}
          <UserButton />
        </>
      }   
      
    </div>
  );
}

export default App;
