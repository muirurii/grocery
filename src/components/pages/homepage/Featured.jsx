import ProductCard from "../../layout/ProductCard";
// import {soya} from '../../images/products/ovacado.jpg'/
const Featured = () => {
    const featured = [
        {
            name:'Ovacado',
            amount: '1kg',
            price:4
        },
        {
            name:'Cabbage',
            amount:'1 kg',
            price:6
        },{
           name:'Colored capsicum',
           amount:'2kg',
           price:5
        },
        {
            name:'Courgettes',
            amount:'2kg',
            price:7,
        },
        {
            name:'French beans',
            amount:'1kg',
            price:7,
        }
        
    ]
    return (
        <section>
            <h1>Featured Products</h1>
            <section className="product-container">
                {featured.map((product,index)=>{
                  return <ProductCard key={index} productName={product.name} price={product.price}/>
                })}
               
            </section>
        </section>
    )
}

export default Featured
