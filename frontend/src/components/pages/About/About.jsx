import AboutText from "./AboutText";
import TermsAndConditions from "./TermsAndConditions";
import useScrollToTop from "../../../customHooks/useScroll";

const About = () => {
  useScrollToTop();

  return (
    <main>
      <AboutText />
      <TermsAndConditions />
    </main>
  );
};

export default About;
