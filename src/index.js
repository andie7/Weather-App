function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  console.log(day);

  let hours = date.getHours();
  console.log(hours);

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  console.log(minutes);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours} : ${minutes}`;
}

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  console.log(day);

  let hours = date.getHours();
  console.log(hours);

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  console.log(minutes);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}h`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 7) {
      forecastHTML =
        forecastHTML +
        `
    
              <div class="col">
                
                  <span class="weekday">${formatDay(forecastDay.dt)} </span>

                  <br />
                  <img
                    src="https://openweathermap.org/img/wn/${
                      forecastDay.weather[0].icon
                    }@2x.png"
                    alt=""
                    id="icon"
                    class="emoji"
                    width="74"
                  />

                  <br />
                  <span class="max">${Math.round(forecastDay.temp.max)}°</span>
                  <span class="min">|${Math.round(forecastDay.temp.min)}°</span>
                
              </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "96771e971243152d6b8948878c26adde";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function displayWeatherCondition(response) {
  celsiusTemperature = response.data.main.temp;
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(celsiusTemperature);

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  getForecast(response.data.coord);
}

function searchCity(city) {
  let apiKey = "96771e971243152d6b8948878c26adde";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "96771e971243152d6b8948878c26adde";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function ConvertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");

  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function ConvertToCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", ConvertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", ConvertToCelsius);
//1
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// 2
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", handleSubmit);

searchCity("New York");

//let currentLocationButton = document.querySelector("#current-location-button");
//currentLocationButton.addEventListener("click", getCurrentLocation);

//function searchLocation(position) {
//let apiKey = "96771e971243152d6b8948878c26adde";
//let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
//console.log(apiUrl);
//axios.get(apiUrl).then(displayWeatherCondition);
//}

//function getCurrentLocation(event) {
//// event.preventDefault();
//navigator.geolocation.getCurrentPosition(searchLocation);
//}

// Array of background images
const backgroundImages = [
  'url("https://i.pinimg.com/originals/9f/72/a4/9f72a4881c7f3791da3dadf12e218efb.gif")', //Rain
  'url("https://i.pinimg.com/originals/44/04/dc/4404dce13bf2de288cdf1295a9f14193.gif")', //Summer
  `url("https://i.pinimg.com/originals/95/d0/6e/95d06ee0ac5a1bbc810ae3994dc85b81.gif")`, //Fall
  `url("https://i.pinimg.com/originals/0d/ba/94/0dba94affef18fa90961488c4b4b4ef0.gif")`, //Winter
  `url("https://i.pinimg.com/originals/bb/33/98/bb33987c254c892ba6ab782efbd36c2f.gif")`, //Night
  `url("https://i.pinimg.com/originals/80/6e/5d/806e5dd8757cff9244f4722c6819cabe.gif")`, //Sunrise
  `url("https://i.pinimg.com/originals/d7/e7/81/d7e781b32269a8a82b500c1a9dc97733.gif")`, //clouds
  `url("https://i.pinimg.com/originals/c1/60/bb/c160bb331501d365626751acd3bc58e3.gif")`, //sunset
  `url("https://i.pinimg.com/originals/bf/2e/d4/bf2ed44164f5363cf5b29ddd7dd2c5dd.gif")`, //forest
  `url("https://i.pinimg.com/originals/c5/cf/c9/c5cfc94d993a898f0ba3a147f3d74d40.gif")`, //Christmas
  `url("https://i.pinimg.com/originals/42/86/96/4286968ba3c6e3f7777b801d26253d2d.gif")`, //earth
  'url("https://static.wixstatic.com/media/11f74e_8999eb8ba41f489aa787396cb507d05d~mv2_d_1900_1277_s_2.gif/v1/fill/w_1600,h_1075,al_c,q_90/file.jpg")', //summer
];

let currentIndex = 0;
// Function to change the background image
function changeBackground(event) {
  document.body.style.backgroundImage = backgroundImages[currentIndex];

  // Increment the index or reset to 0 when reaching the end
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Event listener for the "Change Theme" button
document
  .getElementById("changeButton")
  .addEventListener("click", changeBackground);
