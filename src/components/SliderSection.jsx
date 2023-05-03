import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import men_img from "../assets/img/png/men_img.png";
import women_img from "../assets/img/png/women_img.png";
import women_img2 from "../assets/img/png/women_2.png";
import back_vector from "../assets/img/png/back_vector.png";
import next_vector from "../assets/img/png/next_vector.png";
import Slider from "react-slick";
import Nft_img_position from "../assets/img/png/nft_img1.png";
function SliderSection() {
  const first = useRef("");
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 800,
    centerMode: true,
    centerPadding: "0px",
    // autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
    <section className="bg-black  pt-5 pb-5 position-relative">
      <img
        className="position-absolute end-0 nft_img1"
        src={Nft_img_position}
        alt="Nft_img_position"
      />
      <button
        className="button_prev border-0 position-absolute  top_65 left_5 "
        onClick={() => first.current.slickPrev()}
      >
        <img className="" src={back_vector} alt="back_vector" />
      </button>
      <button
        className="button_prev border-0 position-absolute  top_65 right_5 "
        onClick={() => first.current.slickNext()}
      >
        <img src={next_vector} alt="next_vector" />
      </button>
      <div className="blur_circle2 position-absolute end-0"></div>
      <Container className=" overflow-hidden">
        <h2 className="mb-0  ff_highspeed fs_md text-white text-center pb-5">
          our nft
        </h2>
        <div className="pt-5 pb-5">
          {" "}
          <Slider ref={first} {...settings} className="pt-5">
            <Col lg={4} className="px-4 pt-5 mt-5 ">
              <div className="border_linear_slider position-relative">
                <img
                  className="w_100_lg slide_img position-absolute bottom-0 h-10 0  transform_translate"
                  src={men_img}
                  alt="men_img"
                />
              </div>
            </Col>
            <Col lg={4} className="px-4 pt-5 mt-5 ">
              <div className="border_linear_slider position-relative">
                <img
                  className="w_100_lg slide_img position-absolute bottom-0 h-10 0  transform_translate"
                  src={women_img}
                  alt="men_img"
                />
              </div>
            </Col>
            <Col lg={4} className="px-4 pt-5 mt-5 ">
              <div className="border_linear_slider position-relative">
                <img
                  className="w_100_lg slide_img position-absolute bottom-0 h-10 0  transform_translate"
                  src={women_img2}
                  alt="men_img"
                />
              </div>
            </Col>
            <Col lg={4} className="px-4 pt-5 mt-5 ">
              <div className="border_linear_slider position-relative">
                <img
                  className="w_100_lg slide_img position-absolute bottom-0 h-10 0  transform_translate"
                  src={men_img}
                  alt="men_img"
                />
              </div>
            </Col>
            <Col lg={4} className="px-4 pt-5 mt-5 ">
              <div className="border_linear_slider position-relative">
                <img
                  className="w_100_lg slide_img position-absolute bottom-0 h-10 0  transform_translate"
                  src={women_img}
                  alt="men_img"
                />
              </div>
            </Col>
            <Col lg={4} className="px-4 pt-5 mt-5 ">
              <div className="border_linear_slider position-relative">
                <img
                  className="w_100_lg slide_img position-absolute bottom-0 h-10 0  transform_translate"
                  src={women_img2}
                  alt="men_img"
                />
              </div>
            </Col>
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default SliderSection;
