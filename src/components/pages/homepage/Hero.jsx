import SearchBar from "../Shop/SearchBar";
import {useNavigate} from 'react-router';
import image from '../../../assets/bg.jpg'


const Hero = () => {

    const navigate = useNavigate();

    const toShop = () =>{
        navigate('/shop');
    }

    return (
        <section className="hero">
            <img src={image} alt="Hero background" />
        <h2>Get <span className='highlight'>started</span> by having a look at our <span className='highlight'>store</span>.</h2>
            <section className="center">
                <SearchBar searchClass="hero-search"/>
                <button onClick={toShop} className="cta center"><i className="fas fa-search"></i></button>
            </section>
        </section>
    );
}

export default Hero
