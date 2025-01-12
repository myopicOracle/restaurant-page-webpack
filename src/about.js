import neonTiger from "./images/neon-tiger.png";

const aboutButton = document.querySelector(".about");

export default function _switchToAboutTab() {
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
    title.textContent = "About Us"
    slogan.textContent = "Proudly family-owned since 1987."
    image.src = neonTiger
    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);
}

export { aboutButton };