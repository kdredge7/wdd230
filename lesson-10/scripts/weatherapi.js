// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Weather Data
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=79dabcb9110b08edb5788d12143addcb';

async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); this is for testing the call
        displayResults(data);
      } else {
        console.log(`Response not OK ${await response.text()}`);
      }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
  }
  
  apiFetch();

  // captialize
  function capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  }