import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart2 from "./LineChart2";
import { Row } from "react-bootstrap";

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
      height: 500,
      width: 500,
      margin: 1,
      textAlign: "center"
    };
    return (
      <div style={{ textAlign: "center", fontFamily: "lato" }}>
        <h1>STAR</h1>
        <div>
          <Row>
            <div style={divStyle}>
              <h4>{data[0]["Teacher"]}</h4>
              <LineChart2
                teacher={data[0]["Teacher"]}
                BOY={data[0]["BOY"]}
                fallGoal={data[0]["fall_goal"]}
                fallActual={data[0]["fall_actual"]}
                winterGoal={data[0]["winter_goal"]}
                winterActual={data[0]["winter_actual"]}
              />
            </div>
            <div style={divStyle}>
              {" "}
              <h4>{data[1]["Teacher"]}</h4>
              <LineChart2
                teacher={data[1]["Teacher"]}
                BOY={data[1]["BOY"]}
                fallGoal={data[1]["fall_goal"]}
                fallActual={data[1]["fall_actual"]}
                winterGoal={data[1]["winter_goal"]}
                winterActual={data[1]["winter_actual"]}
              />
            </div>
            <div style={divStyle}>
              <h4>{data[2]["Teacher"]}</h4>
              <LineChart2
                teacher={data[2]["Teacher"]}
                BOY={data[2]["BOY"]}
                fallGoal={data[2]["fall_goal"]}
                fallActual={data[2]["fall_actual"]}
                winterGoal={data[2]["winter_goal"]}
                winterActual={data[2]["winter_actual"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div style={divStyle}>
              <h4>{data[3]["Teacher"]}</h4>
              <LineChart2
                teacher={data[3]["Teacher"]}
                BOY={data[3]["BOY"]}
                fallGoal={data[3]["fall_goal"]}
                fallActual={data[3]["fall_actual"]}
                winterGoal={data[3]["winter_goal"]}
                winterActual={data[3]["winter_actual"]}
              />
            </div>
            <div style={divStyle}>
              {" "}
              <h4>{data[4]["Teacher"]}</h4>
              <LineChart2
                teacher={data[4]["Teacher"]}
                BOY={data[4]["BOY"]}
                fallGoal={data[4]["fall_goal"]}
                fallActual={data[4]["fall_actual"]}
                winterGoal={data[4]["winter_goal"]}
                winterActual={data[4]["winter_actual"]}
              />
            </div>
            <div style={divStyle}>
              <h4>{data[5]["Teacher"]}</h4>
              <LineChart2
                teacher={data[5]["Teacher"]}
                BOY={data[5]["BOY"]}
                fallGoal={data[5]["fall_goal"]}
                fallActual={data[5]["fall_actual"]}
                winterGoal={data[5]["winter_goal"]}
                winterActual={data[5]["winter_actual"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div style={divStyle}>
              <h4>{data[6]["Teacher"]}</h4>
              <LineChart2
                teacher={data[6]["Teacher"]}
                BOY={data[6]["BOY"]}
                fallGoal={data[6]["fall_goal"]}
                fallActual={data[6]["fall_actual"]}
                winterGoal={data[6]["winter_goal"]}
                winterActual={data[6]["winter_actual"]}
              />
            </div>
            <div style={divStyle}>
              {" "}
              <h4>{data[7]["Teacher"]}</h4>
              <LineChart2
                teacher={data[7]["Teacher"]}
                BOY={data[7]["BOY"]}
                fallGoal={data[7]["fall_goal"]}
                fallActual={data[7]["fall_actual"]}
                winterGoal={data[7]["winter_goal"]}
                winterActual={data[7]["winter_actual"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div style={divStyle}>
              <h4>{data[8]["Teacher"]}</h4>
              <LineChart2
                teacher={data[8]["Teacher"]}
                BOY={data[8]["BOY"]}
                fallGoal={data[8]["fall_goal"]}
                fallActual={data[8]["fall_actual"]}
                winterGoal={data[8]["winter_goal"]}
                winterActual={data[8]["winter_actual"]}
              />
            </div>
          </Row>
        </div>
      </div>
    );
  }
  render() {
    return this.displayLineChart(this.state.data);
  }
}

export default STAR;
