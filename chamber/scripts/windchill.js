// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const currentCondition = document.querySelector('#currentCond')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#windchill');

// Weather Data
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Grace&units=imperial&appid=79dabcb9110b08edb5788d12143addcb';

async function apiFetch() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); //this is for testing the call
      displayResults(data);
    } else {
      console.log(`Response not OK ${await response.text()}`);
    }
  } catch (error) {
      console.log(`Error: ${error.message}`);
  }
}
  
apiFetch();

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(weatherData) {
  let temp = weatherData.main.temp;
  let speed = weatherData.wind.speed;
  let iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  let desc = weatherData.weather[0].description;

  currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
  currentCondition.innerHTML = capitalize(desc);
  windSpeed.innerHTML = `<strong>${speed.toFixed(0)}</strong>`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
  windChill.innerHTML = chillF(temp, speed);
}
   
   
   
function chillF(temp, speed) {
  if (temp <= 50 && speed > 3) {
    const chill = (35.74 + (0.6215 * temp) - (35.75 * speed**0.16) + (0.4275 * temp * speed ** 0.16)).toFixed(0);
    return `${chill} °F`;
  } else {
    return "N/A"
  }
} 
      
     
         

    

          
     