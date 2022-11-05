    // Date Banner and Current Date on Join Page
    const date = {weekday:"long", month:"long", day:"numeric", year:"numeric"};
    document.getElementById("date").textContent = new Date().toLocaleDateString("en-US", date);   

    // Current Time
    var hours = d.getHours();
    var mins = d.getMinutes();
    var seconds = d.getSeconds();
    document.getElementById("time").value = hours + ":" + mins + ":" + seconds;

    //Copyright Year 
    const d = new Date();
    d.setFullYear(2022);
    document.getElementById("year").textcontent = d;

    // Last day Modified 
    let text = document.lastModified;
    document.getElementById("modDate").textContent = text;