import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
const AppNav = props => (
  <Navbar style={{ fontSize: 36, backgroundColor: "blue" }}>
    <Navbar.Brand href="/" />
    <Nav style={{ color: "white" }}>
      <Nav.Link style={{ marginRight: 10, color: "white" }} href="/ERD">
        ERD
      </Nav.Link>

      <Nav.Link style={{ marginRight: 10, color: "white" }} href="/FandP">
        F&P
      </Nav.Link>
      <Nav.Link style={{ marginRight: 10, color: "white" }} href="/STAR">
        STAR
      </Nav.Link>
      <Nav.Link style={{ color: "white" }} href="/Interim">
        Interim
      </Nav.Link>
    </Nav>
  </Navbar>
);
export default AppNav;
