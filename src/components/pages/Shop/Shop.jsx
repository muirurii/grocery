import SearchBar from "../../layout/SearchBar";
import ProductCard from "../../layout/ProductCard";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const Shop = () => {
    const {products} = useContext(GlobalContext);

    return ( 
        <main>
            <section className="shop">
                <SearchBar />
            <section className="product-container">
            {
                products.map((product,index)=>{
                    return <ProductCard productName={product.name} price={product.price}/>
                })
            }</section>
            </section>
        </main>
    )
}

export default Shop;
