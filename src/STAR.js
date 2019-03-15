import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart2 from "./LineChart2";

class STAR extends Component {
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
      display: "inline-block",
      height: 350,
      width: 500,
      margin: 1,

      textAlign: "center"
    };
    const index = [...Array(data.length).keys()];
    return (
      <div style={{ textAlign: "center", fontFamily: "Work Sans" }}>
        <br />
        <h1 style={{ fontSize: 60 }}>STAR</h1>
        <br />
        {index.map(index => (
          <div style={divStyle}>
            <h4>{data[index]["Teacher"]}</h4>
            <LineChart2
              teacher={data[index]["Teacher"]}
              BOY={data[index]["BOY"]}
              fallGoal={data[index]["fall_goal"]}
              fallActual={data[index]["fall_actual"]}
              winterGoal={data[index]["winter_goal"]}
              winterActual={data[index]["winter_actual"]}
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

export default STAR;
