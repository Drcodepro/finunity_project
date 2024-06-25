
import AboutSection from "../AboutSection";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import HowWork from "../How_work";
import NavBar from "../NavBar";
import PlaneSection from "../PlaneSection";
import TokenLaunch from "../Token_Launch_Section";
import WhyToChoose from "../WhyChooseSection";
import "./HomePage.css";

 const HomePage=()=>{
    return(
        <div className="Home_container">
            <NavBar/>
        <HeroSection/>
        <AboutSection/>
        <HowWork/>
        <PlaneSection/>
        <TokenLaunch/>
        <WhyToChoose></WhyToChoose>
        <Footer/>
        </div>
    )
}

export default HomePage;