import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart from "./LineChart";

class ERD extends Component {
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
    const index = [...Array(data.length).keys()];
    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        <br />
        <h1 style={{ fontSize: 60 }}>ERD</h1>
        <br />
        {index.map(index => (
          <div key={index} style={divStyle}>
            <h4>{data[index]["Teacher"]}</h4>
            <LineChart
              teacher={data[index]["Teacher"]}
              septemberBaseline={data[index]["september_baseline"]}
              decemberGoal={data[index]["december_goal"]}
              decemberActual={data[index]["december_actual"]}
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

export default ERD;
