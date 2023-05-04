import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImgQ1 from "../assets/img/png/roadmap_q1.png";
import ImgQ2 from "../assets/img/png/roadmap_q2.png";
import Roadline from "../assets/img/png/roadmap_line.png";
import StartImg from "../assets/img/png/start_img.png";
import InstaImg from "../assets/img/png/insta_img.png";
import BagageImg from "../assets/img/png/bagage_img.png";
import Polygon from "../assets/img/png/Polygon_img.png";
import ChainImg from "../assets/img/png/chain_img.png";
import ShareImg from "../assets/img/png/share_img.png";
import GlassImg from "../assets/img/png/glass_img.png";
const Roadmap = () => {
  return (
    <>
      <section className="py-5 overflow-hidden bg_roadmap">
        <Container className="pt-5">
          <div className="text-center">
            <h2 className="ff_highspeed fs_md text-white">ROADMAP</h2>
          </div>
          <Row className="py-5 position-relative z_index1">
            <img
              className="position-absolute line_1_Set d-none d-lg-flex"
              src={Roadline}
              alt="Roadline"
            />
            <Col lg={2}>
              <div className="text-center text-lg-start">
                <div className="question_1 d-flex justify-content-center align-items-center linier_border">
                  <span className="ff_highspeed fs_lg text-white img_rotate ms-3">
                    Q1
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <Row className="justify-content-between">
                <Col lg={3} className="position-relative">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-5 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={StartImg} alt="StartImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0">
                      <h3 className="text-white  pt-lg-3 ff_highspeed fs_30">
                        Month 1
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Funding from initial mint put into Autonomous trading
                        strategy to build funds for the next year.{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Create Hangout for Community Voting to commence{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        First Community Vote: Shortlisting an Artist
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} className="position-relative mt-5 mt-lg-0">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-3 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={InstaImg} alt="InstaImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0 mt-lg-0">
                      <h3 className="text-white mt-lg-5 pt-lg-3 ff_highspeed fs_30">
                        Month 2
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        First Community Vote: Shortlisting an Artist Ends
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Reach out to said Artists to short list them.
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Second Community Vote: Choose Artist
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} className="position-relative mt-5 mt-lg-0">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-3 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={BagageImg} alt="BagageImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0 mt-lg-0">
                      <h3 className="text-white mt-lg-5 pt-lg-3 ff_highspeed fs_30">
                        Month 3
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Second Community Vote Ends{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Connect with Chosen Artist{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        First "Meme" NFT project is launched to fund
                        marketplace.{" "}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="py-5 position-relative z_index1">
            <img
              className="position-absolute line_1_Set d-none d-lg-flex"
              src={Roadline}
              alt="Roadline"
            />
            <Col lg={2}>
              <div className="text-center text-lg-start">
                <div className="question_1 d-flex justify-content-center align-items-center linier_border">
                  <span className="ff_highspeed fs_lg text-white img_rotate ms-3">
                    Q2
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <Row className="justify-content-between">
                <Col lg={3} className="position-relative">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-5 text-center text-sm-start mt-lg-0 ">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0 full_Circel">
                      <img className="" src={StartImg} alt="StartImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0">
                      <h3 className="text-white  pt-lg-3 ff_highspeed fs_30">
                        Month 4
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Artist Provides Samples to be Voted on{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Market Place Dev Announcement{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Begin Construction of secondary Market
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Third Community Vote, Choosing the Art{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} className="position-relative mt-5 mt-lg-0">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-3 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={InstaImg} alt="InstaImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0 mt-lg-0">
                      <h3 className="text-white mt-lg-5 pt-lg-3 ff_highspeed fs_30">
                        Month 5
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Third Community Vote, Choosing the Art Ends{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Artist begins working on official DAO/PFP NFT{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Second Marketplace Testing Vote: Choose Artist
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} className="position-relative mt-5 mt-lg-0">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-3 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={BagageImg} alt="BagageImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0 mt-lg-0">
                      <h3 className="text-white mt-lg-5 pt-lg-3 ff_highspeed fs_30">
                        Month 6
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Launch of NFT Marketplace{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        6 Month Autonomous bot report to holders with proof of
                        return{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Expected Mint for DAO/PFP NFT
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="py-5 position-relative z_index1">
            <img
              className="position-absolute line_1_Set d-none d-lg-flex"
              src={Roadline}
              alt="Roadline"
            />
            <Col lg={2}>
              <div className="text-center text-lg-start">
                <div className="question_1 d-flex justify-content-center align-items-center linier_border">
                  <span className="ff_highspeed fs_lg text-white img_rotate ms-3">
                    Q3
                  </span>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <Row className="justify-content-between">
                <Col lg={3} className="position-relative">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-5 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={ChainImg} alt="ChainImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0">
                      <h3 className="text-white  pt-lg-3 ff_highspeed fs_30">
                        Month 7
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Community Vote on Gen 2 NFT that offers Tokenomics{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Artist Commences work{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} className="position-relative mt-5 mt-lg-0">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-3 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={ShareImg} alt="ShareImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0 mt-lg-0">
                      <h3 className="text-white mt-lg-5 pt-lg-3 ff_highspeed fs_30">
                        Month 8
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Community Vote on Defi Developments{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Announcement on Token release{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} className="position-relative mt-5 mt-lg-0">
                  <div className="d-flex flex-column flex-sm-row flex-lg-column  mt-3 text-center text-sm-start mt-lg-0">
                    <div className="star_circel d-flex justify-content-center align-items-center mx-auto mx-md-0 mt-sm-5 mt-lg-0">
                      <img className="" src={GlassImg} alt="GlassImg" />
                      <img
                        className="position-absolute polygen_set d-sm-none d-lg-flex"
                        src={Polygon}
                        alt="Polygon"
                      />
                    </div>
                    <div className="mt-5 ms-sm-4 ps-sm-5 ms-lg-0 ps-lg-0 mt-lg-0">
                      <h3 className="text-white mt-lg-5 pt-lg-3 ff_highspeed fs_30">
                        Month 9
                      </h3>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Comunity Vote on name of Token{" "}
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Preview of Gen 2 Art Released across media
                      </p>
                      <p className="white_circel position-relative text-white ff_magra fs_sm">
                        Dev Chosen to work alongside team focusing on Defi{" "}
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Roadmap;
