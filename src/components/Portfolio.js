import { Container } from "react-bootstrap";
import Github from "./Portfolio/Github";
import Websites from "./Portfolio/Websites";

const Portfolio = () => {

    return ( 
        <div id="portfolio" className='page'>
            <div className="page-container">
                {/* Content */}
                <Container className='scrolling'>
                    <Websites />
                    {/* <Github /> */}
                </Container>
            </div>
        </div>
    );
}
 
export default Portfolio;
