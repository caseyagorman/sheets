import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  displayChartData(teacher, september, decemberGoal, decemberActual) {
    if (!teacher || !september) {
      return <div />;
    }

    const dataSet1 = [september, decemberGoal];
    const dataSet2 = [september, decemberActual];

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
      labels: ["September", "December"],
      datasets: [
        {
          label: "December Goal",
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
          data: dataSet1
        },
        {
          label: "December Actual",
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
      this.props.septemberBaseline,
      this.props.decemberGoal,
      this.props.decemberActual
    );
  }
}

export default LineChart;
