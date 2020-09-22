const parent = document.getElementById("parent");
const ad = document.createElement("div");
ad.id = "publicidad";
ad.textContent = "Publicidad";
ad.classList.add("publicidad");

//insertar elmento como hermano anterior
//parent.insertAdjacentElement("beforebegin", ad);

//insertar elmento como hermano siguiente
// parent.insertAdjacentElement("afterend", ad);

//insertar elmento como primer hijo
// parent.insertAdjacentElement("afterbegin", ad);

//insertar elmento como último hijo
// parent.insertAdjacentElement("beforeend", ad);

//insertar texto como último hijo
// parent.insertAdjacentText("beforeend", "Hola mundo");

//insertar texto como hermano anterior
// parent.insertAdjacentText("beforebegin", "Hola mundo");

//insertar HTML como hermano anterior
parent.insertAdjacentHTML("beforebegin", `<h1>Soy el titulo principal</h1>`);