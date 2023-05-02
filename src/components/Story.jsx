import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Gifvidio from "../assets/img/gif/gif-vidio.gif";
import RytICon from "../assets/img/png/ryt_circel_img.png";
import LeftICon from "../assets/img/png/left_circel_icon.png";
const Story = () => {
  return (
    <>
      <section id="down" className="py-5 position-relative">
        <div className="ryt_blur_light position-absolute ryt_light"> </div>
        <img
          className="position-absolute ryt_icon "
          src={RytICon}
          alt="RytICon"
        />
        <div className="ryt_blur_light position-absolute left_icon"></div>
        <img
          className="position-absolute left_icon"
          src={LeftICon}
          alt="LeftICon"
        />

        <Container>
          <Row>
            <Col lg={6}>
              <div className="gradiant_border d-inline-block overflow-hidden">
                <img className="w-100" src={Gifvidio} alt="Gifvidio" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-5 mt-lg-0">
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
