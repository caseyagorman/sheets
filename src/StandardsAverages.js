import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart from "./LineChart";

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

  displayLineChart(data) {
    console.log(data);
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
    // const index = [...Array(data.length).keys()];
    const chartData = [];
    for (let i = 0; i < data.length; i++) {
      let entry = data[i];
      for (let prop in entry) {
        if (entry[prop] === "") {
          delete entry[prop];
        }
      }
      chartData.push(data[i]);

      //   chartData.push(Object.entries(data[i]));
    }
    console.log(chartData);

    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        {/* <h1>Standards</h1>
        <br />
        {index.map(index => (
          <div style={divStyle}>
            <h4>{data[index]["Teacher"]}</h4>
            <LineChart
              teacher={data[index]["Teacher"]}
              septemberBaseline={data[index]["september_baseline"]}
              decemberGoal={data[index]["december_goal"]}
              decemberActual={data[index]["december_actual"]}
            />
          </div>
        ))} */}
      </div>
    );
  }
  render() {
    return this.displayLineChart(this.state.data);
  }
}

export default StandardsAverages;
