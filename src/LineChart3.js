import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart3 extends Component {
  displayChartData(
    teacher,
    BOY,
    fallInterim,
    winterInterimGoal,
    winterInterimActual,
    springInterimGoal
  ) {
    console.log(
      BOY,
      fallInterim,
      winterInterimGoal,
      winterInterimActual,
      springInterimGoal
    );
    if (!teacher) {
      return <div />;
    }

    const dataSet1 = [BOY, fallInterim, winterInterimActual];
    const dataSet2 = [BOY, winterInterimGoal, springInterimGoal];

    let options = {
      responsive: true,

      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        label: [
          {
            fontSize: 18,
            fontColor: "black"
          }
        ],
        yAxes: [
          {
            ticks: {
              suggestedMax: 100,
              fontSize: 14,
              fontColor: "black",
              beginAtZero: true,
              min: 0,
              userCallback: function(label) {
                if (Math.floor(label) === label) {
                  return label;
                }
              }
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 10,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: ["BOY", "Fall", "Winter"],
      datasets: [
        {
          label: "Actual",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "blue",
          borderColor: "blue",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "blue",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "blue",
          pointHoverBorderColor: "blue",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataSet1
        },
        {
          label: "Goal",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "white",
          borderColor: "rgb(13, 135, 29)",
          borderCapStyle: "butt",
          borderDash: [10, 5],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(13, 135, 29)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(13, 135, 29)",
          pointHoverBorderColor: "rgb(13, 135, 29)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: dataSet2
        }
      ]
    };
    return (
      <div>
        <Line options={options} data={data} />
      </div>
    );
  }

  render() {
    return this.displayChartData(
      this.props.teacher,
      this.props.BOY,
      this.props.fallInterim,
      this.props.winterInterimGoal,
      this.props.winterInterimActual,
      this.props.springInterimGoal
    );
  }
}

export default LineChart3;
