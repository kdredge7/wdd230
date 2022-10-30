 /* Calculate the number of days since last visited*/
let date1 = Date.now();
window.localStorage.setItem("date", date1.getTime());

let date2 = new Date(Number(window.localStorage.getItem("date")));

document.getElementById("lastVisit").textContent = text;
