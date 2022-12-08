// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const currentCondition = document.querySelector('#currentCond')
const captionDesc = document.querySelector('figcaption');
const currenthumidity = document.querySelector('#current-humidity');

// Weather Data
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=79dabcb9110b08edb5788d12143addcb';

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
      // console.log(`Error: ${error.message}`);
  }
}
  
apiFetch();

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function displayResults(weatherData) {
  let temp = weatherData.main.temp;
  let desc = weatherData.weather[0].description;
  let humidity = weatherData.main.humidity;

  currentTemp.innerHTML = `<strong>${temp.toFixed(0)}</strong>`;
  currentCondition.innerHTML = capitalize(desc);
  windSpeed.innerHTML = `<strong>${speed.toFixed(0)}</strong>`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  currenthumidity.innerHTML = (humidity);
}  
     
         

    

          
     