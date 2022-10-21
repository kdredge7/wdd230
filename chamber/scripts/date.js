   /* Announcement Bar 
<div id="announcement">
        <p>Come join us for the chamber meet and greet Wednesday at 7:00 p.m</p>
        </div> 

   const meeting = document.querySelector("#announcement").textcontent = '${date}';
   
   const day = date.getDay();

   if (day == 1 || day == 2) {
         meeting.style.display = "block";
    } 
    else {
         meeting.style.display = "none";
    } */ 

   /* Announcement Bar */ 
   const weekDayNames = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday"
   ];
   
   const todayDate = new Date();
   const weekDayName = weekDayNames[todaysDate.getDay()];
   // console.log(dayName);
   
   const bannerDiv = document.getElementById('banner');
   const bannerText = document.createElement('h2');
   bannerDiv.appendChild(bannerText);
   bannerText.textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
     
   function bannerDisplay(date) {
     if (date == "Monday" || date == "Tuesday") {
       console.log("banner");
       bannerDiv.style.display = "block";
     } else {
       bannerDiv.style.display = "none";
     }
   }
   
bannerDisplay(dayName);

    

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