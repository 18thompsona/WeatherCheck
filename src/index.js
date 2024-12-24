import WeatherAPI from "./WeatherAPI";

let location = "Edinboro";


const weatherData = await WeatherAPI.GetData(location);
console.log(weatherData);

