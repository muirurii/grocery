import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import { useContext, useEffect, useCallback,useState } from "react";
import { GlobalContext } from "../../store/GlobalState";
import useScrollToTop from "../../../customHooks/useScroll";
import fetchData from "../../../customHooks/fetchData";
import Loader from "../../layout/Loader";

const Shop = () => {
  const { products, dispatch, searchText } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    const getProducts = async () => {
      const res = await fetchData("/products/all");
      if (!res.error) setProducts(res.data);
      setLoading(false);
    };

    getProducts();
  }, [setProducts]);

  return loading ? <Loader /> : (
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
