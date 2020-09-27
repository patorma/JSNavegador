c = console.log;
// let arr = [1, "2", 3, 4, "true", 5, 6];

//Eliminar un solo elemento (sin parametros)
//Estos métodos devuelven ele elemento eliminado

//.pop() al final
// let deleteEl = arr.pop();
// c(arr);
// c(deleteEl);

//.shift() al principio
// let deleteEl = arr.shift();
// c(arr);
// c(deleteEl);

//.join('separador) transforma un array a un string
// 'separador' es por defecto una coma
// c(arr.join());
//ponemos espacio entre los elementos
// c(arr.join(" "));

//.splice(a,b,items)
//donde a: indice donde va a comenzar hacer la operacion
//b: número de elementos que va a tomar
//items: Los elementos que va añadir
//añade o quita elementos
// arr.splice(2, 2, "Escuela", "Digital", "Ed");
// c(arr);

//si quiero solo agregar inserto 0 para indicar que no elimine
// arr.splice(2, 0, "Escuela", "Digital", "Ed");
// c(arr);

// c(arr);
//crea un nuevo array,indice inicial ,indice final
// let arr2 = arr.slice(2, 5);
// c(arr2);

//al no pasarle parametros al slice cera una copia del arreglo orginal
// let arr2 = arr.slice();
// c(arr2);

//.map()
//.filter()
//.reduce()

let estudiantes = [{
        nombre: "Carlos",
        calificacion: 20,
    },
    {
        nombre: "Juan",
        calificacion: 12,
    },
    {
        nombre: "María",
        calificacion: 9,
    },

    {
        nombre: "Pepe",
        calificacion: 7,
    },
    {
        nombre: "Arturo",
        calificacion: 17,
    },
];
//callback ejecuta algo en cada elemento del array,se pasa como parametro
//map(callback)
//Transforma cada elemento del array según el callback
//Devuelve un nuevo array

//ejemplo obtener nombres de estudiantes
// Primera forma (sin map)
// let estudiantesNombres = [];
// for (let i = 0; i < estudiantes.length; i++) {
//     estudiantesNombres.push(estudiantes[i].nombre);
// }
c(estudiantes);
//Segunda forma con .map()
let estudiantesNombres = estudiantes.map((estudiante) => estudiante.nombre);

c(estudiantesNombres);

//filter(callback) crea un nuevo array
let estudiantesAprobados = estudiantes.filter(
    (estudiante) => estudiante.calificacion > 10
);
c(estudiantesAprobados);
let estudiantesAprobadosNombres = estudiantesAprobados.map(
    (estudiante) => estudiante.nombre
);
c(estudiantesAprobadosNombres);

//.reduce(callback(prev,current,[i,arr])[,initial]) devuelve un valor
//prev: elemento previo
//current: elemento actual
//i: indice (opcional)
//arr: el mismo array (opcional)
//initial: valor inicial (opcional)
let numeros = [2, 4, 60, 8, 10];
let suma = numeros.reduce((a, b) => a + b);
// c(suma);

//ejemplo con reduce obtener el valor mas alto
let max = numeros.reduce((a, b) => (a > b ? a : b));
// c(max);

//obtener el promedio (reduce)
let promedio = numeros.reduce((a, b, i, arr) => {
    //a valor de la evaluacion anterior
    b += a;
    //determinar cuando llegamos al final
    return i === arr.length - 1 ? b / arr.length : b;
});
// c(promedio);

let mejorEstudiante = estudiantes.reduce((a, b) => {
    if (a.calificacion > b.calificacion) {
        return {
            nombre: a.nombre,
            calificacion: a.calificacion,
        };
    } else {
        return {
            nombre: b.nombre,
            calificacion: b.calificacion,
        };
    }
});

c(mejorEstudiante);