//API means Application Programming Interface which helps to communicate 2 different languages.


const inputBox=document.querySelector('.input-box');
const searchbtn=document.getElementById('searchbtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temp');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');

const location_not_found=document.querySelector('.location-not-found');

const weather_body=document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key="42a13939ccf137a802bcc071fa349dc3";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const weather_data=await fetch(`${url}`).then(response => response.json());

    
    if(weather_data.cod==`404`){
        location_not_found.style.display="flex";
        weather_body.style.display="none";
        return;
    }

    location_not_found.style.display="none";
    weather_body.style.display="flex";
    temperature.innerHTML=`${Math.round(weather_data.main.temp -273.15)}°C`;

    description.innerHTML=`${weather_data.weather[0].description}`;

    humidity.innerHTML=`${weather_data.main.humidity}%`;

    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
  case 'Clouds':
    weather_img.src = "./images/cloud.png";
    break;
  case 'Clear':
    weather_img.src = "./images/clear.png";
    break;
  case 'Rain':
    weather_img.src = "./images/rain.png";
    break;
  case 'Haze':
    weather_img.src = "./images/mist.png";
    break;
  case 'Snow':
    weather_img.src = "./images/snow.png";
    break;
  default:
    weather_img.src = "./images/default.png"; // Optional: handle unexpected cases
}

}
searchbtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});
