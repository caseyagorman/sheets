import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart4 extends Component {
  getColor(data) {
    const colorDict = {
      CC: "purple",
      OA: "blue",
      NBT: "green",
      NF: "red",
      MD: "orange",
      GA: "brown"
    };
    const color = colorDict[data];

    return color;
  }
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
          backgroundColor: this.getColor(dataResults[0]),
          borderColor: this.getColor(dataResults[0]),
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: this.getColor(dataResults[0]),
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: this.getColor(dataResults[0]),
          pointHoverBorderColor: this.getColor(dataResults[0]),
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
