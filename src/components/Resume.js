import { Container, Row, Col } from 'react-bootstrap';

const Resume = () => {
    return ( 
        <div id="resume" className='page'>
            <div className="page-container">
                {/* Content */}
                <Container className='scrolling'>
                    <Row>
                        <Col className='page-boxes' xs={12}>
                            <Container>
                                <Row>
                                    <h1  className='title'>Resume</h1>
                                </Row>
                                <Row className="row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="javscript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="jquery" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="nodejs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="SASS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="PHP" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="mysql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%', filter: 'invert(100%)'}} alt="microsoft sql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%', filter: 'invert(100%)'}} alt="microsoft sql" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="c++" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                                    </Col>
                                    <Col className="page-box">
                                        <img style={{width: '100%'}} alt="java" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
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
 
export default Resume;
