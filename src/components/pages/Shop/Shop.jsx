import SearchBar from "../../layout/SearchBar";
import ProductCard from "../../layout/Cart/ProductCard";
import { useContext,useState } from "react";
import { GlobalContext } from "../../store/GlobalState";

const Shop = () => {
    const {products} = useContext(GlobalContext);

    const[filter,setFilter] = useState('');
    const filteredProducts = products.filter(product=> product.category.includes(filter));
    return ( 
        <main>
            <section className="shop">
                <SearchBar setFilter={setFilter}/>
            <section className="product-container">
            {
                filteredProducts.map((product,index)=>{
                    return <ProductCard key={index} product = {product}/>
                })
            }</section>
            </section>
        </main>
    )
}

export default Shop;
