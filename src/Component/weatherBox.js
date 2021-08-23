import "./weatherBox.css";

export function weatherBox(cityName, temp, country, discription) {
  let tempDate = new Date().toISOString();

  const mainDiv = document.createElement("div");
  const headtext = document.createElement("h2");
  const timePara = document.createElement("p");
  const discrip = document.createElement("p");
  const temperature = document.createElement("p");

  const time = tempDate.toString().slice(0, 10);

  mainDiv.setAttribute("id", "weather-box");

  headtext.innerHTML = `${cityName}, ${country}`;
  timePara.innerHTML = `<b>Date :</b> ${time}`;
  temperature.innerHTML = `<b>Temperature:</b> ${temp} °C`;
  discrip.innerHTML = `<b>Discription :</b> ${discription}`;

  mainDiv.appendChild(headtext);
  mainDiv.appendChild(timePara);
  mainDiv.appendChild(temperature);
  mainDiv.appendChild(discrip);

  document.getElementById("box-container").appendChild(mainDiv);
}
