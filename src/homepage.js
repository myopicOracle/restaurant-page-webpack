import neonDiamond from "./images/neon-diamond.png";

const homeButton = document.querySelector(".home");

const wrapper = document.getElementById("content");
const title = document.createElement("h1");
const slogan = document.createElement("p");
const image = document.createElement("img");

title.textContent = "The Purple Kangaroo";
slogan.textContent = '"Elevated Michelin Dining in the Heart of KangarooLand."';
image.src = neonDiamond

wrapper.appendChild(title);
wrapper.appendChild(slogan);
wrapper.appendChild(image);

export default function _switchToHomeTab() {
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
    title.textContent = "The Purple Kangaroo";
    slogan.textContent = '"Elevated Michelin Dining in the Heart of KangarooLand."';
    image.src = neonDiamond
    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);
}

export { homeButton, wrapper, title, slogan, image };