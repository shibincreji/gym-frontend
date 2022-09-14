import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #bcbcbc;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: white;
    }
  }
`;

export default function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <span>
                  <Link to="/warmup">Warmup-Day</Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <span>
                  <Link to="/day1">Day-1</Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <span>
                  <Link to="/day2">Day-2</Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <span>
                  <Link to="/day3">Day-3</Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <span>
                  <Link to="/day4">Day-4</Link>
                </span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <span>
                  <Link to="/restday">Rest-Day</Link>
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}
