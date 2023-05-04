import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navlogo from "../assets/img/svg/navlogo.svg";
// import NavBtn from "../assets/img/png/nav_btn_bg.png";
function Mynav() {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <section>
        <nav className="nav_bg_clr py-3 py-lg-0">
          <Container>
            <div className="d-flex align-items-center justify-content-between ">
              <img src={Navlogo} alt="Navlogo" />
              <ul
                className={
                  first
                    ? "d-flex align-items-center gap-4 gap-xl-5 mb-0 navOpen"
                    : "d-flex align-items-center gap-4 mb-0 navClose"
                }
              >
                <button
                  onClick={() => setfirst(true)}
                  className="btn-close position-absolute d-lg-none top-0 end-0 m-5"
                ></button>
                <li onClick={() => setfirst(true)}>
                  <a href="#" className="ff_magra fs_sm text-white mb-0">
                    Home{" "}
                  </a>
                </li>
                <li onClick={() => setfirst(true)}>
                  <a href="#" className="ff_magra fs_sm text-white mb-0">
                    About Us{" "}
                  </a>
                </li>
                <li onClick={() => setfirst(true)}>
                  <a href="#" className="ff_magra fs_sm text-white mb-0">
                    NFTs{" "}
                  </a>
                </li>
                <li onClick={() => setfirst(true)}>
                  <a href="#" className="ff_magra fs_sm text-white mb-0">
                    Roadmap{" "}
                  </a>
                </li>
                <li onClick={() => setfirst(true)}>
                  <a href="#" className="ff_magra fs_sm text-white mb-0">
                    Team{" "}
                  </a>
                </li>
                <li onClick={() => setfirst(true)}>
                  <a href="#" className="ff_magra fs_sm text-white mb-0">
                    FAQ{" "}
                  </a>
                </li>
                <li className="pt-3">
                  <button className="Navbtn navbtn_set border-0 ff_magra fs_sm text-white  bg-transparent   d-flex justify-content-center align-items-center  pb-3 ">
                    Connect
                  </button>
                </li>
              </ul>
              <div
                onClick={() => setfirst(false)}
                className="text-white d-lg-none"
              >
                <span className="menu_icon"></span>
                <span className="menu_icon my-2"></span>
                <span className="menu_icon"></span>
              </div>
            </div>
          </Container>
        </nav>
      </section>
    </>
  );
}

export default Mynav;
