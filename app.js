// selectores globales
const contenedorPadre = document.querySelector('#contenedor-eventos')
const deportes = document.querySelector('#deportes')

let allCategorias = []

document.addEventListener('DOMContentLoaded', () => {
    consultarAPI()
})

const consultarAPI = async () => {
    const url = 'http://localhost:5500/taquillaEventos.json'
    const respuesta = await fetch(url)
    let resultado = await respuesta.json()
    allCategorias = resultado
    generarCard(resultado)
}

function generarCard(eventos){
    eventos.forEach(evento => {
        const newDiv = document.createElement('DIV')
        newDiv.classList.add('col-md-4','card-evento')
        const newH5 = document.createElement('H5')
        newH5.textContent = `${evento.nombre_evento}`
        const newP = document.createElement('P')
        newP.textContent = `${evento.precio}`
        const newPCat = document.createElement('P')
        newPCat.textContent = `Categoria: ${evento.categoria}`
       
        newDiv.appendChild(newH5)
        newDiv.appendChild(newP)
        newDiv.appendChild(newPCat)
        contenedorPadre.appendChild(newDiv)
    });
}

deportes.addEventListener('click',() => {
    const filtrarDeportes = allCategorias.filter(categoria => categoria.categoria === 'deportes')
    console.log(filtrarDeportes)
})