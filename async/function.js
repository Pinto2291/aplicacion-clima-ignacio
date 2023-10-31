import config from "../config/index.js";

const getCities = async (city) => {
  const getResultFromAPI = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.apiKeyWeather}`)
  const response = await getResultFromAPI;
  const finishResponse = response.json();
  return finishResponse;
}

export { getCities };