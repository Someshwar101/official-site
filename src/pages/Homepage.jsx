import Stats from "../sections/Stats";
import Carousel from "../sections/Carousel";
import ChairmanShortMessage from "../sections/ChairmanShortMessage";
import OrganizationProfile from "../sections/OrganizationProfile";
import ScrollingText from "../components/ScrollingText";
import Testimonials from "../sections/Testimonials";
import Utilities from "../sections/Utilities";
import Services from "../sections/OurSchemes";
import WhyChoose from "../sections/WhyChoose";
import Committee from "../sections/Committee";
import FAQs from "../sections/FAQs";
import CTA from "../sections/CTA";

export default function App() {
  return (
    <main>
      <Carousel />
      <ScrollingText />
      {/* <Stats>*/}

      <div className="section-divider"></div>
      <ChairmanShortMessage />
      <Committee />
      <Services />
      <WhyChoose />
      <Utilities />
      <Testimonials />
      <FAQs />
      <CTA />
    </main>
  );
}
