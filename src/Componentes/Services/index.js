import React from "react";
import { Row, Col, Image } from "react-bootstrap"
import Image1 from './image/1.png';
import './index.css';


const Service = () => {
    return (
        <div id="service" className="content-padding pt-2 bg-white">
            <Row className="d-flex justify-content-center p-0 pt-5 pl-5 pt-5 pb-1 m-0">
                <Col lg={6} md sm className="text-left">
                    <h1 className=" fw-600">Services</h1>
                </Col>
                <Col></Col>
            </Row>
            <Row className="d-flex justify-content-center pl-5 pt-1 pb-5 m-0">
                <Col lg={6} md sm className="text-left">
                    <p className="text-secondary text-left w-80">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                    </p>
                    <div className="divider"></div>
                </Col>
                <Col lg={6} className="text-right d-flex align-items-center  service-content">
                    <div>
                        <Image className="service-img" src={Image1} />
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={6} md sm className="text-left d-flex align-items-center service-content-start service-content">
                    <div>
                        <Image className="service-img" src={Image1} />
                    </div>
                </Col>
                <Col lg={6} className="text-right d-flex align-items-end justify-content-center flex-column">

                    <p className="text-secondary text-right w-80">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                    </p>
                    <div className="divider"></div>

                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={6} md sm className="text-left">

                    <p className="text-secondary text-left w-80">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                    </p>
                    <div className="divider"></div>

                </Col>
                <Col lg={6} className="text-right d-flex align-items-center  service-content">
                    <div>
                        <Image className="service-img" src={Image1} />
                    </div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center pb-5">
                <Col lg={6} md sm className="text-left d-flex align-items-center service-content-start service-content">
                    <div>
                        <Image className="service-img" src={Image1} />
                    </div>
                </Col>
                <Col lg={6} className="text-right d-flex align-items-end justify-content-center flex-column ">

                    <p className="text-secondary text-right w-80">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                    </p>
                    <div className="divider"></div>

                </Col>
            </Row>
        </div>
    )
}
export default Service;