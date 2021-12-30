import blockwedding from '../../img/BlockWedding.png';
import megna from '../../img/megna.png';
import { Container, Row, Col } from 'react-bootstrap';

const Github = () => {

    let label = "Github"
    let desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic iste cupiditate eos magni minima obcaecati ipsum libero sed corporis possimus, beatae id rerum ipsa!"

    let websites = [
        {
            img: blockwedding, 
            alt: "Personal wedding image", 
            url: "https://www.blockwedding.com",
            title: "Wedding Website", 
            desc: "blockwedding.com"
        },
        {
            img: megna, 
            alt: "Small Business Website", 
            url: "https://www.megnatutoring.com",
            title: "Small Business Website", 
            desc: "megnatutoring.com"

        }
    ]

    return ( 
        <Row className="mb-5">
            <Col className="page-content" xs={12} lg={6}>
                <h1  className='title'>{label}</h1>
                <p>
                    {desc}
                </p>    
            </Col>
            <Col className='page-boxes' xs={12} lg={6}>
                <Container>
                    {websites.map((e, key) => { 
                        
                        let order1;
                        let order2;

                        if (key % 2 === 0) {
                            order1 = 1
                            order2 = 2
                        } else {
                            order1 = 2
                            order2 = 1
                        }
                        
                        return(
                        
                        <Row>
                            <Col 
                                className="page-box"
                                xs={{ span: 12, order: 1}}
                                md={{ span: 6, order: order2}}
                            >
                                <a 
                                    href={e.url} target="_blank" rel="noreferrer"
                                >
                                    <img 
                                        src={e.img} 
                                        alt={e.alt} 
                                    />
                                </a>
                            </Col>
                            <Col 
                                className="page-box"
                                xs={{ span: 12, order: 2}}
                                md={{ span: 6,  order: order1}}
                            >
                                <div className="page-box-title">
                                    {e.title}
                                </div>
                                <div className="page-box-info">
                                    {e.desc}
                                </div>
                            </Col>
                        </Row>
                        )
                    })}
                </Container>
            </Col>
        </Row>
     );
}
 
export default Github;