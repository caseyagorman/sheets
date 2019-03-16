import React, { Component } from "react";
import image from "./static/lisa.gif";
class Home extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ textAlign: "center", fontFamily: "Work Sans" }}
      >
        <h1 style={{ fontSize: 60 }}>Monarch Data</h1>
        <br />
        <br />
        <p style={{ fontSize: 24 }}>
          Click the links above to view charts various assessments and standards
        </p>
        <br />
        <img src={image} alt="Logo" />;
      </div>
    );
  }
}

export default Home;
