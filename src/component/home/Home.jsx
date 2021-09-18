import "./home.scss"
import { Carousel } from 'react-bootstrap';

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="wrapper">
                <div className="container">
                    <div className="textContainer">
                        <div className="left">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est numquam aliquid quam corrupti, animi minus cupiditate eius odit quibusdam nihi.</p>
                        </div>
                        <div className="right">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, itaque ad! Voluptate perferendis quibusdam vitae.</p>
                        </div>
                    </div>
                    <div className="videoContainer">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="assets/ambulance.jpg"
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
                            src="assets/img.jpg"
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
                            src="assets/mobile.jpg"
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
        </div>
    )
}
