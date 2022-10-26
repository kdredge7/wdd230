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
  const weekDayName = weekDayNames[todayDate.getDay()];
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
  
bannerDisplay(date);