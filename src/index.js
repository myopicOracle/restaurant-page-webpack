import "./styles.css";
import _switchToHomeTab, { homeButton, wrapper, title, slogan, image } from "./homepage.js";
import _switchToMenuTab, { menuButton } from "./menu.js";
import _switchToAboutTab, { aboutButton } from "./about.js";


homeButton.addEventListener("click", _switchToHomeTab); 
menuButton.addEventListener("click", _switchToMenuTab);    
aboutButton.addEventListener("click", _switchToAboutTab);                   


// delete everything below
console.log("This is a test. Purple Kangaroos.");