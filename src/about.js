import neonTiger from "./images/neon-tiger.png";

const aboutButton = document.querySelector(".about");

export default function _switchToAboutTab() {
    // clear current page
    wrapper.removeChild(title);
    wrapper.removeChild(slogan);
    wrapper.removeChild(image);
    // change contents
    title.textContent = "About Us"
    slogan.textContent = "Proudly family-owned since 1987."
    image.src = neonTiger
    // toggle about page contents
    wrapper.appendChild(title);
    wrapper.appendChild(slogan);
    wrapper.appendChild(image);
}

export { aboutButton };