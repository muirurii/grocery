import Hero from './Hero';
import Featured from './Featured';
import HowItWorks from './HowItWorks';
import Categories from './Categories';
import useScrollToTop from "../../../customHooks/useScroll";

const Homepage = () => {

    useScrollToTop();

    return (
        <main>
            <Hero />
            <Categories />
            <Featured />
            <HowItWorks />
        </main>
    )
}

export default Homepage
