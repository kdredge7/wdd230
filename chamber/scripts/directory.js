const requestURL = 'scripts/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['businessDirectory'];
    directory.forEach(displayDirectory);
  });

  function displayDirectory(directory) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let address = document.createElement('p');
    let membership = document.createElement('p');
    
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${directory.name}`;
    phone.textContent = `Phone: ${directory.phone}`;
    website.textContent = `${directory.website}`;
    address.textContent = `Address: ${directory.address}`;
    membership.textContent = `Membership: ${directory.membership}`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute('alt', `Logo for ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');
    phone.setAttribute('class', 'phone');
    website.setAttribute('class', 'website');
    address.setAttribute('class', 'address');
    membership.setAttribute('class', 'membership');
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(address);
    card.appendChild(membership);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

// Grid and List Buttons: Help from Bro. Blazzard Code Pen
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}





  
  
