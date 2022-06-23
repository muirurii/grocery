import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import {  useEffect } from "react";
import useScrollToTop from "../../../customHooks/useScroll";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../../../store/actions/productActions";

const Shop = () => {
  useScrollToTop();
  const {all: products,searchText} = useSelector((state) => state.products);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const dispatch = useDispatch();
  const getProducts = bindActionCreators(fetchProducts, dispatch);

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <main>
      <section className="shop">
        <SearchBar searchClass="search-bar" />
        <section className="product-container">
          {filteredProducts.length
            ? filteredProducts.map((product, index) => {
                return <ProductCard key={product._id} product={product} />;
              })
            : `${searchText} not found try searching for something else`}
        </section>
      </section>
    </main>
  );
};

export default Shop;
