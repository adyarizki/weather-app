import {fetchWeather} from './weatherModel.js';
import {showError, showWeather} from './weatherView.js';

// const apiKey = "317c454432f073e4f346e735862b2ba1";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon-js");


async function checkWeather(city) {

    const data = await fetchWeather(city);
    if (!data) {
        showError();
    }else {
        showWeather(data);
    }
   /* const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if (response.status == 404) {
        document.querySelector(".error-js").style.display = "block";
        document.querySelector(".weather-js").style.display = "none";
    }else{
            let data = await response.json();

            console.log(data);*/
            


   /* document.querySelector(".city-js")
    .innerHTML= data.name;

    document.querySelector(".temp-js")
    .innerHTML= Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity-js")
    .innerHTML= data.main.humidity + "%";

    document.querySelector(".wind-js")
    .innerHTML= data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src ="images/clouds.png";
    }else if (data.weather[0].main == "Clear") {
        weatherIcon.src ="images/clear.png";
    }else if (data.weather[0].main == "Rain") {
        weatherIcon.src ="images/rain.png";
    }else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src ="images/drizzle.png";
    }else if (data.weather[0].main == "Mist") {
        weatherIcon.src ="images/mist.png";
    }
    
    document.querySelector(".weather-js").style.display = "block";
    document.querySelector(".error-js").style.display = "none";
    }*/
    
}

searchButton.addEventListener("click" , () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
})
