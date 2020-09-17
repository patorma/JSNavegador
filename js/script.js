// console.log(document.getElementById("title"));
//const title = document.getElementById("title");
//seleccionar elementos con el nombre de la etiqueta
//devuelve nodeList
//lo transforna el [...] en un array al document.query
//const nodeList = [...document.querySelectorAll("li")];
//otra forma de convertirlo en un array es la siguiente:
//es un prototipon el Array y dice crea un array a partir de una lista que te paso
//como parametro
const nodeList = Array.from(document.querySelectorAll("li"));
nodeList.map((el) => (el.style.background = "yellow"));
//devuelve HTMLCOLLECTIONS
//const elementList = document.getElementsByTagName("li");

//const listv = document.querySelector("ul");
// const title = document.getElementById("title"),
//     title2 = document.querySelector("#title"),
//     listItems = document.querySelectorAll("ul li"),
//     secondItem = document.querySelector("ul li:nth-child(2)"),
//     list = document.getElementById("list");
// title.style.background = "yellow";
//console.log(document.querySelector("h1"));
//console.log(items);
//console.log(list);
// console.log(title);
// console.log(title2);
// console.log(listItems);
// console.log(secondItem);
//devuelve el ultimo hijo
// console.log(list.querySelector("li:last-child"));
console.log(nodeList);
//console.log(elementList);