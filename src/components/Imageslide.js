import React from 'react'
import { Carousel, Col, Container, Row} from 'react-bootstrap'

const Imageslide = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <Carousel fade>
                        <Carousel.Item  >
                            <img src="image/a.jpg" alt="a" className='d-block w-100'/>
                        </Carousel.Item> 
                        <Carousel.Item >
                            <img src="image/b.jpg" alt="a" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="image/c.jpg" alt="a" className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src="image/d.jpg" alt="a"className='d-block w-100'/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="image/e.jpg" alt="a" className='d-block w-100'/>
                        </Carousel.Item>
                    </Carousel>
                    </Col>

                </Row>
                </Container>
        </>

    )
}

export default Imageslide