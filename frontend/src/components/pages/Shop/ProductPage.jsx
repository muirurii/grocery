import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import useScrollToTop from "../../../customHooks/useScroll";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProduct } from "../../../store/actions/productActions";
import ProductLoading from "../../layout/ProductLoading";
import DescriptionLoading from "../../layout/DescriptionLoading";

const formatProdName = (string) => string.split("-").join(" ");

const ProductPage = () => {
  const params = useParams();
  const productName = formatProdName(params.productName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useScrollToTop();

  const { product, related } = useSelector(
    (state) => state.products.productDetails
  );
  const getProduct = bindActionCreators(fetchProduct, dispatch);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const awaitProduct = async () => {
      await getProduct(productName);
      setLoading(false);
    };
    awaitProduct();
  }, [productName]);

  return !related.length ? (
    "..."
  ) : (
    <main className="product-page">
      <h1>{productName}</h1>
      <div className="hide-more">
        <button className="go-back" onClick={() => navigate(-1)}>
          <i className="fas fa-arrow-left"></i> &nbsp; Back
        </button>
        {loading ? (
          <>
            <ProductLoading />
            <DescriptionLoading />
          </>
        ) : (
          <>
            <ProductCard product={product} />
            <div className="description">
              <h4>
                {product.price}$ per {product.amount_each}
              </h4>
              <p>{product.description}</p>
            </div>
          </>
        )}
      </div>
      <div>
        <h1>Related products</h1>
        <div className="product-container">
          {loading ? (
            <>
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
              <ProductLoading />
            </>
          ) : (
            related.map((prod) => <ProductCard product={prod} key={prod._id} />)
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
