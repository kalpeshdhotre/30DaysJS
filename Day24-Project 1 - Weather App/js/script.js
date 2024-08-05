const apiKey = "";
const city = "dombivli"; // Replace with the city you want to check

function checkWeather(city) {
  console.log(apiKey);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      console.log(`Weather in ${data.name}: ${data.weather[0].description}`);
      console.log(`Temperature: ${data.main.temp}°C`);
      console.log(`${data.weather[0].main}`);

      const cityName = document.getElementById("city");
      cityName.innerText = data.name;
      const weather = document.getElementById("weather");
      weather.innerText = data.main.temp;
      const icon = document.getElementById("icon");
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      changeBackgroundImage(data.weather[0].main);
    })

    .catch((error) => console.error("Error fetching weather data:", error));
}

function changeBackgroundImage(weatherCondition) {
  const body = document.body;
  let backgroundImageUrl;

  switch (weatherCondition.toLowerCase()) {
    case "clear":
      backgroundImageUrl = "./images/sunny.jpg";
      break;
    case "clouds":
      backgroundImageUrl = "./images/clouds.jpg";
      break;
    case "rain":
      backgroundImageUrl = "./images/rainy.jpg";
      break;
    case "snow":
      backgroundImageUrl = "./images/snow.jpg";
      break;
    case "mist":
      backgroundImageUrl = "./images/mist.jpg";
      break;
    default:
      backgroundImageUrl = "./images/main2.jpg";
  }

  body.style.backgroundImage = `url('${backgroundImageUrl}')`;
}

// Function to get forecast data and display
function displayForecast(data) {
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = ""; // Clear previous forecast

  // Extract forecast data for each day
  const dailyForecasts = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

  dailyForecasts.forEach((forecast) => {
    const date = new Date(forecast.dt_txt).toLocaleDateString();
    const temp = forecast.main.temp;
    const description = forecast.weather[0].description;
    const icon = forecast.weather[0].icon;

    const forecastItem = document.createElement("div");
    forecastItem.className = "forecast-item";
    forecastItem.innerHTML = `
          <h3>${date}</h3>
          <p>Temp: ${temp}°C</p>
          <p>${description}</p>
          <img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}" />
      `;
    forecastContainer.appendChild(forecastItem);
  });
}

// checkWeather(city);
const btn = document.getElementById("searchCity");

btn.addEventListener("click", () => {
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = ""; // Clear previous forecast

  cityName = document.getElementById("cityToFetch").value;
  console.log(cityName);
  checkWeather(cityName);
});

const btnForecast = document.getElementById("checkForecast");
btnForecast.addEventListener("click", () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayForecast(data);
      document.getElementById("cityToFetch").value = "";
      document.getElementById("cityToFetch").focus();
    })
    .catch((error) => console.error("Error fetching the weather data:", error));
});
