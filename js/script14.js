const parent = document.getElementById("parent");
const ad = document.createElement("div");
ad.id = "publicidad";
ad.textContent = "Publicidad";
ad.classList.add("publicidad");

//hermano anterior (metodos de jQuery)
// parent.before(ad);

//hermano siguiente (metodos de jQuery)
// parent.after(ad);

//primer hijo (metodos de jQuery)
// parent.prepend(ad);

//primer ultimo hijo (metodos de jQuery)
// parent.append(ad);

//reemlazar hijos(metodos de jQuery)
parent.children[0].replaceWith(ad);