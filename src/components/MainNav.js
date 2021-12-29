import {Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';

const MainNav = () => {

    const MovePage = (x) => {
        if (x === "home") {
            // Change Page
            document.getElementById("home").style.transform = "translateX(0)";
            document.getElementById("about").style.transform = "translateX(100%)";
            document.getElementById("portfolio").style.transform = "translateX(200%)";
            document.getElementById("resume").style.transform = "translateX(300%)";
            // setTimeout(() => {
            //     document.getElementById("logo-box").classList.remove("logo-box-animate");
                
            // }, 1000);

            // Gears
            document.getElementById("gear").style.transform = "rotate(0deg)";
            document.getElementById("gear").style.fill = "#ff20b5";
            document.getElementById("gear2").style.transform = "rotate(0deg)";
            document.getElementById("gear2").style.fill = "#ff20b5";

            // Change Nav Colors   
            document.getElementById("home-btn").classList.add("pink-font");
            document.getElementById("about-btn").classList.remove("blue-font");
            document.getElementById("portfolio-btn").classList.remove("orange-font");
            document.getElementById("resume-btn").classList.remove("green-font");

        } else if(x === "about") {
            // Change Page
            document.getElementById("home").style.transform = "translateX(-100%)";
            document.getElementById("about").style.transform = "translateX(0)";
            document.getElementById("portfolio").style.transform = "translateX(100%)";
            document.getElementById("resume").style.transform = "translateX(200%)";
            // document.getElementById("logo-box").classList.add("logo-box-animate");

            // Gears
            document.getElementById("gear").style.transform = "rotate(-180deg)";
            document.getElementById("gear").style.fill = "#20d2ffd0";
            document.getElementById("gear2").style.transform = "rotate(180deg)";
            document.getElementById("gear2").style.fill = "#20d2ffd0";

            // Change Nav Colors   
            document.getElementById("home-btn").classList.remove("pink-font")
            document.getElementById("about-btn").classList.add("blue-font")
            document.getElementById("portfolio-btn").classList.remove("orange-font")
            document.getElementById("resume-btn").classList.remove("green-font")
        
        } else if(x === "portfolio") {
            document.getElementById("home").style.transform = "translateX(-200%)";
            document.getElementById("about").style.transform = "translateX(-100%)";
            document.getElementById("portfolio").style.transform = "translateX(0)";
            document.getElementById("resume").style.transform = "translateX(100%)";
            // document.getElementById("logo-box").classList.add("logo-box-animate")

            // Gears
            document.getElementById("gear").style.transform = "rotate(-360deg)";
            document.getElementById("gear").style.fill = "#d67417a9";
            document.getElementById("gear2").style.transform = "rotate(360deg)";
            document.getElementById("gear2").style.fill = "#d67417a9";

            // Change Nav Colors   
            document.getElementById("home-btn").classList.remove("pink-font")
            document.getElementById("about-btn").classList.remove("blue-font")
            document.getElementById("portfolio-btn").classList.add("orange-font")
            document.getElementById("resume-btn").classList.remove("green-font")

        } else if(x === "resume") {
            document.getElementById("home").style.transform = "translateX(-300%)";
            document.getElementById("about").style.transform = "translateX(-200%)";
            document.getElementById("portfolio").style.transform = "translateX(-100%)";
            document.getElementById("resume").style.transform = "translateX(0)";
            // document.getElementById("logo-box").classList.add("logo-box-animate")

            // Gears
            document.getElementById("gear").style.transform = "rotate(-540deg)";
            document.getElementById("gear").style.fill = "#17d627a9";
            document.getElementById("gear2").style.transform = "rotate(540deg)";
            document.getElementById("gear2").style.fill = "#17d627a9";

            // Change Nav Colors   
            document.getElementById("home-btn").classList.remove("pink-font")
            document.getElementById("about-btn").classList.remove("blue-font")
            document.getElementById("portfolio-btn").classList.remove("orange-font")
            document.getElementById("resume-btn").classList.add("green-font")
        }
    }

    const BlurBox = (value) => {
        if(value) {
            document.getElementById("logo-box-front").classList.add("box-blur")
        } else {
            document.getElementById("logo-box-front").classList.remove("box-blur")
        }
    }

    const NameChange = (value, name) => {
        if(value) {
            document.getElementById("box-word").innerHTML = name
        } else {
            document.getElementById("box-word").innerHTML = name
        }
    }

    useEffect(() => {
        document.getElementById("home-btn").classList.add("pink-font")
    }, []);

    return (
        <nav 
            id="navbar" 
            onMouseOver={()=>{BlurBox(true)}}
            onMouseOut={()=>{BlurBox(false)}}
        >
            {/* Ether name */}
            <Col className="mx-3 ether">
                SeanBlock.eth
            </Col>

            {/* Nav Buttons */}
            <Col className="d-flex justify-content-center align-items-center">

                {
                    ["home", "about", "portfolio", "resume"].map((item)=>{
                        return(
                        <button 
                            id={`${item}-btn`} 
                            onClick={()=>{MovePage(item)}}
                            onMouseOver={()=>{NameChange(true, item)}}
                            onMouseOut={()=>{NameChange(false, "Sean Block")}}
                        >
                            {item}
                        </button>
                        )
                    })
                }
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