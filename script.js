async function getWeather(){

const city = document.getElementById("cityInput").value;

const apiKey = "dcd460dc15fe08678b61dd293e44c39e";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

try{

const response = await fetch(url);
const data = await response.json();

if(data.cod === "404"){
alert("City not found");
return;
}

document.getElementById("weatherCard").style.display="block";

document.getElementById("cityName").innerText = data.name;

document.getElementById("temperature").innerText =
Math.round(data.main.temp) + "°C";

document.getElementById("description").innerText =
data.weather[0].description;

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

document.getElementById("wind").innerText =
"Wind Speed: " + data.wind.speed + " km/h";

const icon =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

document.getElementById("weatherIcon").src = icon;

}
catch(error){

alert("Error fetching weather data");

}

}