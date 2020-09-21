const parent = document.getElementById("parent");
const grandson = document.getElementById("grandson-2");
//obtiene solo los hijos, sin nietos
// console.log(parent.children);
//se obtiene todos
// console.log(parent.querySelectorAll("div"));
// console.log(parent.childNodes);
//primer hijo elemento
// console.log(parent.firstElementChild);
//ultimo hijo elemento
// console.log(parent.lastElementChild);
////ultimo hijo nodo
// console.log(parent.lastChild);
//comprobar si el elemento tiene hijos
// console.log(parent.hasChildNodes());
//proximo elemento
// console.log(grandson.nextElementSibling);
//anterior elemento
// console.log(grandson.previousElementSibling);
//el nodo previo
// console.log(grandson.previousSibling);
//el nodo posterior
// console.log(grandson.nextSibling);
//el padre elemento
// console.log(grandson.parentElement);
//el padre nodo
// console.log(grandson.parentNode);
//se puede subir por ejemplo dos niveles
console.log(grandson.parentElement.parentElement);