const SearchBar = () => {
    return (
        <div className="search-bar">
            <select id="select">
                <option value="">All</option>
                <option value="">Cereals</option>
                <option value="">Vegetables</option>
                <option value="">Fruits</option>
                <option value="">Beef</option>
            </select>
            <input type="text" id="search" placeholder="search products" />
            <button> &copy; </button>
        </div>
    )
}

export default SearchBar;
