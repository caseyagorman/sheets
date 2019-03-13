import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart2 extends Component {
  displayChartData(
    teacher,
    BOY,
    fallGoal,
    fallActual,
    winterGoal,
    winterActual
  ) {
    if (!teacher) {
      return <div />;
    }
    console.log(BOY);

    const dataSet1 = [BOY, fallGoal, winterGoal];
    const dataSet2 = [BOY, fallActual, winterActual];

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
          data: dataSet2
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
          data: dataSet1
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
      this.props.fallGoal,
      this.props.fallActual,
      this.props.winterGoal,
      this.props.winterActual
    );
  }
}

export default LineChart2;
