import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart from "./LineChart";

class FandP extends Component {
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
    console.log(data);
    if (!data || data[0] === undefined) {
      return <div />;
    }
    const divStyle = {
      display: "inline-block",
      height: 400,
      width: 400,
      margin: 1,
      textAlign: "center"
    };
    return (
      <div style={{ textAlign: "center", fontFamily: "lato" }}>
        <h1>F&P</h1>
        <div style={divStyle}>
          <h4>{data[0]["Teacher"]}</h4>
          <LineChart
            teacher={data[0]["Teacher"]}
            septemberBaseline={data[0]["september_baseline"]}
            decemberGoal={data[0]["december_goal"]}
            decemberActual={data[0]["december_actual"]}
          />
        </div>
        <div style={divStyle}>
          {" "}
          <h4>{data[1]["Teacher"]}</h4>
          <LineChart
            teacher={data[1]["Teacher"]}
            septemberBaseline={data[1]["september_baseline"]}
            decemberGoal={data[1]["december_goal"]}
            decemberActual={data[1]["december_actual"]}
          />
        </div>
        <div style={divStyle}>
          <h4>{data[2]["Teacher"]}</h4>
          <LineChart
            teacher={data[2]["Teacher"]}
            septemberBaseline={data[2]["september_baseline"]}
            decemberGoal={data[2]["december_goal"]}
            decemberActual={data[2]["december_actual"]}
          />
        </div>
        <br />
        <div style={divStyle}>
          <h4>{data[3]["Teacher"]}</h4>
          <LineChart
            teacher={data[3]["Teacher"]}
            septemberBaseline={data[3]["september_baseline"]}
            decemberGoal={data[3]["december_goal"]}
            decemberActual={data[3]["december_actual"]}
          />
        </div>
        <div style={divStyle}>
          {" "}
          <h4>{data[4]["Teacher"]}</h4>
          <LineChart
            teacher={data[4]["Teacher"]}
            septemberBaseline={data[4]["september_baseline"]}
            decemberGoal={data[4]["december_goal"]}
            decemberActual={data[4]["december_actual"]}
          />
        </div>
        <div style={divStyle}>
          <h4>{data[5]["Teacher"]}</h4>
          <LineChart
            teacher={data[5]["Teacher"]}
            septemberBaseline={data[5]["september_baseline"]}
            decemberGoal={data[5]["december_goal"]}
            decemberActual={data[5]["december_actual"]}
          />
        </div>
      </div>
    );
  }
  render() {
    return this.displayLineChart(this.state.data);
  }
}

export default FandP;
