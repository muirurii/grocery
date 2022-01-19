import ProductCard from "../../layout/Cart/ProductCard";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const Featured = () => {
    const {products} = useContext(GlobalContext);
    const featured = products.filter(prod=> prod.isFeatured);
    return (
        <section>
            <h1>Featured Products</h1>
            <section className="product-container">
                {featured.map((product,index)=>{
                  return <ProductCard key={index} product={product}/>
                })}
               
            </section>
        </section>
    )
}

export default Featured
