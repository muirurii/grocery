import ProductCard from "../Shop/ProductCard";
import { useEffect } from "react";
import { fetchFeatured } from "../../../store/actions/productActions";
import {useSelector,useDispatch} from "react-redux";
import { bindActionCreators } from "redux";

const Featured = () => {
  const featured = useSelector(state=> state.products.featured);
  const dispatch = useDispatch();
  const setFeatured = bindActionCreators(fetchFeatured,dispatch);

  useEffect(() => {
    setFeatured();
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
