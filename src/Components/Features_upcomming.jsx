import UpcomingBox from "./Other_components/Upcoming_Section";
import Token_Launch_img from "../assets/Image/BLUE_TOKENl.png";
import Master_Card_img from "../assets/Image/master_card_posterr.png";
import Debit_Card_img from "../assets/Image/debit_card_poster.png";

// tier1 site logos import

import Binance from"../assets/Icons/tire1_2_logo/Binance_logo.svg";
import Kucoin from"../assets/Icons/tire1_2_logo/Kucoin_logo.svg";
import Okx from"../assets/Icons/tire1_2_logo/Okx_logo.svg";
import Gate from"../assets/Icons/tire1_2_logo/Gate_logo.svg";
import Bybit from"../assets/Icons/tire1_2_logo/Bybit_logo.svg";
import Bitget from"../assets/Icons/tire1_2_logo/Bitget_logo.svg";
// import Coinbase from"../assets/Icons/tire1_2_logo/Coinbase_logo.svg";




// tier2 site logos import

import Mexc from"../assets/Icons/tire1_2_logo/Mexc_logo.svg";
import Lbank  from"../assets/Icons/tire1_2_logo/Lbank_logo.svg";
import Bitmart from"../assets/Icons/tire1_2_logo/Bitmart_logo.svg";
import Hotcoin from"../assets/Icons/tire1_2_logo/Hotcoin_logo.svg";
import Xt from"../assets/Icons/tire1_2_logo/Xt_logo.svg";
import Gemini from"../assets/Icons/tire1_2_logo/Gemini_logo.svg";
// import Upbit from"../assets/Icons/tire1_2_logo/Upbit_logo.svg";




import "./Features_upcomming.css";
import useIntersectionObserver from "./InterSection_observer";

const TokenLaunchInfo = ["Exchange Listing Coming Soon" , Token_Launch_img , "We are excited to announce that in the near future, we will be launching our very own FunUnity Token! This groundbreaking new token is set to revolutionize the way our community interacts and engages with our platform."]

const MasterCardInfo = ["Master Card Finance", Master_Card_img, "Experience unparalleled convenience, rewards, and security with the Fin Unity MasterCard. Whether you're shopping locally or traveling internationally, our card offers seamless transactions, exclusive benefits, and robust protection."]

const DebitCardInfo = ["Debit Card Finance",Debit_Card_img, "The Fin Unity Debit Card is your perfect companion for everyday spending and financial management. Enjoy direct access to your funds, budget-friendly features, and robust security, all designed to enhance your financial freedom."]

export default function CommingFeture(){
    const ref = useIntersectionObserver({
        threshold: 0.1,
      });


    return(
        <div className="Comming_Feature_Container" id="upCommingSection">

            <h1 className="Feature_section_heading">Upcoming Features</h1>

            {/* <UpcomingBox heading = {TokenLaunchInfo[0]} poster={TokenLaunchInfo[1]} content={TokenLaunchInfo[2]} style="reverse"/> */}




            <div ref={ref} className="Token_soon_container hidden">
              <img loading="lazy"
                src={TokenLaunchInfo[1]}
                alt="about-img"
                className="TokenLaunch_img"
              />
      
              <div className="Token_soon_info_container">
                <h1>{TokenLaunchInfo[0]}</h1>
                <p>
                  {TokenLaunchInfo[2]}
                </p>

                <div className="tier_logo_container">

                <div className="tier2_container">
                        <p>Tire 2 :</p>
                        <img src={Mexc} alt="" />
                        <img src={Lbank} alt="" />
                        <img src={Bitmart} alt="" />
                        <img src={Hotcoin} alt="" />
                        <img src={Xt} alt="" />
                        <img src={Gemini} alt="" />
                    </div>


                    <div className="tier1_container">
                        <p>Tire 1 :</p>
                        <img src={Binance} alt="" />
                        <img src={Kucoin} alt="" />
                        <img src={Okx} alt="" />
                        <img src={Gate} alt="" />
                        <img src={Bybit} alt="" />
                        <img src={Bitget} alt="" />
                    </div>


                </div>

              </div>
            </div>







            <hr />

            <UpcomingBox heading = {MasterCardInfo[0]} poster={MasterCardInfo[1]} content={MasterCardInfo[2]}/>

            <hr />

            <UpcomingBox heading = {DebitCardInfo[0]} poster={DebitCardInfo[1]} content={DebitCardInfo[2]} style="reverse"/>

        </div>
    )
}