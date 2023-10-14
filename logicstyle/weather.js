// const apiKey = "b0dc549aaac1bf5f679d6e5d2780402d";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchCity = document.querySelector('.search input');
// const searchBtn = document.querySelector('.search button');
// const weatherImg = document.querySelector('.weather-img')
// const alertMsg = document.querySelector('.alert h1')

// async function checkWeather(cityName){
//     const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
//     var data = await response.json();
//     const tempo = Math.round((data.main.temp)- 0.7)
//     console.log(data)
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = tempo + "°c";
//     document.querySelector(".humidity").innerHTML = data.main.humidity;
//     document.querySelector(".wind").innerHTML = data.wind.speed;

//     if(data.weather[0].main == "Clouds"){
//         weatherImg.src = "images/clouds.png"
//     }else if(data.weather[0].main =='Clear'){
//         weatherImg.src = "images/clear.png"
//     }else if(data.weather[0].main =='Rain'){
//         weatherImg.src = "images/rain.png"
//     }else if(data.weather[0].main =='Drizzle'){
//         weatherImg.src = "images/drizzle.png"
//     }else if(data.weather[0].main =='Mist'){
//         weatherImg.src = "images/mist.png"
//     }else if(data.weather[0].main == "Fog"){
//         weatherImg.src = "images/snow.png"
//     }else if(data.weather[0].main =="Haze"){
//         weatherImg.src = "images/clouds.png"
//     }
// }

// searchBtn.addEventListener("click", ()=>{
//     if((searchCity.value).length > 0){
//         checkWeather(searchCity.value);
//     }else{
//         alert(alertMsg.textContent)
//     }
// })

// checkWeather()
const apiKey = "b0dc549aaac1bf5f679d6e5d2780402d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchCity = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherImg = document.querySelector('.weather-img')

async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    const data = await response.json();
    const tempo = Math.round(data.main.temp);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = tempo + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    displayWeatherImage(data.weather[0].main);

    // Add code to display sunrise and sunset times
    const sunriseTimestamp = data.sys.sunrise * 1000; // Convert seconds to milliseconds
    const sunsetTimestamp = data.sys.sunset * 1000;   // Convert seconds to milliseconds
    const sunriseTime = new Date(sunriseTimestamp);
    const sunsetTime = new Date(sunsetTimestamp);
    
    document.querySelector(".sunrise").innerHTML = "Sunrise: " + formatTime(sunriseTime);
    document.querySelector(".sunset").innerHTML = "Sunset: " + formatTime(sunsetTime);
}

// Function to display weather image
function displayWeatherImage(weatherMain) {
    if (weatherMain === "Clouds") {
        weatherImg.src = "images/clouds.png";
    } else if (weatherMain === 'Clear') {
        weatherImg.src = "images/clear.png";
    } else if (weatherMain === 'Rain') {
        weatherImg.src = "images/rain.png";
    } else if (weatherMain === 'Drizzle') {
        weatherImg.src = "images/drizzle.png";
    } else if (weatherMain === 'Mist') {
        weatherImg.src = "images/mist.png";
    } else if (weatherMain === "Fog") {
        weatherImg.src = "images/snow.png";
    } else if (weatherMain === "Haze") {
        weatherImg.src = "images/clouds.png";
    }
}

// Function to format time as HH:MM AM/PM
function formatTime(time) {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert 0 to 12
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return formattedHours + ':' + formattedMinutes + ' ' + ampm;
}

searchBtn.addEventListener("click", () => {
    if (searchCity.value.length > 0) {
        checkWeather(searchCity.value);
    } else {
        alert("Enter City Name");
    }
});

// Initialize weather for a default city (you can change this to any default city)
checkWeather();