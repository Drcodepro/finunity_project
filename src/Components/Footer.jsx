import "./Footer.css";
import facebook_icon from '../assets/Icons/socialMedia_icon/insta_icon_blue.png';
import insta_icon from '../assets/Icons/socialMedia_icon/insta_icon_blue.png';
import twitter_icon from '../assets/Icons/socialMedia_icon/tweet_icon_blue.png';
import linkedin_icon from '../assets/Icons/socialMedia_icon/linkedin_icon_blue.png';
// import youtube_icon from '../assets/Icons/socialMedia_icon/youtube_icon.png';
// import mail_icon from '../assets/Icons/socialMedia_icon/mail_icon.png';
// import telegram_icon from '../assets/Icons/socialMedia_icon/telegram_icon.png';

export default function Footer() {
  return (
    <div className="Home_footer_section" id="footer">
      <div className="footer_mainContent">

        <div className="Home_footer_info">
          <div className="Home_Footer_logo_container">
           <h1>Finunity</h1>
          </div>
          <div className="footer_info">FINUNITY IS MORE THAN JUST A PLATFORM; IT'S A MOVEMENT TOWARDS A MORE INCLUSIVE AND INNOVATIVE FINANCIAL FUTURE.</div>
        </div>

        <div className="About_us">
          <h2>Important</h2>
          <p>About Us</p>
          <p>Careers</p>
        </div>
        
        <div className="contact_us">
          <h2>Contact Us</h2>
          <div className="social_media_icons">
            {/* <a href=""><img src={mail_icon} alt="" /></a> */}
            {/* <a href=""><img src={telegram_icon} alt="" /></a> */}
            <a href=""><img src={facebook_icon} alt="" /></a> 
            <a href=""><img src={insta_icon} alt="" /></a> 
            <a href=""><img src={twitter_icon} alt="" /></a>
            
            <a href=""><img src={linkedin_icon} alt="" /></a> 
          </div>
        </div>

      </div>

      <hr />

      <div className="footer_rights">
        <div className="rights">
          <p>@2024. All rights reserved </p>
        </div>
      </div>
    </div>
  );
}
