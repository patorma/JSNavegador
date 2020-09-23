// primera forma de crear un arreglo de profesores y mostrarlos en el DOM
// const teachers = ["Alexys", "Beto", "Alvaro", "Daniel", "Jon"];
// const teacherList = document.createElement("ul");
// const teacherListContainer = document.getElementById("teacher-list");

// teacherListContainer.appendChild(teacherList);

// //la desventaja es que hemos metido un elemento en el DOM
// for (let teacher of teachers) {
//     const li = document.createElement("li");
//     teacherList.appendChild(li);
//     li.textContent = teacher;
// }

//segunda forma con createDocumentFragment(),guardar en memoria y despues poner en el DOM
const teachers = ["Alexys", "Beto", "Alvaro", "Daniel", "Jon"];
const teacherList = document.createElement("ul");
const teacherListContainer = document.getElementById("teacher-list");
//un fragment es un elemento del DOM pero vive en memoria
const teacherListFragment = document.createDocumentFragment();
teacherListContainer.appendChild(teacherList);

for (let teacher of teachers) {
    const li = document.createElement("li");
    //se guarda en memoria
    teacherListFragment.appendChild(li);
    li.textContent = teacher;
}

//en conclusion lso elementos se guardan en menoria y se dibujan una sola vez en el DOM
teacherList.appendChild(teacherListFragment);