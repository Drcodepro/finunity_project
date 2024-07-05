

import "./WhyChooseSection.css";

import icon1 from "../assets/Icons/WhyChoose_icons/icon1.gif";
import icon2 from "../assets/Icons/WhyChoose_icons/icon2.gif";
import icon3 from "../assets/Icons/WhyChoose_icons/icon3.gif";
import icon4 from "../assets/Icons/WhyChoose_icons/icon4.gif";
import icon5 from "../assets/Icons/WhyChoose_icons/icon5.gif";

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

  const ref5 = useIntersectionObserver({
    threshold: 0.1
  });

    return(
        <div className="whyChoose_section_container" id="whyChooseSection">
            <h1 className="heading">Why choose Us?</h1>

            <div className="whyChoose_box_container">  

                <div ref={ref1} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon1} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Community Support</h1>
                        <hr />
                        <div className="benifit_info">
                            <ul>
                                <li>ENGAGE WITH A SUPPORTIVE COMMUNITY AND ACCESS EDUCATIONAL RESOURCES.</li>
                            </ul>

                        </div>
                    </div>
                </div>



                <div ref={ref2} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon2} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Consistent Returns</h1>
                        <hr />

                        <div className="benifit_info">
                            <ul>
                                <li> DAILY ROI ENSURES STEADY INCOME.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>


                <div ref={ref3} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon3} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1> Attractive Rewards</h1>
                        <hr />
                        <div className="benifit_info">
                            <ul>
                                <li>EARN ADDITIONAL INCOME THROUGH DIRECT BUSINESS MILESTONES AND RE-TOPUP BONUSES.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>


                <div ref={ref4} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon4} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Secure Transactions</h1>
                        <hr />
                        
                        <div className="benifit_info">
                            <ul>
                                <li> SAFE AND RELIABLE DEPOSIT AND WITHDRAWAL PROCESSES.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>


                <div ref={ref5} className="WhyChooseBox hidden">
                    <div className="logo_container">
                        <img src={icon5} alt="logo" />
                    </div>
        
                    <div className="WhyBox_info">
                        <h1>Flexible Investment Options</h1>
                        <hr />
                        
                        <div className="benifit_info">
                            <ul>
                                <li>CHOOSE PACKAGES THAT SUIT YOUR FINANCIAL GOALS.</li>
                            </ul>

                        </div>
                    </div>
        
                </div>
                
            </div>

        </div>
    )
}