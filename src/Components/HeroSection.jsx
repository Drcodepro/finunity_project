
import poster from "../assets/Image/Hero_Poster.webp";
import star from "../assets/Icons/Hero_star.webp";
import useIntersectionObserver from "./InterSection_observer";

import "./HeroSection.css";

const HeroSection=()=>{

    const ref = useIntersectionObserver({
      threshold: 0.1
    });

    return(
      <div ref={ref}  className="herosection_container hidden">

        <div className="bluebg_container">
            <div className=" herosection_info_container">
                <h1>Unlock Your Financial Freedom: Join Our Top-Ranked Network Today</h1>
                <p>Welcome to Finunity, the cutting-edge finance and
cryptocurrency community designed to revolutionize
the way we interact with digital assets and financial
services. Our mission is to create a seamless and
inclusive platform where users can explore, invest, and
grow their wealth through innovative financial
solutions.</p>
                <div className="button_container">
                    <button>learn more</button>
                </div>
            </div>       
            <img src={star} alt="star img"  className="herosection_star"/> 
        </div>

        
        <img src={poster} alt="poster-img" className="herosection_poster" />
      </div>
    )
}

export default HeroSection;