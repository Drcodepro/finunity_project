import UpcomingBox from "./Other_components/Upcoming_Section";
import Token_Launch_img from "../assets/Image/Launch_Token_poster.png";
import Master_Card_img from "../assets/Image/master_card_poster.png";
import Debit_Card_img from "../assets/Image/debit_card_poster.png";

import "./Features_upcomming.css";

const TokenLaunchInfo = ["Token Upcoming" , Token_Launch_img , "We are excited to announce that in the near future, we will be launching our very own FunUnity Token! This groundbreaking new token is set to revolutionize the way our community interacts and engages with our platform."]

const MasterCardInfo = ["Master Card Finance", Master_Card_img, "Experience unparalleled convenience, rewards, and security with the Fin Unity MasterCard. Whether you're shopping locally or traveling internationally, our card offers seamless transactions, exclusive benefits, and robust protection."]

const DebitCardInfo = ["Debit Card Finance",Debit_Card_img, "The Fin Unity Debit Card is your perfect companion for everyday spending and financial management. Enjoy direct access to your funds, budget-friendly features, and robust security, all designed to enhance your financial freedom."]

export default function CommingFeture(){
    return(
        <div className="Comming_Feature_Container">

            <h1 className="Feature_section_heading">Upcoming Features</h1>

            <UpcomingBox heading = {TokenLaunchInfo[0]} poster={TokenLaunchInfo[1]} content={TokenLaunchInfo[2]} style="reverse"/>

            <UpcomingBox heading = {MasterCardInfo[0]} poster={MasterCardInfo[1]} content={MasterCardInfo[2]}/>

            <UpcomingBox heading = {DebitCardInfo[0]} poster={DebitCardInfo[1]} content={DebitCardInfo[2]} style="reverse"/>

        </div>
    )
}