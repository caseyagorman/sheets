import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart4 extends Component {
  displayChartData(dataResults) {
    if (!dataResults) {
      return <div />;
    }

    const grades = [];
    const standards = [];
    for (let i = 0; i < dataResults[2].length; i++) {
      if (dataResults[2][i] !== "") {
        grades.push(dataResults[1][i]);
        standards.push(dataResults[2][i]);
      }
    }

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
      labels: grades,
      datasets: [
        {
          label: dataResults[0],
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
          data: standards
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
    return this.displayChartData(this.props.data);
  }
}

export default LineChart4;
