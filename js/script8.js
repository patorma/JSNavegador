document.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', (e) => {
        console.log(`Hiciste click en el div ${e.target.id}`)

        //detener que se propague el evento
        e.stopPropagation()
    })
})