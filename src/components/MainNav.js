import {Col} from 'react-bootstrap';
import { useState } from 'react';

const MainNav = () => {

    const [activeLink, setActiveLink] = useState("home")

    const MovePage = (x) => {
        console.log("X:" + x);
        if (x === "home") {
          document.getElementById("home").style.transform = "translateX(0)";
          document.getElementById("about").style.transform = "translateX(100%)";
          document.getElementById("logo-box").classList.remove("logo-box-animate")

        } else if(x === "about") {
          document.getElementById("home").style.transform = "translateX(-100%)";
          document.getElementById("about").style.transform = "translateX(0)";
          document.getElementById("logo-box").classList.add("logo-box-animate")
        }
    }

    return (
        <nav id="navbar">
            {/* Ether name */}
            <Col className="mx-3 ether">
                SeanBlock.eth
            </Col>

            {/* Nav Buttons */}
            <Col className="d-flex justify-content-center align-items-center">
                <button onClick={()=>{MovePage("home")}}>Home</button>
                <button  onClick={()=>{MovePage("about")}}>About</button>
                <button  onClick={()=>{MovePage("portfolio")}}>Portfolio</button>
                <button  onClick={()=>{MovePage("resume")}}>Resume</button>
            </Col>

            {/* Social Media Icons */}
            <Col id="social" className="mx-3">
                <a href="#github"><i class="fab fa-github"></i></a>
                <a href="#email"><i class="fab fa-facebook"></i></a>
            </Col>
        </nav>
     );
}
 
export default MainNav;