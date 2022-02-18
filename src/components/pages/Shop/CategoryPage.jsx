import { GlobalContext } from "../../store/GlobalState";
import { useContext,useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const CategoryPage = ()=>{

    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);

    const {products,searchText} = useContext(GlobalContext);

    const {category} = useParams();

    const filteredProducts = products.filter(product=> product.category === category)
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

export default CategoryPage;