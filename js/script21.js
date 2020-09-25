// calcular links internos de una pagina
// for(let link of links){
//     if(link.href.includes(location.host)){
//         link.style.background = 'yellow'
//         console.log(link)
//     }
//  }

// calcular links externos de una pagina
// for(let link of links){
//     if(!link.href.includes(location.host)){
//         link.style.background = 'yellow'
//         console.log(link)
//     }
//  }

// location.pathname  muestra ruta interna luego del dominio

// if(location.pathname.includes('cursos')){
//     document.body.classList.add('cursos-page')
// }

//setTimeout()
// setTimeout(() => {
//     alert('Hola mundo')
// }, 3000)

//ejemplo de setInterval()
// let contador = 0;
// const saludarMuchasVeces = setInterval(() => {
//     contador++;
//     if (contador > 1) {
//         console.log(`Hola ${contador} veces`);
//     } else {
//         console.log(`Hola ${contador} vez`);
//     }

//     if (contador === 20) {
//         clearInterval(saludarMuchasVeces);
//     }
// }, 1000);

// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
//devuelve horas, minutos y segundos
console.log(new Date().toLocaleTimeString());

setInterval(() => {
    const clock = document.getElementById("clock");
    if (clock) {
        clock.textContent = new Date().toLocaleTimeString();
    }
}, 1000);