/* The following JS code is being used to replace the below HTML elements; on page load
<h1>The Purple Kangaroo</h1>
<p>"Elevated Michelin Dining in the Heart of KangarooLand."</p>
<img src="./images/neon-panda.jpg" alt="A Neon Panda"> */

// it is NECESSARY to import source file to JavaScript module 
import neonPanda from "./images/neon-panda.jpg";

// can also use 'document.body.element' instead of creating a 'wrapper.element'
const wrapper = document.getElementById("content")

const title = document.createElement("h1");
title.textContent = "The Purple Kangaroo";
wrapper.appendChild(title);
const slogan = document.createElement("p");
slogan.textContent = '"Elevated Michelin Dining in the Heart of KangarooLand."';
wrapper.appendChild(slogan);
const image = document.createElement("img");
image.src = neonPanda // use this convention instead
    // image.setAttribute("src", "./images/neon-panda.jpg");
    // image.setAttribute("alt", "A Neon Panda");
wrapper.appendChild(image);

export { wrapper, title, slogan, image };