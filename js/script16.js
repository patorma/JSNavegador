const template = document.getElementById("template");
//vamos a clonarlo para usar ujn nuevo template a usar
const myNewTemplate = template.content.cloneNode(true);
myNewTemplate.querySelector("h2").textContent = "EDteam";
myNewTemplate.querySelector("p").textContent = "Tu futuro te esta esperando";

//al finalizar metemos el template en el DOM
document.getElementById("content").appendChild(myNewTemplate);