// document.querySelectorAll("div").forEach((el) => {
//     el.addEventListener("click", (e) => {
//         console.log(`Hiciste click en el div ${e.target.id}`);

//         //detener que se propague el evento
//         e.stopPropagation();
//     });
// });

const gallery = document.getElementById("gallery");

//se escucha el evento en el papá
gallery.addEventListener("click", (e) => {
    //detectar en que imagen e hace click
    //se guardara en t ele elemento que se hizo click
    const t = e.target,
        //se crea una galeria de imagenes
        //dentro de las galarias busco todas las iamgene,s
        images = Array.from(gallery.querySelectorAll("img")),
        i = images.indexOf(t);
    console.log(`Hiciste click en la imagen ${i + 1}`);
});