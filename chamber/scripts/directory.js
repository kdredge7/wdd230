const requestURL = 'scripts/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const directory = jsonObject['directory'];
    directory.forEach(displayDirectory);
  });

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let phone = document.createElement('p');
    let birthplace = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${directory.name} ${directory.lastname}`;
    phone.textContent = `Phone: ${directory.phone}.`;
    website.textContent = `Website: ${directory.website}.`;
    address.textContent = `Address: ${directory.address}.`;
    membership.textContent = `Membership: ${directory.membership}.`;
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', directory.imageurl);
    portrait.setAttribute('alt', `Logo for ${directory.name}`);
    portrait.setAttribute('loading', 'lazy');
    cardInfo.setAttribute('class', 'phone, website, address');
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

  
  
  
