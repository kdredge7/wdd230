const dayOne = document.querySelector('#dayOne');
const dayTwo = document.querySelector('#dayTwo');
const dayThree = document.querySelector('#dayThree');

// Weather Data
const apiURL = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?id=carlsbad&appid=79dabcb9110b08edb5788d12143addcb';

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
