import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap"
import './index.css';
import { IoMdSend } from "react-icons/io";
const Contact = () => {
    return (
        <div id="contact" className="content-padding pt-2 bg-primary pt-5">
            <Row className="d-flex justify-content-center bg-primary pb-2">
                <Col lg={12} md sm>
                    <h1 className="text-white fw-600">Contact</h1>
                    <p className="   ss-100 fw-bold gray-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.
                    </p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={12} md sm>
                    <Form className=" ss-100" >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="p-3" type="text" placeholder="Name(required)" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="p-3" type="email" placeholder="Your email(required) " />
                        </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control className="p-3" type="subject" placeholder="subject" />
                        </Form.Group>
                        <Form.Group className="mb-3 position-relative" controlId="exampleForm.ControlTextarea1">
                            <Form.Control className="p-3" as="textarea" rows={7} placeholder="Message (required)" />
                            <Button className="send-btn"><IoMdSend className="fs-1" /></Button>

                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}
export default Contact;