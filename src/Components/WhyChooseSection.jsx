

import "./WhyChooseSection.css";

import icon1 from "../assets/Icons/WhyChoose_icons/icon1.png";
import icon2 from "../assets/Icons/WhyChoose_icons/icon2.png";
import icon3 from "../assets/Icons/WhyChoose_icons/icon3.png";
import icon4 from "../assets/Icons/WhyChoose_icons/icon4.png";
import useIntersectionObserver from "./InterSection_observer";


export default function WhyToChoose(){

const ref1 = useIntersectionObserver({
    threshold: 0.1
  });
  const ref2 = useIntersectionObserver({
    threshold: 0.1
  });
  const ref3 = useIntersectionObserver({
    threshold: 0.1
  });

  const ref4 = useIntersectionObserver({
    threshold: 0.1
  });

    return(
        <div className="whyChoose_section_container">
            <h1 className="heading">Why choose Us?</h1>

            <div className="whyChoose_box_container">  

                <div ref={ref1} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon1} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Increased Earnings</h1>
                        <hr />
                        <div className="benifit_info">
                            <ul>
                                <li>Boost your income by re-topping up your investment.</li>
                                <li>Flexibility to re-topup at any time to maximize returns.</li>
                                <li>Enhance your earnings potential with compounding growth.</li>
                            </ul>

                        </div>
                    </div>
                </div>



                <div ref={ref2} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon2} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Transparent & Predictable Income</h1>
                        <hr />

                        <div className="benifit_info">
                            <ul>
                                <li>Provides a steady and predictable source of income.</li>
                                <li>Daily credited ROI can be withdrawn, reinvested, or used for other purposes.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>


                <div ref={ref3} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon3} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Daily Rewards and Awards</h1>
                        <hr />
                        <div className="benifit_info">
                            <ul>
                                <li>Direct Business $5000: Earn $10 daily.</li>
                                <li>Direct Business $10000: Earn $25 daily.</li>
                                <li>Direct Business $25000: Earn $50 daily.</li>
                                <li>Direct Business $50000: Earn $100 daily.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>


                <div ref={ref4} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon4} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Secure Investment</h1>
                        <hr />
                        
                        <div className="benifit_info">
                            <ul>
                                <li>Replacing a maintains the amount of lines. When replacing a selection. help agencies to define their new business objectives and then create.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>

                
            </div>

        </div>
    )
}