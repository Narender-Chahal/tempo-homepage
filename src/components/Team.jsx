import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamImg1 from "../assets/img/png/team_img_1.png";
import TeamImg2 from "../assets/img/png/team_img_2.png";
import TeamImg3 from "../assets/img/png/team_img_3.png";
const Team = () => {
  return (
    <>
      <section className="py-5">
        <Container >
          <div className="text-center pt-5">
            <h2 className="ff_highspeed fs_md text-white">Team</h2>
          </div>
          <Row className="py-5">
            <Col sm={4}>
              <div className="position-relative">
                <img className="w-100" src={TeamImg1} alt="TEamImg1" />
                <div className="position-absolute img_text ">
                  <h2 className="ff_highspeed fs_26 text-white">johhn doe</h2>
                  <p className="ff_magra fs_xsm text-white">
                    (Co-founder & Designer)
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="position-relative">
                <img className="w-100" src={TeamImg2} alt="TEamImg1" />
                <div className="position-absolute img_text ">
                  <h2 className="ff_highspeed fs_26 text-white">johhn doe</h2>
                  <p className="ff_magra fs_xsm text-white">
                    (Co-founder & Designer)
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={4}>
              <div className="position-relative">
                <img className="w-100" src={TeamImg3} alt="TEamImg1" />
                <div className="position-absolute img_text ">
                  <h2 className="ff_highspeed fs_26 text-white">johhn doe</h2>
                  <p className="ff_magra fs_xsm text-white">
                    (Co-founder & Designer)
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
