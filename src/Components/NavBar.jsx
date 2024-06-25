import "./NavBar.css";
import { useState } from "react";


export default function NavBar(){
    const [isvisible,setisvisible] = useState(false);
    function handleIsVisible(){
        setisvisible(!isvisible);
    }


    return(
    <div className=" nav_container">
        <h1 className="site_name_nav">Finunity</h1>
        <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container`}>
           
                <div className="nav_navigation flex" >BUY TOKENS</div>
                
                <div className="nav_navigation"  >CONTACT</div>
                
                <div className="nav_navigation" >FAQs</div>
            </div>

            <div className="buy_button"> 
                <button>Buy Now</button>
            </div>

            <div className= "toggle_nav_button" onClick={handleIsVisible}>
                <i className="fa-solid fa-bars fa-xl"></i>        
            </div>

    </div>)     
}