import army from '../img/army.png';
import rpi from '../img/rpi.png';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return ( 
        <div id="about" className='page'>
            <div className="page-container">
                {/* Content */}
                <Container className='scrolling'>
                    <Row>
                        <Col className="page-content" xs={12} lg={6}>
                            <h1  className='title'>About</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium odit unde fugit facere id delectus. Aliquid voluptate incidunt quam modi repudiandae, nesciunt voluptatibus recusandae voluptas ex maxime eius placeat cupiditate sequi nulla eligendi facere, consequuntur voluptates ab. Omnis quibusdam cupiditate cumque eaque consequuntur recusandae voluptatibus aliquam amet deserunt rerum?
                            </p>    
                        </Col>
                        <Col className='page-boxes' xs={12} lg={6}>
                            <Container>
                                <Row className="row-cols-1 row-cols-md-2">
                                    <Col className="page-box">
                                        <img src={army} alt="army logo"/>
                                    </Col>
                                    <Col className="page-box">
                                        <div className="page-box-title">
                                            U.S. Army
                                        </div>
                                        <div className="page-box-info">
                                            UH-60 Black Hawk Helicopter Mechanic
                                        </div>
                                    </Col>
                                    <Col className="page-box">
                                        <div className="page-box-title">
                                            Rensselaer Polytechnic Institute
                                        </div>
                                        <div className="page-box-info">
                                            B.S. Information Technology & Web Science <span className="text-danger">(in-progress)</span>
                                        </div>
                                        
                                    </Col>
                                    <Col className="page-box">
                                        <img src={rpi} alt="RPI logo"/>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
 
export default About;
