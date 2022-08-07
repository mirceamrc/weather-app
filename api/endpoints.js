const API_KEY = "07335ff9b763c03c18e1b4daa826763b";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
