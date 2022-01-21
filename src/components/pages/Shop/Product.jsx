import ProductCard from "../../layout/Cart/ProductCard";
import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const ProductPage = () => {
    window.scrollTo(0,0)
    const {products} = useContext(GlobalContext);
    const {productname} = useParams();

    const navigate = useNavigate();

    const product = products.filter(product => product.name.toLowerCase() === productname);
    const related = products.filter(prod=> prod.category === product[0].category).filter(prod=> prod.id != product[0].id).slice(0,4);
    return (
        <main className="product-page">
            <h1>{product[0].name}</h1>
            <div className="hide-more">
            <button className="go-back" onClick={()=>navigate(-1)}>
                <i className="fas fa-arrow-left"></i></button>
                <ProductCard product={product[0]}/>
                <p className="description">
                    {product[0].description}
                </p>
            </div>
            <div>
                <h1>Related products</h1>
                <div className="product-container">
                    {
                        related.map(prod=> <ProductCard product={prod} key={prod.id}/>)
                    }
                </div>
            </div>
        </main>
    )
}

export default ProductPage;
