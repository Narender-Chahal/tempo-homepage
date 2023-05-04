import React from "react";
import { Container } from "react-bootstrap";
import coming_img from "../assets/img/png/coming_img.png";
import play_img from "../assets/img/png/play_img.png";
import watch_position_img from "../assets/img/png/watch_position_img.png";
function WatchSection() {
  return (
    <section className="bg-black py-lg-5 position-relative ">
      <img
        className=" position-absolute watch_img_position_adjust"
        src={watch_position_img}
        alt="watch_position_img"
      />
      <div className="blur_circle  position-absolute "></div>
      <Container className="py-lg-5 py-4">
        <h2 className="mb-0  ff_highspeed fs_md watch_text_shadow z_2 position-relative text-white text-center">
          watch video
        </h2>
        <div className="position-relative mt-lg-5 mt-4" data-aos="flip-left">
          <img className="w-100 z_1" src={coming_img} alt="coming_img" />
          <a
            className=" position-absolute top-50 start-50 translate-middle z_index1"
            href="#"
          >
            <div className="play_box2 d-flex justify-content-center  align-items-center z_index1">
              <div className="box_play d-flex justify-content-center  align-items-center z_index1">
                <div className="play_box1 d-flex justify-content-center  align-items-center z_index1">
                  <img className="z_index1" src={play_img} alt="play_img" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
}

export default WatchSection;
