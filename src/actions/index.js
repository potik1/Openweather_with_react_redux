import axios from 'axios';

const API_KEY = 'a7e32d120283ec30483119871ca23d60';
const URL = `http://api.openweathermap.org/data/2.5/weather?&appid=${API_KEY}&units=metric`;

export const FETCH_WEATHER = 'fetch_weather';

export function fetchWeather(location) {

  const URL_LOCATION = `${URL}&q=${location}`;
  const request = axios.get(URL_LOCATION);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}