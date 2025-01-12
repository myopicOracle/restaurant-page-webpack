import "./styles.css";
import _switchToHomeTab, { homeButton } from "./homepage.js";
import _switchToMenuTab, { menuButton } from "./menu.js";
import _switchToAboutTab, { aboutButton } from "./about.js";

const wrapper = document.getElementById("content");
const title = document.createElement("h1");
const slogan = document.createElement("p");
const image = document.createElement("img");

homeButton.addEventListener("click", _switchToHomeTab); 
menuButton.addEventListener("click", _switchToMenuTab);    
aboutButton.addEventListener("click", _switchToAboutTab);                   


// delete everything below
console.log("This is a test. Purple Kangaroos.");