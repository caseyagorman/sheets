import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart4 from "./LineChart4";

class StandardsAveragesLine extends Component {
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
    if (!data || data[0] === undefined) {
      return <div />;
    }
    const divStyle = {
      fontFamily: "Work Sans",
      display: "inline-block",
      height: 400,
      width: 500,
      margin: 1,
      textAlign: "center"
    };

    const CCGrades = [];
    const CCScores = [];
    const OAScores = [];
    const OAGrades = [];
    const NBTGrades = [];
    const NBTScores = [];
    const NFGrades = [];
    const NFScores = [];
    const MDGrades = [];
    const MDScores = [];
    const GAGrades = [];
    const GAScores = [];
    for (let i = 0; i < data.length; i++) {
      let entry = data[i];
      CCGrades.push(entry["Grade"]);
      OAGrades.push(entry["Grade"]);
      NBTGrades.push(entry["Grade"]);
      NFGrades.push(entry["Grade"]);
      MDGrades.push(entry["Grade"]);
      GAGrades.push(entry["Grade"]);

      for (let prop in entry) {
        if (prop === "CC") {
          CCScores.push(entry[prop]);
        } else if (prop === "OA") {
          OAScores.push(entry[prop]);
        } else if (prop === "NBT") {
          NBTScores.push(entry[prop]);
        } else if (prop === "NF") {
          NFScores.push(entry[prop]);
        } else if (prop === "GA") {
          GAScores.push(entry[prop]);
        } else if (prop === "MD") {
          MDScores.push(entry[prop]);
        }
      }
    }
    data = [
      ["CC", CCGrades, CCScores],
      ["OA", OAGrades, OAScores],
      ["NBT", NBTGrades, NBTScores],
      ["MD", MDGrades, MDScores],
      ["NF", NFGrades, NFScores],
      ["GA", GAGrades, GAScores]
    ];

    const index = [...Array(data.length).keys()];
    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        <br />
        <h1 style={{ fontSize: 50 }}>Standards Over Time</h1>
        <br />
        {index.map(index => (
          <div key={index} style={divStyle}>
            <LineChart4 data={data[index]} />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return this.displayLineChart(this.state.data);
  }
}

export default StandardsAveragesLine;
