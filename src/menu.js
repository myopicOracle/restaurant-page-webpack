import neonElephant from "./images/neon-elephant.png";

export default function _switchToMenuTab() {

    const container = document.getElementById("content")
    const wrapper = document.createElement("div");
    const title = document.createElement("h1");
    const slogan = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = "Seasonal Menu";
    slogan.textContent = "We have everything you could think of!";
    image.src = neonElephant;

    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);

    container.appendChild(wrapper);

}