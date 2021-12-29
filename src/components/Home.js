import { useState } from "react";
import wallet from '../img/wallet.png'

const Home = () => {

    const [swap, setSwap] = useState(false);
    const [mousePosition, setMousePosition] = useState({
        X: 0,
        Y: 0
    })

    const handleMouseMove = (e) => {

        let pX = e.pageX;
        let pY = e.pageY;
        let wX = window.innerWidth;
        let wY = window.innerHeight;


        let formulaX = (pX - wX/2) / 20;
        let formulaY = ((wY/2 - pY) / 20);

        setMousePosition({
            X: formulaX, 
            Y: formulaY
        }); 
    }

    const FrontSwap = () => {
        if(swap) {
            document.getElementById("logo-box-front").classList.remove("slide-front");
            setSwap(false);
        } else {
            document.getElementById("logo-box-front").classList.add("slide-front");
            setSwap(true);
        }
    }

    return ( 
        <div 
            id="home" 
            className='page'
            onMouseMove={(e)=>{handleMouseMove(e)}}
        >
            <div className="box">
                <div 
                    id="logo-box"
                    style={{
                        transform: 
                            `
                            rotateY(${mousePosition.X}deg)
                            rotateX(${mousePosition.Y}deg)
                            `
                    }}
                >
                    <div id="logo-box-front" onClick={()=>{FrontSwap()}}>
                        <span className="logo-box-click">Click For More</span>
                        { !swap ? 
                            <ul>
                                <li>Web Development</li>
                                <li>UI / UX</li>
                                <li>Back End</li>
                                <li>{mousePosition.X}</li>
                                <li>{mousePosition.Y}</li>
                            </ul> :
                            <ul>
                                <li>Crypto Enthusiast</li>
                                <li>CSS Magician</li>
                                <li>React #1</li>
                                <li>{mousePosition.X}</li>
                                <li>{mousePosition.Y}</li>
                            </ul>
                        }
                    </div>
                    <div id="logo-box-back" className="p-1">
                        Crypto to the moon 🚀🌕
                    </div>
                    <div id="logo-box-left"></div>
                    <div id="logo-box-right"></div>
                    <div id="logo-box-top">
                        {/* .box-shadow */}
                    </div>
                    <div id="logo-box-bottom"></div>
                    <div id="myself">
                        <div id="box-word">
                            Sean Block
                        </div>
                            <div id="box-wallet">
                                <img src={wallet} alt="wallet address" /><br/>
                                <div id="box-crypto">
                                    I accept tips in crypto &nbsp;
                                    <i class="fab fa-bitcoin"></i>&nbsp;
                                    <i class="fab fa-ethereum"></i>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Home;
