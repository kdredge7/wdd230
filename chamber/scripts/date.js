    const date = {month:"long", day:"numeric", year:"numeric"};
    document.getElementById("date").textContent = new Date().toLocaleDateString("en-US", date);   

    const d = new Date();
    d.setFullYear(2022);
    document.getElementById("year").textcontent = d;

    let text = document.lastModified;
    document.getElementById("modDate").textContent = text;