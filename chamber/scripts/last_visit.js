//Last date viewd site
let lastVisit = localStorage.getItem("lastV");
 //What if lastV is not set ( this is their first visit )
if (lastVisit == null || lastVisit == undefined){
    //Display Welcome this is your first visit!
    document.getElementById("lastVisit").textContent = 'Welcome this your first visit!'
}
 //If there is a valid lastV ( There is a previous visit) 
else{
    //Today's date 
    const today = Date.now();
    // Today's date - Last date viewed
    const daysSinceLastVisit = today - lastVisit;
    // Millaseconds and calculate into days
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round(daysSinceLastVisit / oneDay);

    // Output in HTML
    document.getElementById("lastVisit").textContent = "Days since last visit: " + days;
}

localStorage.setItem("lastV", Date.now());
    



   


    