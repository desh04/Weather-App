import "./weatherBox.css";

export function weatherBox(cityName, temp, country, discription, icon) {
  // Capitalizing the first alphabate of string.
  discription = discription.charAt(0).toUpperCase() + discription.slice(1);

  let tempDate = new Date().toISOString();

  const mainDiv = document.createElement("div");
  const headtext = document.createElement("h2");
  const timePara = document.createElement("p");
  const discrip = document.createElement("p");
  const temperature = document.createElement("p");
  let img = document.createElement("img");

  const time = tempDate.toString().slice(0, 10);

  mainDiv.setAttribute("id", "weather-box");

  img.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);

  headtext.innerHTML = `${cityName}, ${country}`;
  timePara.innerHTML = `<b>Date :</b> ${time}`;
  temperature.innerHTML = `<b>Temperature:</b> ${temp} °C`;
  discrip.innerHTML = `<b>Discription :</b> ${discription}`;

  mainDiv.appendChild(headtext);
  mainDiv.appendChild(img);
  mainDiv.appendChild(discrip);
  mainDiv.appendChild(timePara);
  mainDiv.appendChild(temperature);

  document.getElementById("box-container").appendChild(mainDiv);
  console.log(icon);
}
