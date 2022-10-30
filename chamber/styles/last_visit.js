 /* Calculate the number of days since last visited*/
const date1 = Date.now();
window.localStorage.setItem("date", date1.getTime());
const date2 = new Date(Number(window.localStorage.getItem("date")));
const oneDay = 24 * 60 * 60 * 1000;

const lastVisit = Math.round(Math.abs((date1 - date2) / oneDay));

document.getElementById("lastVisit").textContent = text;


