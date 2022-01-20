import { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";

const SearchBar = () => {

    const {dispatch,searchText,filterValue} = useContext(GlobalContext);

    const filterSearch = (e) =>{
        dispatch({
            type:"filter",
            payload:e.target.value
        })        
    }
    const searchFunc = (e)=>{
        dispatch({
            type:"search",
            payload:e.target.value
        }) 
    }
    return (
        <div className="search-bar">
            <select id="select" onChange={filterSearch} value={filterValue}>
                <option value="">All</option>
                <option value="cereals">Cereals</option>
                <option value="vegetables">Vegetables</option>
                <option value="fruits">Fruits</option>
                <option value="beef">Beef</option>
            </select>
            <form>
                <input type="text" id="search" placeholder="search products by name"  onChange={searchFunc}/>
                <button><i className="fas fa-search"></i> </button>
            </form>
        </div>
    )
}

export default SearchBar;
