bar();

async function bar() {
  let result = fetch("/studentmarks");
  result.then((resp) => {
    resp.json().then((data) => {
      let avgAtd = Math.ceil(data[0] + data[1]) / 2 + "%";
      document.getElementById("avgAtd").innerHTML = avgAtd;
      const barChart = new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
          labels: ["SEC A", "SEC B"],
          datasets: [
            {
              data: data,
              backgroundColor: colors.primary,
              hoverBackgroundColor: colors.primaryDark,
            },
          ],
        },
        options: {
          scales: {
            yAxes: [
              {
                gridLines: false,
                ticks: {
                  beginAtZero: true,
                  stepSize: 50,
                  fontSize: 12,
                  fontColor: "#97a4af",
                  fontFamily: "Open Sans, sans-serif",
                  padding: 10,
                },
              },
            ],
            xAxes: [
              {
                gridLines: false,
                ticks: {
                  fontSize: 12,
                  fontColor: "#97a4af",
                  fontFamily: "Open Sans, sans-serif",
                  padding: 5,
                },
                categoryPercentage: 0.5,
                maxBarThickness: "40",
              },
            ],
          },
          cornerRadius: 2,
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
        },
      });
    });
  });
}
