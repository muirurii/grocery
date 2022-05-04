import ProductCard from "./ProductCard";
import { useContext} from "react";
import { GlobalContext } from "../../store/GlobalState";
import { useParams, useNavigate } from "react-router";

const ProductPage = () => {
    const {products} = useContext(GlobalContext);
    const {productname} = useParams();

    const navigate = useNavigate();

    const product = products.filter(product => product.name.toLowerCase() === productname);
    const related = products.filter(prod=> prod.category === product[0].category).filter(prod=> prod.id !== product[0].id).slice(0,4);
    return (
        <main className="product-page">
            <h1>{product[0].name}</h1>
            <div className="hide-more">
            <button className="go-back" onClick={()=>navigate(-1)}>
                <i className="fas fa-arrow-left"></i> &nbsp; Back</button>
                <ProductCard product={product[0]}/>
                  <div className="description">
                  <h4>{product[0].price}$ per {product[0].amount_each}</h4>
                   <p>
                     {product[0].description}
                    </p>
                </div>
                
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
