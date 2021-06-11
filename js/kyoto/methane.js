var xValues = ["10 AM ", "1 PM ", " 4 PM ", " 8 PM "];
var yValues = [0.53, 0.62, 0.5, 0.38];
var barColors = ["red", "green","blue","black"];

new Chart("methane-kyoto", {
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
      text: "MEthane at Kyoto"
    }
  }
});