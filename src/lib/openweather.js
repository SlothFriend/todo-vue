import axios from 'axios';
import { CityWeather } from '@/classes';

const getCityWeather = async (cityName) => {
  const { data: raw } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=0080f52e664dfc7eb8ce0c1912941fa2&units=imperial`);
  const city = raw.name;
  const description = raw.weather[0] && raw.weather[0].main;
  const temperature = raw.main.temp;
  return new CityWeather(city, description, temperature);
};

export { getCityWeather };