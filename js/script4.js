const title = document.getElementById("title");

// title.addEventListener('eventName',eventHandler)
const holaMundo = (e) => console.log(e.target.textContent);
//cuando se quiere pasar parametros usar funcion anonima
// title.addEventListener("click", (e) => {
//     holaMundo(e);
// });

// document.querySelector("button").addEventListener("click", (e) => {
//     holaMundo(e);
// });

//crear nuestro propio menu contextual
const createMenu = (e) => {
    const menu = document.createElement("div");
    menu.setAttribute("id", "context-menu");
    const prevMenu = document.getElementById("context-menu");
    menu.textContent = "Soy un menu contextual";

    if (prevMenu) document.body.removeChild(prevMenu);
    document.body.appendChild(menu);

    menu.style.padding = "1em";
    menu.style.background = "#eee";
    menu.style.position = "fixed";
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;
    document.addEventListener("click", (e) => {
        //const menu = document.getElementById("context-menu");
        menu.style.display = "none";
    });
};

// const quitarMenu = () => {
//     const menu = document.getElementById("context-menu");
//     document.addEventListener("click", (e) => {
//         if (!menu) document.body.removeChild(menu);
//     });
// };

document.addEventListener("contextmenu", (e) => {
    //holaMundo(e);
    createMenu(e);
    // quitarMenu();

    // console.log(e.pageX, e.pageY);
    //hace que el navegador no realize una accion por defecto
    e.preventDefault();
});