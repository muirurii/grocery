import Hero from './Hero';
import Featured from './Featured';
import HowItWorks from './HowItWorks';
import Categories from './Categories';

const Homepage = () => {
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
