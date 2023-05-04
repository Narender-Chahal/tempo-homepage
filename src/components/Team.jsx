import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TeamImg1 from "../assets/img/png/team_img_1.png";
import TeamImg2 from "../assets/img/png/team_img_2.png";
import TeamImg3 from "../assets/img/png/team_img_3.png";
import RytICon from "../assets/img/png/ryt_circel_img.png";
import LeftICon from "../assets/img/png/left_circel_icon.png";
const Team = () => {
  return (
    <>
      <section className="py-5 position-relative">
        <div className="ryt_blur_light position-absolute team_side_light">
          {" "}
        </div>
        <img
          className="position-absolute ryt_icon_team "
          src={RytICon}
          alt="RytICon"
        />
        <div className="ryt_blur_light position-absolute left_icon_team"></div>
        <img
          className="position-absolute left_icon_cercil_team"
          src={LeftICon}
          alt="LeftICon"
        />
        <Container>
          <div className="text-center pt-5">
            <h2 className="ff_highspeed fs_md text-white">Team</h2>
          </div>
          <Row className="py-5 justify-content-center">
            <Col sm={6} xs={8} lg={4}>
              <div
                className="position-relative mt-4 gradiant_border"
                data-aos="fade-up"
              >
                <img className="w-100" src={TeamImg1} alt="TEamImg1" />
                <div className="position-absolute img_text ">
                  <h2 className="ff_highspeed fs_26 text-white">johhn doe</h2>
                  <p className="ff_magra fs_xsm text-white">
                    (Co-founder & Designer)
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xs={8} lg={4}>
              <div
                className="position-relative mt-4 gradiant_border"
                data-aos="fade-down"
              >
                <img className="w-100 " src={TeamImg2} alt="TEamImg1" />
                <div className="position-absolute img_text ">
                  <h2 className="ff_highspeed fs_26 text-white">johhn doe</h2>
                  <p className="ff_magra fs_xsm text-white">
                    (Co-founder & Designer)
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6} xs={8} lg={4}>
              <div
                className="position-relative mt-4 gradiant_border "
                data-aos="fade-up"
              >
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
