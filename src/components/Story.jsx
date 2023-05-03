import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Gifvidio from "../assets/img/gif/gif-vidio.gif";
import RytICon from "../assets/img/png/ryt_circel_img.png";
import LeftICon from "../assets/img/png/left_circel_icon.png";
import Slider from "react-slick";

const Story = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="down" className="py-5 position-relative">
        <div className="ryt_blur_light position-absolute ryt_light light_animation">
          {" "}
        </div>
        <img
          className="position-absolute ryt_icon "
          src={RytICon}
          alt="RytICon"
        />
        <div className="ryt_blur_light position-absolute left_icon light_animation"></div>
        <img
          className="position-absolute left_icon"
          src={LeftICon}
          alt="LeftICon"
        />

        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div
                className="gradiant_border d-inline-block overflow-hidden d-flex justify-content-center justify-content-lg-start"
                data-aos="fade-up"
              >
                <img className="w-100 " src={Gifvidio} alt="Gifvidio" />
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="mt-5 mt-lg-0 text-center text-lg-start"
                data-aos="fade-up"
              >
                <h2 className="ff_highspeed fs_md text-white">Story</h2>
                <p className="ff_magra fs_sm text-white">
                  Facilisi nec at ullamcorper consequat venenatis cursus
                  sagittis. Aliquet venenatis, urna egestas elementum ultricies
                  convallis amet. Cursus sed porta imperdiet tellus lorem nam
                  leo. Sollicitudin risus suspendisse urna sed arcu sit.
                  Ullamcorper diam nulla nulla enim. Mi mauris, tortor pharetra
                  in pretium rhoncus. Egestas sollicitudin quis ullamcorper
                  bibendum at amet vel. Pellentesque congue est parturient
                  egestas. Viverra leo non tincidunt sed sed quam in. Augue
                  justo lacus, magna at ornare sed.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Story;
