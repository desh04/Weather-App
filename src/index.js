import { weatherBox } from "./Component/weatherBox.js";

import "./styles.css";

const ApiKey = "c004a64d6c473667b34da025593fbb32";

//let cityName = document.getElementById("InpCity").value;

document.querySelector("#submit-btn").addEventListener("click", (event) => {
  event.preventDefault();

  const cityName = document.getElementById("InpCity").value;
  getweather(cityName)
    .then((data) => {
      console.log(data);
      weatherBox(
        data.name,
        data.main.temp,
        data.sys.country,
        data.weather[0].description,
        data.weather[0].icon
      );
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message, error.cod, "hi");
      alert("Please enter a valid city name.");
    });
});

export function getweather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

  let temp = fetch(url).then((response) => response.json());

  return temp;
}
