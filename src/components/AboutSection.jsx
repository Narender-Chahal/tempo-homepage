import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import about_img from "../assets/img/png/about_img.png";
import about_img2 from "../assets/img/png/about_img2.png";
import about_img3 from "../assets/img/png/about_img3.png";
import mint_bg_img from "../assets/img/png/mint_btn_bg.png";
function AboutSection() {
  return (
    <section className="bg-black py-5">
      <Container>
        <Row className="align-items-center flex-column-reverse d-flex flex-lg-row  justify-content-between">
          <Col lg={6} className="mt-5 mt-lg-0 text-center text-lg-start">
            <h2 className="mb-0 ff_highspeed fs_md text-white about_text_shadow z_index1 text_shadow position-relative">
              About
            </h2>
            <p className="mb-0 text-white ff_magra fs_sm">
              Facilisi nec at ullamcorper consequat venenatis cursus sagittis.
              Aliquet venenatis, urna egestas elementum ultricies convallis
              amet. Cursus sed porta imperdiet tellus lorem nam leo.
              Sollicitudin risus suspendisse urna sed arcu sit. Ullamcorper diam
              nulla nulla enim. Mi mauris, tortor pharetra in pretium rhoncus.
              Egestas sollicitudin quis ullamcorper bibendum at amet vel.
              Pellentesque congue est parturient egestas. Viverra leo non
              tincidunt sed sed quam in. Augue justo lacus, magna at ornare sed.
            </p>

            <button className="position-relative mt-5  bg-transparent mint_hover border-0 ">
              <img className="mint_bg " src={mint_bg_img} alt="mint_bg_img" />
              <span className="mint_bg_btn  position-absolute top-0 start-0 ff_highspeed fs_xsm text-white">
                mint now
              </span>
            </button>
          </Col>
          <Col lg={5} sm={8} xs={8}>
            <div>
              <img className="w-100" src={about_img} alt="about_img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
