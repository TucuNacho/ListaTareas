const lista = (e) => {
    e.preventDefault();
    const tarea = input.value;
    if (tarea === "") {
        alert("No puedes agregar una tarea vacía");
    } else {
        const li = document.createElement("li");
        li.textContent = tarea;
        const btn = document.createElement('button')
        btn.textContent = 'Borrar';
        btn.addEventListener('click', () => {
            li.remove()
        })
        btn.classList.add('btn', 'btn-danger','ms-5')
        li.appendChild(btn)
        div.appendChild(li);
        input.value = "";
    }
}



// const borrarTarea = () => {
//     if (div.children.length > 0) {
//         div.removeChild(div.lastElementChild);
//     } else {
//         alert("No hay tareas para borrar");
//     }
// }

const vaciar= () => {
    ol.innerHTML = "";
}

const form = document.getElementById("tareaForm");
const input = document.querySelector("#tareaInput");
const div = document.querySelector("#listaTareas");
const borrar = document.getElementById("btnBorrar");
const borrarTodo = document.getElementById("btnBorrarTodo");
const ol = document.querySelector("ol");

form.addEventListener("submit", lista)
// borrar.addEventListener("click", btn);
borrarTodo.addEventListener("click", vaciar);