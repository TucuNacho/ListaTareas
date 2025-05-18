const lista = (e) => {
  e.preventDefault();
  const tarea = input.value;
  if (tarea === "") {
    alert("No puedes agregar una tarea vacía");
  } else {
    const li = document.createElement("li");
    li.textContent = tarea;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "mt-3"
    );

    const btn = btnBorrar(li);
    li.appendChild(btn)
    div.appendChild(li);
    input.value = "";
  }
};

const btnBorrar = (li) =>{
    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = '🗑️'
    btnEliminar.classList.add('btn','btn-danger', 'btn-md')
    btnEliminar.addEventListener('click',() => li.remove());
    return btnEliminar
}

const vaciar = () => {
  ol.innerHTML = "";
};

const form = document.getElementById("tareaForm");
const input = document.querySelector("#tareaInput");
const div = document.querySelector("#listaTareas");
const borrar = document.getElementById("btnBorrar");
const borrarTodo = document.getElementById("btnBorrarTodo");
const ol = document.querySelector("ol");

form.addEventListener("submit", lista);
borrarTodo.addEventListener("click", vaciar);

// const agregarTarea = (e) => {
//   e.preventDefault();
//   const inputTarea = document.getElementById("tareaInput").value;
//   const lista = document.querySelector(".list-group");
//   const li = document.createElement("li");
//   li.textContent = inputTarea;
//   li.classList.add("list-group-item");
//   lista.appendChild(li);
//   formularioTarea.reset();
// };
