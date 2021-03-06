import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class BarGraph extends Component {
  getColor(xData) {
    const colorDict = {
      CC: "purple",
      OA: "blue",
      NBT: "green",
      NF: "red",
      MD: "orange",
      GA: "brown"
    };
    const colorList = [];
    for (let i = 0; i < xData.length; i++) {
      colorList.push(colorDict[xData[i]]);
    }

    return colorList;
  }

  displayChart(dataResults) {
    if (!dataResults) {
      return <div> </div>;
    }
    const yData = [];
    const xData = [];
    for (let d in dataResults) {
      if (d !== "Grade") {
        yData.push(dataResults[d]);
        xData.push(d);
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
              fontSize: 18,
              fontColor: "black"
            }
          }
        ]
      }
    };
    const data = {
      labels: xData,

      datasets: [
        {
          label: "Standards",

          backgroundColor: this.getColor(xData),
          borderColor: this.getColor(xData),
          borderWidth: 1,
          hoverBackgroundColor: this.getColor(xData),
          hoverBorderColor: this.getColor(xData),
          data: yData
        }
      ]
    };

    return <Bar height={200} width={400} data={data} options={options} />;
  }
  render() {
    return this.displayChart(this.props.data);
  }
}

export default BarGraph;
