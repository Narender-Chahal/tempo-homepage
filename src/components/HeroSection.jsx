import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DropIcon from "../assets/img/svg/drop-down.svg";
const HeroSection = () => {
  return (
    <>
      <section className="d-flex flex-column align-items-center justify-content-center flex-grow-1 py-5 mt-5 py-xxl-0"id="hero">
        <Container>
          <h1 className="ff_highspeed fs_lg text-white text-center text-sm-start">
            Ornare orn{" "}
            <span className="d-block my-2">
              nulla <span className="text_gridient ">sed turp</span>{" "}
            </span>
            \is blanditx
          </h1>
          <p className="ff_magra fs-sm text-white text-center text-sm-start">
            Facilisi nec at ullamcorper consequat venenatis cursus
            <span className="d-block">
              sagittis. Aliquet venenatis urna ege.
            </span>
          </p>
          <div className="d-sm-flex align-items-center text-center mt-5">
            <button className="ff_highspeed fs_xsm btn_start bg-transparent Navbtn text-white  border-0 pb-2">
              Get Started
            </button>
            <button className="ff_highspeed fs_xsm btn_start bg-transparent  text-white  border-0 btn_more pb-2">
              Learn More
            </button>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <a href="#down">
              <img src={DropIcon} alt="DropIcon" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
