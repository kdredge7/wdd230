// SPOTLIGHT INFORMATION on HOMEPAGE

// Fetch the data
const requestURL = 'scripts/data.json';

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })

// Filter out Businesses by Membership if they are silver or gold
.then(function(jsonObject) {
    const businesses = jsonObject.businessDirectory;
    const filteredBusinesses = [];

    for (const business of businesses ){
        if(business.membership == "Silver" || business.membership == "Gold"){
            filteredBusinesses.push(business)
        }
    }

    // Randomly select 3 businesses
    const random1 = Math.floor(Math.random() * filteredBusinesses.length);
    const random2 = Math.floor(Math.random() * filteredBusinesses.length);
    const random3 = Math.floor(Math.random() * filteredBusinesses.length);

    // Display 3 business cards
    const business1 = filteredBusinesses[random1];
    const business2 = filteredBusinesses[random2];
    const business3 = filteredBusinesses[random3];

    document.getElementById('spotlightB1Name').textContent = business1.name;
    document.getElementById('icon1').setAttribute("src", business1.imageurl);
    document.getElementById('spotlightB1Phone').textContent = business1.phone;
    document.getElementById('spotlightB1Website').textContent = business1.website;
    document.getElementById('spotlightB1Address').textContent = business1.address

    document.getElementById('spotlightB2Name').textContent = business2.name;
    document.getElementById('icon2').setAttribute("src", business2.imageurl);
    document.getElementById('spotlightB2Phone').textContent = business2.phone;
    document.getElementById('spotlightB2Website').textContent = business2.website;
    document.getElementById('spotlightB2Address').textContent = business2.address;

    document.getElementById('spotlightB3Name').textContent = business3.name;
    document.getElementById('icon3').setAttribute("src", business3.imageurl);
    document.getElementById('spotlightB3Phone').textContent = business3.phone;
    document.getElementById('spotlightB3Website').textContent = business3.website;
    document.getElementById('spotlightB3Address').textContent = business3.address;
    
})





