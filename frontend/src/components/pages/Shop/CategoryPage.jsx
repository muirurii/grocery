import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import useScrollToTop from "../../../customHooks/useScroll";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCategory } from "../../../store/actions/productActions";
import ProductLoading from "../../layout/ProductLoading";

const CategoryPage = () => {
  const { categoryProducts, searchText } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const getProducts = bindActionCreators(fetchCategory, dispatch);
  const { category } = useParams();

  const filteredProducts = categoryProducts.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useScrollToTop();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const awaitProducts = async () => {
      await getProducts(category);
      setLoading(false);
    };
    awaitProducts();
  }, [category]);

  return (
    <main>
      <section className="shop">
        <SearchBar searchClass="search-bar" />
        {searchText.length && filteredProducts.length ? (
          <p className="center">
            showing {filteredProducts.length} result
            {filteredProducts.length > 1 ? "s" : ""} for {searchText}
          </p>
        ) : null}
        <section className="product-container">
          {loading ? (
            <>
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
            </>
          ) : filteredProducts.length ? (
            filteredProducts.map((product, index) => {
              return <ProductCard key={product._id} product={product} />;
            })
          ) : (
            `${searchText} not available try searching for something else`
          )}
        </section>
      </section>
    </main>
  );
};

export default CategoryPage;
