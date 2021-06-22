import './MenuSearch.css';

const MenuSearch = ({onSearchHandler}) => {
    return(
        <input type="text" placeholder="Enter any item name or course type" className="menuSearch" key="menuSearch" onChange={(event) => onSearchHandler(event.target.value)}/>
    )
};

export default MenuSearch;