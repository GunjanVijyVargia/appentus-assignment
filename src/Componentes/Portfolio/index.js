import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { MdZoomOutMap } from "react-icons/md";
import { BsFillHeartFill } from "react-icons/bs";
import Image1 from './images/1.jpeg';
import Image2 from './images/2.jpeg';
import Image3 from './images/3.jpeg';
import Image4 from './images/4.jpeg';
import './index.css';

const ImageDescription = () => (
    <div className="grid-description">
        <div className="grid-header">
            <Button className="grid-btn text-white"><MdZoomOutMap  /></Button>
            <Button className="grid-btn text-white"><BsFillHeartFill  /></Button>
        </div>
        <div className="grid-footer">
            <h2 className=" fw-600">Items</h2>
            <p >Lorem Ipsum is simply dummy text of the.
            </p>
        </div>
    </div>
)
//const notify = () => alert("Wow so easy!");

const Portfolio = () => {
    return (
        <>
        <Row id="portfolio" className="d-flex justify-content-center bg-light content-padding pt-5 m-0">
                <Col lg={12} md sm>
                    <h1 className=" fw-600">Portfolio</h1>
                    <p className="text-dark ss-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                    <Button className="mt-2 me-2 brand-btn">BRANDING</Button>
                    <Button className="mt-2 me-2 web-btn">WEBDESIGN</Button>
                    <Button className="mt-2 me-2 dtp-btn">DTP</Button>
                    <Button className="mt-2 me-2 ilustraion-btn">ILUSTRATION</Button>

                </Col>
            </Row>
            <Row className="photo-grid-row content-padding pt-5 pb-5 bg-light">
                <Col className="photo-grid-column bg-light">
                    <div className="photo-container">
                        <img alt="grid" src={Image1} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image2} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image3} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image4} />
                        <ImageDescription />
                    </div>
                </Col>
                <Col className="photo-grid-column">
                    <div className="photo-container">
                        <img alt="grid" src={Image4} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image1} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image2} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image3} />
                        <ImageDescription />
                    </div>
                </Col>
                <Col className="photo-grid-column">
                    <div className="photo-container">
                        <img alt="grid" src={Image2} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image3} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image4} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image1} />
                        <ImageDescription />
                    </div>
                </Col>
                <Col className="photo-grid-column">
                    <div className="photo-container">
                        <img alt="grid" src={Image1} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image2} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image3} />
                        <ImageDescription />
                    </div>
                    <div className="photo-container">
                        <img alt="grid" src={Image4} />
                        <ImageDescription />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Portfolio;