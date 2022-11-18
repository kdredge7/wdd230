    // Date Banner
    const date = {weekday:"long", month:"long", day:"numeric", year:"numeric"};
    const currentDate = new Date();
    const dateTime = currentDate.toLocaleDateString("en-US", date);
    document.getElementById("date").textContent = dateTime;  

    //Copyright Year
    document.getElementById("year").textcontent = currentDate.setFullYear(2022);

    // Last day Modified Homepage
    const text = document.lastModified;
    document.getElementById("modDate").textContent = text;

    // Current Date on Join Page
    const dateForm = document.getElementById("formDate");
    if (dateForm !== null) {
        dateForm.textContent = dateTime;
    }

    // Current Time on Join Page
    const hours = currentDate.getHours();
    const mins = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const timeForm = document.getElementById("formTIme");
    if (timeForm !== null) {
        timeForm.value = hours + ":" + mins + ":" + seconds;
    }
    