import {Navbar, Container, Nav, Col, Button} from 'react-bootstrap';
import { useEffect } from 'react';

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

    const websiteLinks = [
        "home",
        "about",
        "portfolio",
        "resume"
    ]

    useEffect(() => {
        document.getElementById("home-btn").classList.add("pink-font")
    }, []);

    return (
        <Navbar
            collapseOnSelect 
            expand="lg  " 
            id="navbar" 
            onMouseOver={()=>{BlurBox(true)}}
            onMouseOut={()=>{BlurBox(false)}}
        >
            <Container id="navbar-container">
                <Col className=''>                    
                    seanblock.eth
                </Col>
                <Navbar.Toggle 
                    id="navbar-c"
                    aria-controls="responsive-navbar-nav" 
                    expanded="expanded"
                ><Button className='btn-light-outline bg-dark text-light border-light'>Menu</Button></Navbar.Toggle>
                <Col className='text-center'>
                <Navbar.Collapse 
                    id="responsive-navbar-nav" 
                    className="text-sm-center">
                    {
                        websiteLinks.map((item, key)=>{
                            return(
                                <Nav.Link 
                                    id={`${item}-btn`} 
                                    className="nav-buttons px-3"
                                    onClick={()=>{MovePage(item)}}
                                    onMouseOver={()=>{NameChange(true, item)}}
                                    onMouseOut={()=>{NameChange(false, "Sean Block")}}
                                    eventKey={key}
                                >
                                    {item}
                                </Nav.Link>
                            )
                        })
                    }
                </Navbar.Collapse>
                </Col>
                <Col className='fs-3 text-end'>                    
                    <a href="https://github.com/seanblock" target="_blank" class="devicon-github-original text-light text-decoration-none"></a>
                </Col>
            </Container>
        </Navbar>
     );
}
 
export default MainNav;