const date = {month:"long", day:"numeric", year:"numeric"};
    document.getElementById("date2").textContent = new Date().toLocaleDateString("en-US", date);   
