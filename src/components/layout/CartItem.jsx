const CartItem = ({product}) => {
    return (
        <li>
            <div className="detail">
                <label>{product.name}</label>
                <p>{product.amount_each} each</p>
            </div>
            <div className="buttons">
                <button className="decrement">-</button>
                <span>{product.amount}</span>
                <button className="increment">+</button>
                <button className="remove">X</button>
            </div>
        </li>
    )
}

export default CartItem;
