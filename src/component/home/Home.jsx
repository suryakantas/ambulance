import "./home.scss"
import { Carousel } from 'react-bootstrap';
import "animate.css"

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="wrapper">
                <div className="container">
                    <div className="textContainer">
                        <div className="left animate__animated animate__slideInRight">
                            <h3 className="">Lorem ipsum dolor sit amet consectetur adipisicing</h3>
                        </div>
                        <div className="right animate__animated animate__slideInRight">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, itaque ad! Voluptate perferendis quibusdam vitae.</p>
                        </div>
                    </div>
                </div>
                <div className="videoContainer">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="assets/slider4.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="assets/slider5.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="assets/slider6.jpg"
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
            </div>
        </div>
    )
}
