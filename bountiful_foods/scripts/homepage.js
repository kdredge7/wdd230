// Navigation
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

// Last day Modified Homepage
const text = document.lastModified;
document.getElementById("modDate").textContent = text;