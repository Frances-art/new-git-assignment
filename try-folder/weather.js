let date = new Date().toUTCString();
document.getElementById("edit").innerHTML = date;

let searchForm = document.querySelector("#formId");
searchForm.addEventListener("submit", searchNow);

function searchNow(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchCity");

  let h2 = document.querySelector("#change");
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value}`;
  }
  // let city = `${searchInput.value}`;
  // let key = "12f88b09890a1cf55158a399be880e9f";
  // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  //     // axios.get(url).then(displayWeather);
  //   }
  // }

  // function displayWeather(response) {
  //   let weather = document.querySelector("#temperature");
  //   let temperature = Math.round(response.data.main.temp);
  //   weather.innerHTML = `It is ${temperature} degrees, in ${response.data.name}`;
  // }
  // let button = document.querySelector("button");
  // button.addEventListener("click", getCurrentPosition);

  // function getCurrentPosition() {
  //   navigator.geolocation.getCurrentPosition(showPosition);
  // }
  // function showPosition(position) {
  //   let h1 = document.querySelector("h1");
  //   h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
  // }

  let Farenheit = document.querySelector("#fahrenheit-link");
  Farenheit.addEventListener("click", convertToFarenheit);

  function convertToFarenheit(event) {
    event.preventDefault();
    let conversion = document.querySelector("#temperature");
    conversion.innerHTML = 20;
  }

  let Celsius = document.querySelector("#celsius-link");
  Celsius.addEventListener("click", convertToCelsius);

  function convertToCelsius(event) {
    event.preventDefault();
    let secondConversion = document.querySelector("#temperature");
    secondConversion.innerHTML = 15;
  }
}
