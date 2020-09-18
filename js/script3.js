const title = document.querySelector("h1");

const profesor = document.createElement("p");
const profesorContainer = document.getElementById("teacher");

profesor.textContent = "Patricio Contreras";
profesor.classList.add("teacher");
// profesor.id = "teacher";

//agregar nuestro elemento creado(profesor) con element.appendchild()
// document.body.appendChild(profesor);

if (profesorContainer && profesorContainer.querySelector("span")) {
    profesorContainer.querySelector("span").appendChild(profesor);
}