import Paper from '@material-ui/core/Paper';
import './Item.css';

const Item = ({ item, dragStartHandle }) => {
    return(
       <Paper elevation={10} key={item.id} className="menu-item" draggable onDragStart = {() => dragStartHandle(item)}>
           <p>{item.itemName}</p>
           <p>Price: {item.price}</p>
       </Paper>
    )
};

export default Item;