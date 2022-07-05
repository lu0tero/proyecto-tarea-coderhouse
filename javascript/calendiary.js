// funcion agregar tarea
function agregarTarea (tarea) {
    const elemento =  `
                        <li id="elemento">
                            <i class="far fa-circle co" data="realizado" id="0"></i>
                            <p class="text">${tarea}</p>
                            <i class="fas fa-trash de" data="eliminado" id="0"></i>
                        </li>
                      `
    lista.insertAdjacentHTML("beforeend", elemento)                      
}

addButton.addEventListener("click", ()=> {
    const tarea = input.value;
    if (tarea) {
        agregarTarea(tarea)
    }
    input.value=""
})

document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const tarea = input.value
        if(tarea) {
            agregarTarea(tarea)
        }
        input.value = ""
    }
})
