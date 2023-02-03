import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import useScrollToTop from "../../../customHooks/useScroll";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../../../store/actions/productActions";
import ProductLoading from "../../layout/ProductLoading";

const Shop = () => {
  useScrollToTop();
  const { all: products, searchText } = useSelector((state) => state.products);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const dispatch = useDispatch();
  const getProducts = bindActionCreators(fetchProducts, dispatch);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const awaitProducts = async () => {
      await getProducts();
      setLoading(false);
    };
    awaitProducts();
  }, []);

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
            `${searchText} not found try searching for something else`
          )}
        </section>
      </section>
    </main>
  );
};

export default Shop;
