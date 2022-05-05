import { GlobalContext } from "../../store/GlobalState";
import { useContext} from "react";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import useScrollToTop from "../../../customHooks/useScroll";

const CategoryPage = ()=>{

    const {products,searchText} = useContext(GlobalContext);

    const {category} = useParams();

    const filteredProducts = products.filter(product=> product.category === category)
    .filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
   
    useScrollToTop();

    return ( 
        <main>
            <section className="shop">
            <SearchBar searchClass = "search-bar" />
            <section className="product-container">
            {   filteredProducts.length ?
                filteredProducts.map((product,index)=>{
                    return <ProductCard key={product.id} product = {product}/>
                }) : `${searchText} not found try searching for something else`
            }</section>
            </section>
        </main>
    )

}

export default CategoryPage;