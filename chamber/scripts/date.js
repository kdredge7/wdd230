   /* Announcement Bar 
   const meeting = document.getElementById("announcement").textcontent;
   
   const day = new Date();
   currentDate = date.getDay();

   if (currentDate == 1 || currentDate == 2) {
         meeting.style.display = block;
    } 
    else {
         meeting.style.display = none;
    }
    */ 

    /* Date Banner */
    const date = {weekday:"long", month:"long", day:"numeric", year:"numeric"};
    document.getElementById("date").textContent = new Date().toLocaleDateString("en-US", date);   

    /* Copyright Year */
    const d = new Date();
    d.setFullYear(2022);
    document.getElementById("year").textcontent = d;

    /* Last day Modified */
    let text = document.lastModified;
    document.getElementById("modDate").textContent = text;