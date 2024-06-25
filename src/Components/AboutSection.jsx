
import about_img from "../assets/Image/about_image.webp";
import useIntersectionObserver from "./InterSection_observer";
import "./AboutSection.css";

const AboutSection=()=>{
    const ref = useIntersectionObserver({
        threshold: 0.1
      });
  
    return(
        <div ref={ref} className="aboutsection_container hidden">

            <img src={about_img} alt="about-img" className="aboutsection_img" />

            <div className="aboutsection_info_container">
                <h1>About Us</h1>
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