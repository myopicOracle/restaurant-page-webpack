import neonDiamond from "./images/neon-diamond.png";

// content on page load
_switchToHomeTab();


// event handler function to be exported
export default function _switchToHomeTab() {

    const container = document.getElementById("content")
    const wrapper = document.createElement("div");
    const title = document.createElement("h1");
    const slogan = document.createElement("p");
    const image = document.createElement("img");

    title.textContent = "The Purple Kangaroo";
    slogan.textContent = '"Elevated Michelin Dining in the Heart of KangarooLand."';
    image.src = neonDiamond;

    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);

    container.appendChild(wrapper);

}