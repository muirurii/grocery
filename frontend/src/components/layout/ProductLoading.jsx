const ProductLoading = () => {
  return (
    <div className="product-loading">
      <div className="mock-image"></div>
      <div className="product-info">
        <p>
          <span>Loading text</span>
        </p>
        <span>price is</span>
        <span>23$</span>
      </div>
      <button className="product-btn add-cart">
          Add to cart
        </button>
    </div>
  );
};

export default ProductLoading;
