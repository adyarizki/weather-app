const weatherIcon = document.querySelector(".weather-icon-js");
const errorDiv = document.querySelector(".error-js");
const weatherDiv = document.querySelector(".weather-js");

export function showError() {
    errorDiv.style.display = "block";
    weatherDiv.style.display = "none";
}

