import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImgQ1 from "../assets/img/png/roadmap_q1.png"
import Roadline from "../assets/img/png/roadmap_line.png"
import StartImg from "../assets/img/png/start_img.png"
const Roadmap = () => {
  return (
      <>
          <section className='py-5 overflow-hidden'>
              <Container className='pt-5'>
                  <div className='text-center'>
                      <h2 className='ff_highspeed fs_md text-white'>ROADMAP</h2>
                  </div>
                  <Row className='py-5 position-relative'>
                      <Col xs={2} className=''>
                          <img className='position-absolute line_1_Set ' src={Roadline} alt="Roadline" />
                          <img src={ImgQ1} alt="ImgQ1" />
                      </Col>
                      <Col xs={10} > 
                          <Row>
                              <Col xs={4} className='position-relative'>
                                  <div className='star_circel position-absolute star_img_set d-flex justify-content-center align-items-center'><img className='' src={StartImg} alt="StartImg" /></div>
                                  <div className='pt-5 '></div>
                                  <h3 className='text-white mt-5 pt-5'>Month 1</h3>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
              </Container>
          </section>
      </>
  )
}

export default Roadmap