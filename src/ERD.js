import React, { Component } from "react";
import Tabletop from "tabletop";
import LineChart from "./LineChart";
import { Row } from "react-bootstrap";

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
      display: "inline-block",
      height: 500,
      width: 500,
      margin: 1,
      textAlign: "center"
    };
    return (
      <div style={{ textAlign: "center", fontFamily: "lato" }}>
        <h1>ERD</h1>
        <div>
          <Row>
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
          </Row>
        </div>
        <div style={{ marginTop: -50 }}>
          <Row>
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
          </Row>
        </div>

        <div style={{ marginTop: -50 }}>
          <Row>
            <div style={divStyle}>
              <h4>{data[6]["Teacher"]}</h4>
              <LineChart
                teacher={data[6]["Teacher"]}
                septemberBaseline={data[6]["september_baseline"]}
                decemberGoal={data[6]["december_goal"]}
                decemberActual={data[6]["december_actual"]}
              />
            </div>
            <div style={divStyle}>
              <h4>{data[7]["Teacher"]}</h4>
              <LineChart
                teacher={data[7]["Teacher"]}
                septemberBaseline={data[7]["september_baseline"]}
                decemberGoal={data[7]["december_goal"]}
                decemberActual={data[7]["december_actual"]}
              />
            </div>
            <div style={divStyle}>
              <h4>{data[8]["Teacher"]}</h4>
              <LineChart
                teacher={data[8]["Teacher"]}
                septemberBaseline={data[8]["september_baseline"]}
                decemberGoal={data[8]["december_goal"]}
                decemberActual={data[8]["december_actual"]}
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

export default ERD;
