import React from "react";
import { Row, Col, Image } from "react-bootstrap"
import './index.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRatings from 'react-star-ratings';

const Review = () => (
    <div className="review">
        <div className="profile-div">
            <Image className="review-user-img" src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
        </div>
        <div className="review-div bg-white">
            <div className="header">Chris Morales</div>
            <div className="title text-primary">GoodAgency, CEO</div>
            <div className="comment text-secondary">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.</div>
            <div className="rating">
                <StarRatings
                    rating={5}
                    starRatedColor="cyan"
                    numberOfStars={5}
                    name='rating'
                    isSelectable={false}
                />
            </div>
        </div>
    </div>
)
const Testimonials = () => {
    return (
        <div id="testimonial" className="pt-2 bg-primary">
            <Row className="d-flex justify-content-center  content-padding pt-5 pb-5 m-0">
                <Col lg={12} md sm className="text-white">
                    <h1 className=" fw-600">Testimonials</h1>
                    <p className=" ss-100 gray-light">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrem aperiam, eaque ipsa quae ab illo inventore veritatis et.</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center p-0 pb-5">
                <Col lg={12}>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 4,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}
export default Testimonials;