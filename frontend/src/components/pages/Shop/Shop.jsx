import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useCallback } from "react";
import { GlobalContext } from "../../store/GlobalState";
import useScrollToTop from "../../../customHooks/useScroll";
import fetchData from "../../../customHooks/fetchData";

const Shop = () => {
  const { products, dispatch, searchText } = useContext(GlobalContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  useScrollToTop();

  const setProducts = useCallback(
    (payload) => {
      dispatch({
        type: "setProducts",
        payload,
      });
    },
    [dispatch]
  );

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetchData("/products/all");
      if (!res.error) return setProducts(res.data);
    };

    getProducts();
  }, [setProducts]);

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
