const apiKey = "317c454432f073e4f346e735862b2ba1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

export async function fetchWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        return null;
    } 
       const data = await response.json();
       console.log(data);
       
       return data;
}