import SearchBar from "../../layout/SearchBar";
import ProductCard from "../../layout/Cart/ProductCard";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const Shop = () => {
    const {products,searchText,filterValue} = useContext(GlobalContext);

    const filteredProducts = products.filter(product=> product.category.includes(filterValue))
    .filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    return ( 
        <main>
            <section className="shop">
                <SearchBar />
            <section className="product-container">
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
