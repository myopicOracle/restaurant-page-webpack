import neonElephant from "./images/neon-elephant.png";

const menuButton = document.querySelector(".menu");

export default function _switchToMenuTab() {
    // clear current page
    wrapper.removeChild(title);
    wrapper.removeChild(slogan);
    wrapper.removeChild(image);
    // change contents
    title.textContent = "Seasonal Menu"
    slogan.textContent = "We have everything you could think of!"
    image.src = neonElephant
    // toggle menu page contents
    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);
}

export { menuButton };