import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Img1 from "../layout/assests/iglogo.png";
import Img2 from "../layout/assests/kakaologo.png";
import Img3 from "../layout/assests/snapchatlogo.JPG";
import Img4 from "../layout/assests/facebooklogo.jpg";
import Img5 from "../layout/assests/twitterlogo.JPG";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

function Footer() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/"> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <img src={Img1} alt="" width="50" height="50" />
                <p> </p>
                <span>
                  <Link to="/"> Follow us on Instagram: @gymtrainer </Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <img src={Img4} alt="" width="50" height="50" />
                <p> </p>
                <span>
                  <Link to="/"> Facebook: facebook.com/gymtrainer </Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <img src={Img3} alt="" width="50" height="50" />
                <p> </p>
                <span>
                  <Link to="/"> Snapchat: @gymtrainer </Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <img src={Img5} alt="" width="50" height="50" />
                <p> </p>
                <span>
                  <Link to=" /"> Twitter: @gymtrainer </Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <img src={Img2} alt="" width="50" height="50" />
                <p> </p>
                <span>
                  <Link to=" /"> KakaoTalk: @gymtrainer </Link>
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default Footer;
