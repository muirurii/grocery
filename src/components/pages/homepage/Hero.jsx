import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="hero">
            <section className="hero-bg">
                <div className="large-img"></div>
                <div className="small-img">
                <div></div>
                <div></div>
                </div>
            </section>
                <section className="hero-text">
                    <p>
                        SHOP FRESH AND QUALITY PRODUCTS AT AFFORDABLE PRICES
                    </p>
                    <button onClick={
                        ()=>{
                           navigate('/shop') 
                        }
                    }>Shop Now</button>
                </section>
        </section>
    );
}

export default Hero
