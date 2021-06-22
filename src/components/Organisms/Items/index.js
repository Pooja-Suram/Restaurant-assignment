import './Items.css';
import Item from '../../Atoms/Item';

const Items = ({ items, dragStartHandle }) => {
    return (

        items.length === 0 ? <div id="error-message" >
            <span>Sorry we dont have any item with such name or course type :(</span>
        </div> :
            items.map((item) => <Item item={item} dragStartHandle={dragStartHandle} />)
    );
};

export default Items;