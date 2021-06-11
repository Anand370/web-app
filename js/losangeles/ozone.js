var xValues = ["10 AM ", "1 PM ", " 4 PM ", " 8 PM "];
var yValues = [0.5, 0.6, 0.3, 0.4];
var barColors = ["red", "green","blue","black"];

new Chart("ozone-los-angeles", {
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
      text: "Ozone at Los Angeles"
    }
  }
});