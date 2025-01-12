import neonPanda from "./images/neon-panda.jpg";

const homeButton = document.querySelector(".home");

export default function _switchToHomeTab() {
    // clear current page
    wrapper.removeChild(title);
    wrapper.removeChild(slogan);
    wrapper.removeChild(image);
    // change contents
    title.textContent = "The Purple Kangaroo";
    slogan.textContent = '"Elevated Michelin Dining in the Heart of KangarooLand."';
    image.src = neonPanda
    // toggle menu page contents
    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);
}

export { homeButton };