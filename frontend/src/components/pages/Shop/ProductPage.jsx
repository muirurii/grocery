import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useScrollToTop from "../../../customHooks/useScroll";
import fetchData from "../../../customHooks/fetchData";
import Loader from "../../../components/layout/Loader";

const ProductPage = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState({ product: {}, related: [] });

  const navigate = useNavigate();

  useScrollToTop();

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(`/products/${productId}`);
      setDetails({ related: res.data.related, product: res.data.product });
    };
    getData();
  }, [productId]);

  return !details.related.length ? (
    <Loader />
  ) : (
    <main className="product-page">
      <h1>{details.product.name}</h1>
      <div className="hide-more">
        <button className="go-back" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> &nbsp; Back
        </button>
        <ProductCard product={details.product} />
        <div className="description">
          <h4>
            {details.product.price}$ per {details.product.amount_each}
          </h4>
          <p>{details.product.description}</p>
        </div>
      </div>
      <div>
        <h1>Related products</h1>
        <div className="product-container">
          {details.related.map((prod) => (
            <ProductCard product={prod} key={prod._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
