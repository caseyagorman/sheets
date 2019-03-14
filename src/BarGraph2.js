import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class BarGraph2 extends Component {
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
  displayChart(dataResults) {
    if (!dataResults) {
      return <div> </div>;
    }

    let options = {
      responsive: true,

      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        label: [
          {
            fontSize: 18,
            fontFamily: "Work Sans",
            fontColor: "black"
          }
        ],
        yAxes: [
          {
            ticks: {
              suggestedMax: 100,
              fontFamily: "Work Sans",
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
              fontFamily: "Work Sans",
              fontSize: 12,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: dataResults[1],

      datasets: [
        {
          label: "percent mastery",

          backgroundColor: this.getColor(dataResults[0]),

          borderWidth: 1,

          data: dataResults[2]
        }
      ]
    };

    return <Bar height={500} width={800} data={data} options={options} />;
  }
  render() {
    return this.displayChart(this.props.data);
  }
}

export default BarGraph2;
