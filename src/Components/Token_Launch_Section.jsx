
import Token_Launch_img from "../assets/Image/Launch_Token_poster.png";
import "./Token_Launch_Section.css";
import useIntersectionObserver from "./InterSection_observer";

const TokenLaunch=()=>{

    const ref = useIntersectionObserver({
        threshold: 0.1
      });

    return(
        <div ref={ref} className="aboutsection_container hidden">

            <img src={Token_Launch_img} alt="about-img" className="TokenLaunch_img" />

            <div className="aboutsection_info_container">
                <h1>Token Comming Soon</h1>
                <p>We are excited to announce that in the near future, we will be launching our very own FunUnity Token! This groundbreaking new token is set to revolutionize the way our community interacts and engages with our platform. </p>
            </div>       
        </div>
    )
}

export default TokenLaunch;