import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import logo from "./static/logo.png";
const AppNav = props => (
  <Navbar
    style={{
      height: 26,
      fontSize: 24,
      fontFamily: "Work Sans",
      backgroundColor: "white",
      borderTop: " .5px solid rgb(107, 39, 114, 0.5)",
      borderBottom: " .5px solid rgb(107, 39, 114, 0.5)"
    }}
  >
    <Navbar.Brand href="/">
      <div style={{ height: 48 }}>
        <img
          style={{ height: "100%", marginTop: -15, marginRight: -35 }}
          src={logo}
          alt="logo"
        />
      </div>
    </Navbar.Brand>

    <Nav
      style={{
        textAlign: "center",
        height: 48,
        width: 100,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",
        borderLeft: " .5px solid rgb(107, 39, 114, 0.7)",
        color: "white"
      }}
    >
      <Nav.Link
        style={{
          marginLeft: 20,
          marginRight: 10,
          color: "rgb(107, 39, 114)"
        }}
        href="/FandP"
      >
        F&P
      </Nav.Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        width: 100,
        height: 48,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Nav.Link
        style={{ marginRight: 10, color: "rgb(107, 39, 114)" }}
        href="/STAR"
      >
        STAR
      </Nav.Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        width: 130,
        height: 48,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Nav.Link style={{ color: "rgb(107, 39, 114)" }} href="/Interim">
        Interim
      </Nav.Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        height: 48,
        marginLeft: 20,
        marginRight: 20,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)"
      }}
    >
      <Nav.Link
        style={{
          marginTop: 10,
          marginLeft: 20,
          marginRight: 20,

          color: "rgb(107, 39, 114)"
        }}
        href="/ERD"
      >
        ERD
      </Nav.Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        width: 250,
        height: 48,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Nav.Link style={{ color: "rgb(107, 39, 114)" }} href="/Standards">
        Standards by grade
      </Nav.Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        width: 250,
        height: 48,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Nav.Link
        style={{ color: "rgb(107, 39, 114)" }}
        href="/Standardsbyteacher"
      >
        Standards by teacher
      </Nav.Link>
    </Nav>
  </Navbar>
);
export default AppNav;
