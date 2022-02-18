import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const SearchBar = () => {

    const {dispatch,searchText} = useContext(GlobalContext);
    const searchFunc = (e)=>{
        dispatch({
            type:"search",
            payload:e.target.value
        }) 
    }
    return (
        <div className="search-bar center">
                <form>
                    <input type="text" id="search" placeholder="search products here" value={searchText}  onChange={searchFunc}/>
                </form>
        </div>
    )
}

export default SearchBar;
