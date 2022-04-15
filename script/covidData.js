const dataContainer = document.getElementById("dataCont");
const totalCases = document.getElementById("totalCases");
const newCases = document.getElementById("newCases");
const totalRecovered = document.getElementById("totalRecovered");
const newRecovered = document.getElementById("newRecovered");
const totalDeaths = document.getElementById("totalDeaths");
const newDeaths = document.getElementById("newDeaths");
const updated = document.getElementById("updated");
// data for chart
let charX = [];
let charY = [];
let barColors = ["orange", "yellow", "Green", "greenyellow", "red", "brown"];
const fetchData = async () => {
  let response = await fetch(
    "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
  );
  let data = await response.json();
  // console.log(data);
  //   dataContainer.innerText = data.activeCases;
  updated.innerText = new Date(data.lastUpdatedAtApify);
  totalCases.innerText = data.activeCases;
  newCases.innerText = data.activeCasesNew;
  totalRecovered.innerText = data.recovered;
  newRecovered.innerText = data.recoveredNew;
  totalDeaths.innerText = data.deaths;
  newDeaths.innerText = data.deathsNew;
  charX = [
    "activeCases",
    "New Active Cases",
    "Total Recovered",
    "New Recovered",
    "Deaths",
    "New Deaths",
  ];
  charY = [
    data.activeCases,
    data.activeCasesNew,
    data.recovered,
    data.recoveredNew,
    data.deaths,
    data.deathsNew,
  ];
  new Chart("myChart", {
    type: "doughnut",
    data: {
      labels: charX,
      datasets: [
        {
          backgroundColor: barColors,
          data: charY,
        },
      ],
    },
    options: {
      legends: {
        display: true,
      },
      title: {
        display: true,
        text: "World Wide Wine Production",
      },
    },
  });
  new Chart("myChart1", {
    type: "pie",
    data: {
      labels: charX,
      datasets: [
        {
          backgroundColor: barColors,
          data: charY,
        },
      ],
    },
  });
};

const data = fetchData();
