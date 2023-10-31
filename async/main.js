import { getCities } from './function.js';

// Input and variables
const city_input = document.getElementById('search-city');
const city_name = document.getElementById('city-name');
const country_name = document.getElementById('country-name');
const weather = document.getElementById('weather');
const city_temperature = document.getElementById('temperature');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');

// Buttons
const button_search = document.getElementById('btn_search');

// API function

const showWeather = () => {
    
    getCities(city_input.value)
      .then((response) => {
        if (response) {
          
          console.log(response);

          city_name.textContent = 'City: ' + response.name;
          country_name.textContent = 'Country: ' + response.sys.country;
          weather.textContent = 'Weather: ' + response.weather[0].main;
          city_temperature.textContent = 'Temp: ' + response.main.temp;
          latitude.textContent = 'Latitude: ' + response.coord.lat;
          longitude.textContent = 'Longitude: ' + response.coord.lon;
  
          let icon = response.weather[0].icon;
          /*imgIcon.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)*/
        }
      })
      .catch((err) => console.log(err));
  }
  
  
button_search.addEventListener('click', showWeather);

