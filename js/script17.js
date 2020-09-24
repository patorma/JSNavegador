const title = document.querySelector("h1");
const description = document.querySelector("p");
const mediumBp = matchMedia("(min-width: 640px) and (orientation: portrait)");

const changeColor = () => {
    if (mediumBp.matches) {
        document.body.style.background = "red";
    } else {
        document.body.style.background = "yellow";
    }
};
//que se mantenga aunque se carge la pagina
addEventListener("DOMContentLoaded", changeColor);
addEventListener("resize", changeColor);

// console.log(mediumBp.matches);

// title.style.backgroundColor = "red";
//landscape(horizontal)
//portrait (vertical)
//supuesta evaluacion de propiedades css en js

// if (window.innerWidth > 640) {
//     document.body.style.background = "yellow";
// }