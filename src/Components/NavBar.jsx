import "./NavBar.css";
import { useState } from "react";


export default function NavBar(){
    const [isvisible,setisvisible] = useState(false);
    function handleIsVisible(){
        setisvisible(!isvisible);
    }


    return(
    <div className=" nav_container" id="navBar">
        <h1 className="site_name_nav">Finunity</h1>
        <div  className={`${isvisible  ?  "none" :"navIsHidden "} nav_navigation_container`}>
           
               <a href="#navBar"><div className="nav_navigation flex" >Home</div></a>

               <a href="#aboutSection"><div className="nav_navigation flex" >About Us</div></a>

                <div className="nav_navigation flex" >Buy Token</div>
                
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