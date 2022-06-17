import ProductCard from "../Shop/ProductCard";
import { useState, useEffect } from "react";
import fetchData from "../../../customHooks/fetchData";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData("/products/featured");
      if (!res.error) return setFeatured([...res.data]);
    };
    getData();
  }, []);

  return (
    <section>
      <h1>Featured Products</h1>
      <section className="product-container">
        {featured.length &&
          featured.map((product, index) => {
            return <ProductCard key={index} product={product} />;
          })}
      </section>
    </section>
  );
};

export default Featured;
