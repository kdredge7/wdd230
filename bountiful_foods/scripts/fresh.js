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

  function displayDirectory(directory) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let calories = document.createElement('h3');
    let carbohydrates = document.createElement('p');
    let protein = document.createElement('p');
    let fat = document.createElement('p');
    let sugar = document.createElement('p');
    

    // Change the textContent property of the h2 element to contain the produce name
    // h2.textContent = `${produceDirectory.name}`;
    name.select = `Proudce: ${directory.name}`;
    calories.textContent = `Calories: ${directory.calories}`;
    carbohydrates.textContent = `Carbohdrates: ${directory.carbohydrates}`;
    protein.textContent = `Protein: ${directory.protein}`;
    fat.textContent = `Fat: ${directory.fat}`;
    sugar.textContent = `Sugar: ${directory.fat}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    name.setAttribute('class', 'name');
    calories.setAttribute('class', 'calories');
    carbohydrates.setAttribute('class', 'carbohydrates');
    protein.setAttribute('class', 'protein');
    fat.setAttribute('class', 'fat');
    sugar.setAttribute('class', 'sugar');
    // Add/append the section(card) with the h2 element
    card.appendChild(name);
    card.appendChild(calories);
    card.appendChild(carbohydrates);
    card.appendChild(protein);
    card.appendChild(fat);
    card.appendChild(sugar);

    // Add/append the existing HTML div with the cards class with the section(card)
    //  document.querySelector('div.cards').appendChild(card);
    document.querySelector('#produce').appendChild(name);


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

}








  
  
