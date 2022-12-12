const requestURL = 'scripts/data.json';
const produce = document.querySelector('#produce');

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['produceDirectory'];
    directory.forEach(displayDirectory);
  });

document.addEventListener ('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#produce');

    fetch('scripts/data.json').then(res => {
        return res.json();
    }).then (data => {
        let output = " ";
        data.forEach(produce => {
            output+= `<option> ${produce.name}</option>`;
        })

        selectDrop.innerHTML = output;
    }) .catch(err => {
        console.log(err);
    })
});