import React, { Component } from "react";
import Tabletop from "tabletop";
import BarGraph2 from "./BarGraph2";

class StandardsAverages extends Component {
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
  getTeachers(data) {
    const CCTeachers = [];
    const CCScores = [];
    const OAScores = [];
    const OATeachers = [];
    const NBTTeachers = [];
    const NBTScores = [];
    const NFTeachers = [];
    const NFScores = [];
    const MDTeachers = [];
    const MDScores = [];
    const GATeachers = [];
    const GAScores = [];
    for (let i = 0; i < data.length; i++) {
      let entry = data[i];
      CCTeachers.push(entry["Teacher"]);
      OATeachers.push(entry["Teacher"]);
      NBTTeachers.push(entry["Teacher"]);
      NFTeachers.push(entry["Teacher"]);
      MDTeachers.push(entry["Teacher"]);
      GATeachers.push(entry["Teacher"]);

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
    return [
      ["CC", CCTeachers, CCScores],
      ["OA", OATeachers, OAScores],
      ["NBT", NBTTeachers, NBTScores],
      ["MD", MDTeachers, MDScores],
      ["NF", NFTeachers, NFScores],
      ["GA", GATeachers, GAScores]
    ];
  }
  displayLineChart(data) {
    if (!data || data[0] === undefined) {
      return <div />;
    }
    const teachers = this.getTeachers(data);
    console.log(teachers);
    const divStyle = {
      fontFamily: "Work Sans",
      display: "inline-block",
      height: 500,
      width: 800,
      margin: 50,
      textAlign: "center"
    };

    const index = [...Array(teachers.length).keys()];
    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        <h1>Standards</h1>
        <br />
        {index.map(index => (
          <div key={index} style={divStyle}>
            <b>
              <h2>{teachers[index][0]}</h2>
            </b>
            <BarGraph2 data={teachers[index]} />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return this.displayLineChart(this.state.data);
  }
}

export default StandardsAverages;
