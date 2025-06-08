const weatherIcon = document.querySelector(".weather-icon-js");
const errorDiv = document.querySelector(".error-js");
const weatherDiv = document.querySelector(".weather-js");

export function showError() {
    errorDiv.style.display = "block";
    weatherDiv.style.display = "none";
}

export function showWeather(data) {
    document.querySelector(".city-js")
    .innerHTML= data.name;

    document.querySelector(".temp-js")
    .innerHTML= Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity-js")
    .innerHTML= data.main.humidity + "%";

    document.querySelector(".wind-js")
    .innerHTML= data.wind.speed + " km/h";

    // if (data.weather[0].main == "Clouds") {
    //     weatherIcon.src ="images/clouds.png";
    // }else if (data.weather[0].main == "Clear") {
    //     weatherIcon.src ="images/clear.png";
    // }else if (data.weather[0].main == "Rain") {
    //     weatherIcon.src ="images/rain.png";
    // }else if (data.weather[0].main == "Drizzle") {
    //     weatherIcon.src ="images/drizzle.png";
    // }else if (data.weather[0].main == "Mist") {
    //     weatherIcon.src ="images/mist.png";
    // }

    const weatherIcon = {
        Clouds: "images/clouds.png",
        Clear: "images/clear.png",
        Rain: "images/rain.png",
        Drizzle: "images/drizzle.png",
        Mist: "images/mist.png"
    };

    const weather = data.weather[0].main;
    if (weatherIcon[weather]) {
        weatherIcon.src = weatherIcon[weather];
    }

    errorDiv.style.display = "none";
    weatherDiv.style.display = "block";
}

