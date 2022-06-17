import { GlobalContext } from "../../store/GlobalState";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import useScrollToTop from "../../../customHooks/useScroll";
import fetchData from "../../../customHooks/fetchData";

const CategoryPage = () => {
  const { searchText } = useContext(GlobalContext);
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useScrollToTop();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(`/products/category/${category}`);
      setProducts([...res.data.products]);
      console.log(res.data.products);
    };
    getData();
  }, [category]);

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
