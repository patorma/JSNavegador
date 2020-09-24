const form = document.getElementById("responsive-tester-form");

if (form) {
    form.addEventListener("submit", () => {
        let width = form.querySelector("#width"),
            height = form.querySelector("#height"),
            url = form.querySelector("#url");
        if (width && height && url) {
            //si existen se redefinen sus valores
            width = width.value;
            height = height.value;
            url = url.value;
        }
        //se pone innerWidth e innerHeight para que la barra del navegador
        //la x de cerra  etc no cuente en la medida es para probar el viewport
        //se muestre la vista en dispositivos no cuenta las medidads del navegador
        //con esto se asegura que se apliquen los tamaños a pagina y no a la
        //ventana
        window.open(url, url, `innerWidth=${width},innerHeight=${height}`);
    });
}