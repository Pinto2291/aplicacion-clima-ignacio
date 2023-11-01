import { getCities } from './function.js';

// Input and variables
const city_input = document.getElementById('search-city');
const city_name = document.getElementById('city-name');
const country_name = document.getElementById('country-name');
const weather = document.getElementById('weather');
const city_temperature = document.getElementById('temperature');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const humidity = document.getElementById('humidity');
const icon_weather = document.getElementById('weather-image');

// Buttons
const button_search = document.getElementById('btn_search');

// Funcion para pasar de Kelvin a celcius

function kelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return celsius.toFixed(2);
}

// Funcion para pasar de kelvin a farenheit

function kelvinToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * 1.8 + 32;
  return fahrenheit.toFixed(2);
}

// API function

const showWeather = () => {
    
    getCities(city_input.value)
      .then((response) => {
        if (response) {
          
          console.log(response);

          city_name.textContent = 'City: ' + response.name;
          country_name.textContent = 'Country: ' + response.sys.country;
          weather.textContent = 'Weather: ' + response.weather[0].main;
          city_temperature.textContent = `Temperature: ${kelvinToCelsius(response.main.temp)} °C / ${kelvinToFahrenheit(response.main.temp)} °F / ${response.main.temp} °K `;
          latitude.textContent = 'Latitude: ' + response.coord.lat;
          longitude.textContent = 'Longitude: ' + response.coord.lon;
          humidity.textContent = `Humidity: ${response.main.humidity} %`;
  
          let icon = response.weather[0].icon;
          if(icon_weather.classList.contains('hidden')){
            icon_weather.classList.remove('hidden')
            icon_weather.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)
          } else {
            icon_weather.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)
          }
          
        }
      })
      .catch((err) => console.log(err));
  }
  
  
button_search.addEventListener('click', showWeather);

