export default function fetchWeather(location) {
                // https://my-weather-app-server.herokuapp.com
  return fetch(`http://localhost:3001/api/weather/${location}`)
    .then(res=>{return res.json()})
    .catch(error => console.error('Error:', error));
}
