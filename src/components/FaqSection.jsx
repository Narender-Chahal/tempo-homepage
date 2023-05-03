import React from "react";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Nft_img_position from "../assets/img/png/nft_img1.png";

function FaqSection() {
  return (
    <section className="position-relative pt-5">
      <img
        className="position-absolute end-0 nft_img1"
        src={Nft_img_position}
        alt="Nft_img_position"
      />{" "}
      <div className="blur_circle2 position-absolute end-0"></div>
      <Container>
        {" "}
        <h2 className="mb-0  ff_highspeed fs_md text-white text-center pt-5">
          FAqs{" "}
        </h2>{" "}
        <Accordion defaultActiveKey="0" className="pt-5">
          <Accordion.Item
            eventKey="0"
            className="my-4 max_900 accordiyan_bg mx-auto"
          >
            <Accordion.Header>
              <h6 className="mb-0 fs_30  ff_highspeed">
                Q1. What is a Cheeky Snails?{" "}
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3  fs_sm ff_magra   text-white ps-3">
                Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
                semper quam quam. Neque sapien, lectus nisi ut et.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className="my-4 max_900 accordiyan_bg mx-auto"
          >
            <Accordion.Header>
              <h6 className="mb-0 fs_30  ff_highspeed">
                Q2. When is the launch date?
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3  fs_sm ff_magra   text-white ps-3">
                Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
                semper quam quam. Neque sapien, lectus nisi ut et.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className="my-4 max_900 accordiyan_bg mx-auto"
          >
            <Accordion.Header>
              <h6 className="mb-0 fs_30  ff_highspeed">
                Q3. What is the price ?
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3  fs_sm ff_magra   text-white ps-3">
                Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
                semper quam quam. Neque sapien, lectus nisi ut et.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="3"
            className="my-4 max_900 accordiyan_bg mx-auto"
            data-aos="fade-right"
          >
            <Accordion.Header>
              <h6 className="mb-0 fs_30  ff_highspeed">
                Q4. How many snails can I mint?
              </h6>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3  fs_sm ff_magra   text-white ps-3">
                Facilisis aliquet volutpat, ut sit sapien. Amet, aliquet donec
                semper quam quam. Neque sapien, lectus nisi ut et.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default FaqSection;
