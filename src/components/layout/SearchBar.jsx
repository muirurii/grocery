import { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

const SearchBar = ({setFilter}) => {

    const {dispatch} = useContext(GlobalContext);

    const filterSearch = (e) =>{
        setFilter(e.target.value);        
    }

    return (
        <div className="search-bar">
            <select id="select" onChange={filterSearch}>
                <option value="">All</option>
                <option value="cereals">Cereals</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="beef">Beef</option>
            </select>
            <input type="text" id="search" placeholder="search products" />
            <button><i className="fas fa-search"></i> </button>
        </div>
    )
}

export default SearchBar;
