import { GlobalContext } from "../../store/GlobalState";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import useScrollToTop from "../../../customHooks/useScroll";
import fetchData from "../../../customHooks/fetchData";
import Loader from "../../layout/Loader";
import {useSelector,useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import {fetchCategory} from "../../../store/actions/productActions";

const CategoryPage = () => {
  const {categoryProducts,  searchText} = useSelector(state => state.products);
  const dispatch = useDispatch();
  const getProducts = bindActionCreators(fetchCategory,dispatch);  
  const { category } = useParams();

  const filteredProducts = categoryProducts.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  useScrollToTop();

  useEffect(() => {  
    getProducts(category);
  }, []);

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

export default CategoryPage;
