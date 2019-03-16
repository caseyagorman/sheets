import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./static/logo.png";
import { Link } from "react-router-dom";
const AppNav = props => (
  <Navbar
    style={{
      height: 56,
      fontSize: 24,
      fontFamily: "Work Sans",
      backgroundColor: "white",
      borderTop: " .5px solid rgb(107, 39, 114, 0.5)",
      borderBottom: " .5px solid rgb(107, 39, 114, 0.5)"
    }}
  >
    <Navbar.Brand href="/">
      <div style={{ height: 55 }}>
        <img
          style={{ height: 55, marginTop: -15, marginRight: -15 }}
          src={logo}
          alt="logo"
        />
      </div>
    </Navbar.Brand>

    <Nav
      style={{
        textAlign: "center",
        height: 55,
        width: 100,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",
        borderLeft: " .5px solid rgb(107, 39, 114, 0.7)",
        color: "rgb(107, 39, 114)"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/FandP">
        F&P
      </Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        width: 100,
        height: 55,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/STAR">
        STAR
      </Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        width: 130,
        height: 55,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/interim">
        Interim
      </Link>
    </Nav>
    <Nav
      style={{
        textAlign: "center",
        height: 55,
        marginLeft: 20,
        marginRight: 20,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/ERD">
        ERD
      </Link>
    </Nav>
    <Nav
      style={{
        marginLeft: -20,
        fontSize: 20,
        textAlign: "center",
        width: 160,
        height: 55,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/standards">
        Standards by grade
      </Link>
    </Nav>
    <Nav
      style={{
        fontSize: 20,
        textAlign: "center",
        width: 160,
        height: 55,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",

        color: "white"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/standardsbyteacher">
        Standards by Teacher
      </Link>
    </Nav>
    <Nav
      style={{
        fontSize: 20,
        textAlign: "center",
        width: 170,
        height: 55,
        borderRight: " .5px solid rgb(107, 39, 114, 0.7)",
        color: "white"
      }}
    >
      <Link style={{ color: "rgb(107, 39, 114)" }} to="/standards-averages">
        Standards Over Time
      </Link>
    </Nav>
  </Navbar>
);
export default AppNav;
