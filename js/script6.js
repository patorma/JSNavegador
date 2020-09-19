const form = document.getElementById("form");
const remenberPassword = document.getElementById("remenber-password");

form.addEventListener("submit", () => {
    console.log("Ha enviado el formulario");
});

remenberPassword.addEventListener("change", (e) => {
    if (e.target.checked) {
        console.log("El usuario quiere recordar su contraseña");
    } else {
        console.log("El usuario NO quiere recordar su contraseña");
    }
});