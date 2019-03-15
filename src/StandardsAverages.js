import React, { Component } from "react";
import Tabletop from "tabletop";
import BarGraph from "./BarGraph";

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

  displayBarChart(data) {
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

    const chartData = [];
    for (let i = 0; i < data.length; i++) {
      let entry = data[i];
      for (let prop in entry) {
        if (entry[prop] === "") {
          delete entry[prop];
        }
      }
      chartData.push(data[i]);
    }

    const index = [...Array(data.length).keys()];
    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        <br />
        <h1 style={{ fontSize: 50 }}>Standards by Grade</h1>
        <br />
        {index.map(index => (
          <div key={index} style={divStyle}>
            <h4>{data[index]["Grade"]}</h4>
            <BarGraph data={data[index]} />
          </div>
        ))}
      </div>
    );
  }
  render() {
    return this.displayBarChart(this.state.data);
  }
}

export default StandardsAverages;
