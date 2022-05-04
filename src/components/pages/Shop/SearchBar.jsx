import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const SearchBar = ({searchClass}) => {

    const {dispatch,searchText} = useContext(GlobalContext);
    const searchFunc = (payload)=>{
        dispatch({
            type:"search",
            payload
        });
    }

    return (
        <div className={`search  ${searchClass}`}>
                <form onSubmit={(e)=> e.preventDefault()} >
                    <input type="text"  placeholder="search products here" 
                    value={searchText}  onChange={(e)=>searchFunc(e.target.value)}/>
                </form>
        </div>
    );
}

export default SearchBar;
