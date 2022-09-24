const date = {month:"long", day:"numeric", year:"numeric"};
document.getElementById("updated").textContent = new Date().toLocaleDateString("en-US", date);  