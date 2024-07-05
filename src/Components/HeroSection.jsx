// import poster from "../assets/Image/Hero_Poster.webp";
// import poster from "../assets/Image/finunity_langing_poster.gif";
import finu_logo from "../assets/Icons/finunity logo.png";
import bg_video from "../assets/Image/Herosection_bg_video_new.webm";

import useIntersectionObserver from "./InterSection_observer";
import useIntersectionObserver_typing from "./InterSection_observer_Typing";

import "./HeroSection.css";

const HeroSection = () => {
  const ref_type = useIntersectionObserver_typing({
    threshold: 0.1,
  });

  const ref = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="herosection_container hidden" id="heroSection">
      <video src={bg_video} autoPlay muted loop className="Hero_bg_video" ></video>
      
      <div className="bluebg_container">
        <div className=" herosection_info_container">

          <img loading="lazy" src={finu_logo} alt="" className="home_finunity_logo"/>
          <h1 ref={ref_type} className="typing">
          Fintech + Community= Finunity
          </h1>
          <p>
            Welcome to Finunity, the cutting-edge finance and cryptocurrency
            community designed to revolutionize the way we interact with digital
            assets and financial services. Our mission is to create a seamless
            and inclusive platform where users can explore, invest, and grow
            their wealth through innovative financial solutions.
          </p>
          <div className="button_container">
            <button>learn more</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HeroSection;
