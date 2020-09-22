const parent = document.getElementById("parent");
const ad = document.createElement("div");
ad.id = "publicidad";
ad.textContent = "Publicidad";
ad.classList.add("publicidad");

parent.replaceChild(ad, parent.children[0]);