 
import HeroArea from "./HeroArea";
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import HowItWorksAreaHomeOne from "./HowItWorksAreaHomeOne";
import TextSliderHomeOne from "./TextSliderHomeOne";
import HelpAreaHomeOne from "./HelpAreaHomeOne";
import InfoAreaHomeOne from "./InfoAreaHomeOne";
import AppAreaHomeOne from "./AppAreaHomeOne";
// import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
// import VideoAreaHomeOne from "./VideoAreaHomeOne";
// import PricingAreaHomeOne from "./PricingAreaHomeOne";
// import FaqHomeOne from "./FaqHomeOne";
// import BlogHomeOne from "./BlogHomeOne";
import InstagramHomeOne from "./InstagramHomeOne"; 
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";
import Wrapper from "../../../common/Wrapper";
import LiveSupport from "./liveSupport";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import VideoAreaHomeOne from "./VideoAreaHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import FaqHomeOne from "./FaqHomeOne";

const HomeOne = () => {
	return (
    <Wrapper>
		<div className="bg-dark">
			<HeaderOne />
			<HeroArea />
      <AboutAreaHomeOne />
      <HowItWorksAreaHomeOne />
      <TextSliderHomeOne />
      <InstagramHomeOne />
      <LiveSupport />
      <HelpAreaHomeOne />
      <InfoAreaHomeOne />
      <TestimonialAreaHomeOne />
      <VideoAreaHomeOne />
      <AppAreaHomeOne />
      <FaqHomeOne />
      <BlogHomeOne />
      <FooterOne />
		</div>
    </Wrapper>
	);
};

export default HomeOne;
