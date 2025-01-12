import neonTiger from "./images/neon-tiger.png";

export default function _switchToAboutTab() {

    const container = document.getElementById("content")
    const wrapper = document.createElement("div");
    const title = document.createElement("h1");
    const slogan = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = "About Us";
    slogan.textContent = "Proudly family-owned since 1987.";
    image.src = neonTiger;

    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);

    container.appendChild(wrapper);

}