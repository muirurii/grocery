import CartButtons from "./CartButtons";


const CartItem = ({product}) => {
    return (
        <li>
            <div className="detail">
                <label>{product.name}</label>
                <p>{product.amount_each} each</p>
            </div>
            <CartButtons product={product} />
        </li>
    )
}

export default CartItem;
