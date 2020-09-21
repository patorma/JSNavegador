const parent = document.getElementById("parent"),
    //se tienen los hijos
    childs = Array.from(parent.children),
    //detectar elemento que tenga hijos en este caso el hijo que sea papá
    childParent = childs.filter((child) => child.children.length > 0)[0],
    grandSons = Array.from(childParent.children),
    grandSon3 = grandSons.filter(
        (child) => child.textContent.trim() === "Nieto 3"
    )[0];

// primera forma
// const childs = Array.from(parent.children);

//const childs = Array.from(parent.querySelectorAll("div"));
const newElement = document.createElement("h2");

//obtener elemento que tiene nieto 3

//primera forma para ver quien tiene hijos
//ver hijos que tienen hijos, 0 para recuperrar el primero
// const childWithChilds = childs.filter((child) => child.children.length > 0)[0];

newElement.textContent = "Soy un nuevo elemento";
childParent.insertBefore(newElement, grandSon3);
// parent.appendChild(newElement);

// console.log(childs);

//primera forma para ver quien tiene hijos
// console.log(childWithChilds);

//ejemplo parent.insertBefore(nuevo,hijo4)