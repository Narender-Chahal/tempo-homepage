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
    arrows: false,
    infinite: true,
    speed: 1500,
    centerMode: true,
    centerPadding: 0,
    autoplay: false,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-black  pt-5 pb-5 position-relative" id="nft">
        <img
          className="position-absolute d-none d-md-block end-0 nft_img1"
          src={Nft_img_position}
          alt="Nft_img_position"
        />
        <button
          className="button_prev border-0 position-absolute slider_btn_adjust d-none d-sm-block  left_5 "
          onClick={() => first.current.slickPrev()}
        >
          <img className="" src={back_vector} alt="back_vector" />
        </button>
        <button
          className="button_prev border-0 position-absolute  slider_btn_adjust d-none d-sm-block  right_5 "
          onClick={() => first.current.slickNext()}
        >
          <img src={next_vector} alt="next_vector" />
        </button>
        <div className="blur_circle2 position-absolute d-none light_animation d-md-block end-0"></div>
        <Container className=" overflow-hidden">
          <h2 className="mb-0  ff_highspeed fs_md text-white nft_text_shadow z_2 position-relative text-center pb-md-5 pb-4">
            our nft
          </h2>{" "}
          <Slider ref={first} {...settings} className="py-xl-5">
            <div className="py-lg-5 mt-5">
              <div className="box_linear mt-5   mx-2 text-center">
                <img
                  className="mt_5 mx-auto w_set1"
                  src={men_img}
                  alt="men_img"
                />
              </div>
            </div>
            <div className="py-lg-5 mt-5">
              <div className="box_linear mt-5   mx-2 text-center">
                <img
                  className="mt_5 mx-auto w_set2"
                  src={women_img}
                  alt="women_img"
                />
              </div>
            </div>
            <div className="py-lg-5 mt-5">
              <div className="box_linear mt-5  mx-2  text-center">
                <img
                  className="mt_5 mx-auto w_set3"
                  src={women_img2}
                  alt="women_img2"
                />
              </div>
            </div>
            <div className="py-lg-5 mt-5">
              <div className="box_linear  mt-5  mx-2 text-center">
                <img
                  className="mt_5 mx-auto w_set1"
                  src={men_img}
                  alt="men_img"
                />
              </div>
            </div>
            <div className="py-lg-5 mt-5">
              <div className="box_linear mt-5   mx-2 text-center">
                <img
                  className="mt_5 mx-auto w_set2"
                  src={women_img}
                  alt="women_img"
                />
              </div>
            </div>
            <div className="py-lg-5 mt-5">
              <div className="box_linear mx-2 mt-5 text-center">
                <img
                  className="mt_5 mx-auto w_set3"
                  src={women_img2}
                  alt="women_img2"
                />
              </div>
            </div>
          </Slider>
        </Container>
      </section>
    </>
  );
}

export default SliderSection;
