var xValues = ["10 AM ", "1 PM ", " 4 PM ", " 8 PM "];
var yValues = [0.5, 0.55, 0.31, 0.35];
var barColors = ["red", "green","blue","black"];

new Chart("nitrozen-shanghai", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Nitrozen oxide at Shanghai"
    }
  }
});