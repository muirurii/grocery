import ProductCard from "../Shop/ProductCard";
import { useEffect, useState } from "react";
import { fetchFeatured } from "../../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import Loader from "../../layout/Loader";
import ProductLoading from "../../layout/ProductLoading";

const Featured = () => {
  const featured = useSelector((state) => state.products.featured);
  const dispatch = useDispatch();
  const setFeatured = bindActionCreators(fetchFeatured, dispatch);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const awaitFeatured = async () => {
      await setFeatured();
      setLoading(false);
    };
    awaitFeatured();
  }, []);

  return (
    <section>
      <h1>Featured Products</h1>
      {loading ? (
        <>
          <ProductLoading />
          <ProductLoading />
          <ProductLoading />
          <ProductLoading />
        </>
      ) : (
        <section className="product-container">
          {featured.length &&
            featured.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </section>
      )}
    </section>
  );
};

export default Featured;
