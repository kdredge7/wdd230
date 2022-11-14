    // Date Banner 
    const date = {weekday:"long", month:"long", day:"numeric", year:"numeric"};
    document.getElementById("date").textContent = new Date().toLocaleDateString("en-US", date);   

    //Copyright Year 
    const d = new Date();
    d.setFullYear(2022);
    document.getElementById("year").textcontent = d;

    // Last day Modified Homepage
    let text = document.lastModified;
    document.getElementById("modDate").textContent = text;

    // Current Date on Join Page
    const dateJoin = {weekday:"long", month:"long", day:"numeric", year:"numeric"};
    document.getElementById("formDate").textContent = new Date().toLocaleDateString("en-US", dateJoin);   

    let currentDate = new Date();
    // Current Time on Join Page
    const hours = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    document.getElementById("formTime").value = hours + ":" + mins + ":" + seconds;

    