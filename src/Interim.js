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
    return (
      <div style={{ textAlign: "center", fontFamily: "lato" }}>
        <h1>Interim</h1>
        <div>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[0]["Teacher"]}</h4>
              <LineChart3
                teacher={data[0]["Teacher"]}
                BOY={data[0]["FoundationalSkills"]}
                fallInterim={data[0]["FallInterim"]}
                winterInterimGoal={data[0]["WinterInterimGoal"]}
                winterInterimActual={data[0]["WinterInterimActual"]}
                springInterimGoal={data[0]["SpringInterimGoal"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              {" "}
              <h4>{data[1]["Teacher"]}</h4>
              <LineChart3
                teacher={data[1]["Teacher"]}
                BOY={data[1]["FoundationalSkills"]}
                fallInterim={data[1]["FallInterim"]}
                winterInterimGoal={data[1]["WinterInterimGoal"]}
                winterInterimActual={data[1]["WinterInterimActual"]}
                springInterimGoal={data[1]["SpringInterimGoal"]}
              />
            </div>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[2]["Teacher"]}</h4>
              <LineChart3
                teacher={data[2]["Teacher"]}
                BOY={data[2]["FoundationalSkills"]}
                fallInterim={data[2]["FallInterim"]}
                winterInterimGoal={data[2]["WinterInterimGoal"]}
                winterInterimActual={data[2]["WinterInterimActual"]}
                springInterimGoal={data[2]["SpringInterimGoal"]}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[3]["Teacher"]}</h4>
              <LineChart3
                teacher={data[3]["Teacher"]}
                BOY={data[3]["FoundationalSkills"]}
                fallInterim={data[3]["FallInterim"]}
                winterInterimGoal={data[3]["WinterInterimGoal"]}
                winterInterimActual={data[3]["WinterInterimActual"]}
                springInterimGoal={data[3]["SpringInterimGoal"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              {" "}
              <h4>{data[4]["Teacher"]}</h4>
              <LineChart3
                teacher={data[4]["Teacher"]}
                BOY={data[4]["FoundationalSkills"]}
                fallInterim={data[4]["FallInterim"]}
                winterInterimGoal={data[4]["WinterInterimGoal"]}
                winterInterimActual={data[4]["WinterInterimActual"]}
                springInterimGoal={data[4]["SpringInterimGoal"]}
              />
            </div>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[5]["Teacher"]}</h4>
              <LineChart3
                teacher={data[5]["Teacher"]}
                BOY={data[5]["FoundationalSkills"]}
                fallInterim={data[5]["FallInterim"]}
                winterInterimGoal={data[5]["WinterInterimGoal"]}
                winterInterimActual={data[5]["WinterInterimActual"]}
                springInterimGoal={data[5]["SpringInterimGoal"]}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[6]["Teacher"]}</h4>
              <LineChart3
                teacher={data[6]["Teacher"]}
                BOY={data[6]["FoundationalSkills"]}
                fallInterim={data[6]["FallInterim"]}
                winterInterimGoal={data[6]["WinterInterimGoal"]}
                winterInterimActual={data[6]["WinterInterimActual"]}
                springInterimGoal={data[6]["SpringInterimGoal"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              {" "}
              <h4>{data[7]["Teacher"]}</h4>
              <LineChart3
                teacher={data[7]["Teacher"]}
                BOY={data[7]["FoundationalSkills"]}
                fallInterim={data[7]["FallInterim"]}
                winterInterimGoal={data[7]["WinterInterimGoal"]}
                winterInterimActual={data[7]["WinterInterimActual"]}
                springInterimGoal={data[7]["SpringInterimGoal"]}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[8]["Teacher"]}</h4>
              <LineChart3
                teacher={data[8]["Teacher"]}
                BOY={data[8]["FoundationalSkills"]}
                fallInterim={data[8]["FallInterim"]}
                winterInterimGoal={data[8]["WinterInterimGoal"]}
                winterInterimActual={data[8]["WinterInterimActual"]}
                springInterimGoal={data[8]["SpringInterimGoal"]}
              />
            </div>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[9]["Teacher"]}</h4>
              <LineChart3
                teacher={data[9]["Teacher"]}
                BOY={data[9]["FoundationalSkills"]}
                fallInterim={data[9]["FallInterim"]}
                winterInterimGoal={data[9]["WinterInterimGoal"]}
                winterInterimActual={data[9]["WinterInterimActual"]}
                springInterimGoal={data[9]["SpringInterimGoal"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[10]["Teacher"]}</h4>
              <LineChart3
                teacher={data[10]["Teacher"]}
                BOY={data[10]["FoundationalSkills"]}
                fallInterim={data[10]["FallInterim"]}
                winterInterimGoal={data[10]["WinterInterimGoal"]}
                winterInterimActual={data[10]["WinterInterimActual"]}
                springInterimGoal={data[10]["SpringInterimGoal"]}
              />
            </div>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[11]["Teacher"]}</h4>
              <LineChart3
                teacher={data[11]["Teacher"]}
                BOY={data[11]["FoundationalSkills"]}
                fallInterim={data[11]["FallInterim"]}
                winterInterimGoal={data[11]["WinterInterimGoal"]}
                winterInterimActual={data[11]["WinterInterimActual"]}
                springInterimGoal={data[11]["SpringInterimGoal"]}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[12]["Teacher"]}</h4>
              <LineChart3
                teacher={data[12]["Teacher"]}
                BOY={data[12]["FoundationalSkills"]}
                fallInterim={data[12]["FallInterim"]}
                winterInterimGoal={data[12]["WinterInterimGoal"]}
                winterInterimActual={data[12]["WinterInterimActual"]}
                springInterimGoal={data[12]["SpringInterimGoal"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[13]["Teacher"]}</h4>
              <LineChart3
                teacher={data[13]["Teacher"]}
                BOY={data[13]["FoundationalSkills"]}
                fallInterim={data[13]["FallInterim"]}
                winterInterimGoal={data[13]["WinterInterimGoal"]}
                winterInterimActual={data[13]["WinterInterimActual"]}
                springInterimGoal={data[13]["SpringInterimGoal"]}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[14]["Teacher"]}</h4>
              <LineChart3
                teacher={data[14]["Teacher"]}
                BOY={data[14]["FoundationalSkills"]}
                fallInterim={data[14]["FallInterim"]}
                winterInterimGoal={data[14]["WinterInterimGoal"]}
                winterInterimActual={data[14]["WinterInterimActual"]}
                springInterimGoal={data[14]["SpringInterimGoal"]}
              />
            </div>
          </Row>
        </div>
        <div style={{ marginTop: -100 }}>
          <Row>
            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[15]["Teacher"]}</h4>
              <LineChart3
                teacher={data[15]["Teacher"]}
                BOY={data[15]["FoundationalSkills"]}
                fallInterim={data[15]["FallInterim"]}
                winterInterimGoal={data[15]["WinterInterimGoal"]}
                winterInterimActual={data[15]["WinterInterimActual"]}
                springInterimGoal={data[15]["SpringInterimGoal"]}
              />
            </div>

            <div
              style={{
                display: "inline-block",
                height: 500,
                width: 500,
                margin: 1,
                textAlign: "center"
              }}
            >
              <h4>{data[16]["Teacher"]}</h4>
              <LineChart3
                teacher={data[16]["Teacher"]}
                BOY={data[16]["FoundationalSkills"]}
                fallInterim={data[16]["FallInterim"]}
                winterInterimGoal={data[16]["WinterInterimGoal"]}
                winterInterimActual={data[16]["WinterInterimActual"]}
                springInterimGoal={data[16]["SpringInterimGoal"]}
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

export default Interim;
