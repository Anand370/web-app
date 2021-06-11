var xValues = ["10 AM ", "1 PM ", " 4 PM ", " 8 PM "];
var yValues = [0.52, 0.55, 0.35, 0.41];
var barColors = ["red", "green","blue","black"];

new Chart("nitrozen-kyoto", {
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
      text: "Nitrozen oxide at Kyoto"
    }
  }
});