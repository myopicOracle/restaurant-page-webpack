import "./styles.css";
import homeTab from "./homepage.js";
import menuTab from "./menu.js";
import aboutTab from "./about.js";

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

function switchTab(e) {
    Array.from(document.querySelectorAll("button"))
        .forEach(
            item => item.style.backgroundColor = "violet"
        );
    e.target.style.backgroundColor = "darkred";
    clearDisplay();
    if (e.target.classList.contains("home")) homeTab();
    if (e.target.classList.contains("menu")) menuTab();
    if (e.target.classList.contains("about")) aboutTab();
};

function clearDisplay() {
    const container = document.getElementById("content")
    const oldWrapper = document.querySelector("#content>div")
    container.removeChild(oldWrapper)
}

homeButton.addEventListener("click", switchTab); 
menuButton.addEventListener("click", switchTab);    
aboutButton.addEventListener("click", switchTab);