import neonElephant from "./images/neon-elephant.png";

const menuButton = document.querySelector(".menu");

export default function _switchToMenuTab() {
    const wrapper = document.getElementById("content");
    // clear current page
    const titleOld = document.querySelector("h1");
    const sloganOld = document.querySelector("p");
    const imageOld = document.querySelector("img");
    wrapper.removeChild(titleOld);
    wrapper.removeChild(sloganOld);
    wrapper.removeChild(imageOld);
    // change contents
    const title = document.createElement("h1");
    const slogan = document.createElement("p");
    const image = document.createElement("img");
    title.textContent = "Seasonal Menu"
    slogan.textContent = "We have everything you could think of!"
    image.src = neonElephant
    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);
}

export { menuButton };