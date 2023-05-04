import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import roadmap_line from "../assets/img/png/roadmap_line.png";
function Roadmap() {
  return (
    <section className="roadmap_bg ">
      <Container>
        <h2 className="ff_highspeed fs_md text-white text-center roadm ap_text_shadow z_index1 position-relative">
          roadmap
        </h2>{" "}
        <Row>
          <Col lg={2}>
            <div className="roadmap_q1_bg d-flex align-items-center justify-content-center position-relative">
              <h2 className="mb-0 fs_xlsm ff_highspeed text-white">Q1</h2>{" "}
              <div className=" "></div>
            </div>
            <Col lg={10}>
              {" "}
              <img
                className="position-absol ute roadm ap_adjust "
                src={roadmap_line}
                alt="roadmap_line"
              />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Roadmap;
