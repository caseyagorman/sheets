import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class BarGraph extends Component {
  getColor() {}
  displayChart(dataResults) {
    if (!dataResults) {
      return <div> </div>;
    }
    const yData = [];
    const xData = [];
    for (let d in dataResults) {
      if (d !== "Grade") {
        xData.push(dataResults[d]);
        yData.push(d);
      }
    }
    console.log("x", xData, "y", yData);

    let options = {
      //   tooltips: {
      //     callbacks: {
      //       label: function(tooltipItem) {
      //         const indice = tooltipItem.index;
      //         return students[indice];
      //       }
      //     }
      //   },

      responsive: true,

      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        lable: [
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
      labels: yData,

      datasets: [
        {
          label: "Standards",

          backgroundColor: "#44857D",
          borderColor: "#44857D",
          borderWidth: 1,
          hoverBackgroundColor: "#44857D",
          hoverBorderColor: "#44857D",
          data: xData
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
