const title = document.getElementById("title");

// title.addEventListener('eventName',eventHandler)
const holaMundo = (e) => alert(e.target.textContent);
//cuando se quiere pasar parametros usar funcion anonima
title.addEventListener("click", (e) => {
    holaMundo(e);
});

document.querySelector("button").addEventListener("click", (e) => {
    holaMundo(e);
});