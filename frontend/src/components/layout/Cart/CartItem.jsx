import CartButtons from "./CartButtons";

const CartItem = ({product}) => {
    return (
        <li>
            <div className="detail">
                <div>
                <label>{product.name}</label>
                <p>{`${product.amount_each}`} each</p><br/>
                <label className="cost">Cost:<span>${product.amount * product.price}</span></label> 
                </div>
                <p>{`${product.amount} item${product.amount> 1 ? 's' : ''}` } </p>
            </div>
            <CartButtons product={product} />
        </li>
    )
}

export default CartItem;
