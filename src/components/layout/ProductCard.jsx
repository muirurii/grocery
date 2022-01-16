const ProductCard = ({productName,price}) => {
    return (
        <article className="product-card">
            <div className="product-background"></div>
            <div className="product-info">
                <p><strong>{productName}</strong></p>
                <strong>{price}$</strong>
            </div>
            <button>Add to cart <i class="fas fa-cart-plus"></i></button>
        </article>
    )
}

export default ProductCard;
