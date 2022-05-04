import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const Shop = () => {
    const {products,searchText} = useContext(GlobalContext);

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    return ( 
        <main>
            <section className ="shop">
                <SearchBar  searchClass = "search-bar"/>
            <section className = "product-container">
            {   filteredProducts.length ?
                filteredProducts.map((product,index)=>{
                    return <ProductCard key={product.id} product = {product}/>
                }) : 'No products found try searching for something else'
            }</section>
            </section>
        </main>
    )
}

export default Shop;
