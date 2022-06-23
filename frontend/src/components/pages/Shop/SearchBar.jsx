import {useSelector,useDispatch} from "react-redux"
import { bindActionCreators } from "redux";
import { setSearch } from "../../../store/actions/productActions";

const SearchBar = ({ searchClass }) => {
  const searchText = useSelector(state => state.products.searchText);
  const dispatch = useDispatch();
  const searchFunc = bindActionCreators(setSearch,dispatch);

  return (
    <div className={`search  ${searchClass}`}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="search products here"
          value={searchText}
          onChange={(e) => searchFunc(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
