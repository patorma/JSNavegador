const post = document.getElementById("post");
//publicidad agregar al medio
const ad = document.createElement("div");
ad.id = "publicidad";
ad.textContent = "Publicidad";
ad.classList.add("publicidad");
//despues se necesitan los parrafos
// const postParagraps = document.querySelectorAll("p");

//encontrar el parrafo intermedio
//devolvera esta funcion el hijo del medio
const getMiddleChild = (element) => {
    const childs = element.children,
        l = childs.length,
        i = Math.floor(l / 2); //redondea floor a enteros
    return childs[i];
};
const middleChild = getMiddleChild(post);
post.insertBefore(ad, middleChild);
// console.log(getMiddleChild(post));