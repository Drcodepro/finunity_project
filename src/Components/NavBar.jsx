import "./NavBar.css";
import { useState ,useEffect} from "react";
import finunity_logo from "../assets/Icons/finunity logo.png";

export default function NavBar(){
    const [isvisible,setisvisible] = useState(false);
    useEffect(() => {
        const navbar = document.querySelector(".nav_navigation_container")
        navbar.classList.add("animateNav");

 },[isvisible]);

    function handleIsVisible(){
        setisvisible(!isvisible);

    }


    return(
    <div className=" nav_container" id="navBar">
        <img loading="lazy" src={finunity_logo} alt="" className="finunity_logo" />

        <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container`}>
           
               <a href="#navBar"><div className="nav_navigation flex" >Home</div></a>

               <hr />

               <a href="#aboutSection"><div className="nav_navigation flex" >About Us</div></a>

               <hr />

               <a href="#howWorkSection"><div className="nav_navigation flex" >How Work</div></a>
             
               <hr />

               <a href="#upCommingSection"><div className="nav_navigation flex" >Up Comming</div></a>
               
               <hr />

               <a href="#whyChooseSection"><div className="nav_navigation flex" >Why To Choose</div></a>

               <hr />

                <a href="#footer"><div className="nav_navigation"  >Contact</div></a>
                
            </div>

            <div className="buy_button"> 
                <button>Sign In</button>
            </div>

            <div className= "toggle_nav_button" onClick={handleIsVisible}>
                <i className="fa-solid fa-bars fa-xl"></i>        
            </div>

    </div>)     
}