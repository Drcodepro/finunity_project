
import big_img from "../assets/Image/AboutSection_imgs/big_about_img.png";
import mid_img from "../assets/Image/AboutSection_imgs/midd_about_img.png";
import small_img from "../assets/Image/AboutSection_imgs/small_about_img.png";

import useIntersectionObserver from "./InterSection_observer";
import "./AboutSection.css";

const AboutSection=()=>{
    const ref = useIntersectionObserver({
        threshold: 0.1
      });
  
    return(
        <div ref={ref} className="aboutsection_container hidden" id="aboutSection">
            <div className="about_img_container">
                <img src={big_img} alt="about-img" className="big_about_img"/>
                <img src={mid_img} alt="about-img" className="midd_about_img" />
                <img src={small_img} alt="about-img" className="small_about_img"/>
            </div>

            <div className="aboutsection_info_container">
                <h1 className="about_heading">About Us</h1>
                <p>Finunity is more than just a platform; it's a movement towards a
more inclusive and innovative financial future. Join us in this journey
to transform finance and embrace the limitless possibilities of
cryptocurrency. Together, we can build a community where financial
freedom and opportunity are accessible to all. </p>
<p>Our platform empower individuals and businesses
by providing a robust and secure
ecosystem that integrates traditional
finance with the dynamic world of
cryptocurrency.</p>
            </div>       
        </div>
    )
}

export default AboutSection;