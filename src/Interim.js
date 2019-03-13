import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart3 from "./LineChart3";
import { Row } from "react-bootstrap";

class Interim extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: this.props.link,
      callback: googleData => {
        this.setState({ data: googleData });
      },
      simpleSheet: true
    });
  }

  displayLineChart(data) {
    console.log("data", data);
    if (!data || data[0] === undefined) {
      return <div />;
    }
    const index = [...Array(data.length).keys()].slice(1, -5);
    const divStyle = {
      marginTop: -100,
      fontFamily: "Work Sans",
      display: "inline-block",
      height: 400,
      width: 500,
      margin: 1,
      textAlign: "center"
    };
    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        <h1>Interim</h1>
        <h4>{data[0]["Teacher"]}</h4>
        <div
          style={{
            fontFamily: "Work Sans",
            display: "inline-block",
            height: 500,
            width: 500,
            margin: 1,
            textAlign: "center",
            marginBottom: -150
          }}
        >
          <LineChart3
            teacher={data[0]["Teacher"]}
            BOY={data[0]["FoundationalSkills"]}
            fallInterim={data[0]["FallInterim"]}
            winterInterimGoal={data[0]["WinterInterimGoal"]}
            winterInterimActual={data[0]["WinterInterimActual"]}
            springInterimGoal={data[0]["SpringInterimGoal"]}
          />
        </div>
        <br />
        {index.map(index => (
          <div style={divStyle}>
            <h4>{data[index]["Teacher"]}</h4>
            <LineChart3
              teacher={data[index]["Teacher"]}
              BOY={data[index]["FoundationalSkills"]}
              fallInterim={data[index]["FallInterim"]}
              winterInterimGoal={data[index]["WinterInterimGoal"]}
              winterInterimActual={data[index]["WinterInterimActual"]}
              springInterimGoal={data[index]["SpringInterimGoal"]}
            />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return this.displayLineChart(this.state.data);
  }
}

export default Interim;
