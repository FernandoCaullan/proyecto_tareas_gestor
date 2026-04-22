// ======= ELEMENTOS =======
const form = document.getElementById("formulario");
const descripcion = document.getElementById("descripcion");
const prioridad = document.getElementById("prioridad");
const fecha = document.getElementById("fecha");

const colPendiente = document.getElementById("pendiente");
const colProceso = document.getElementById("proceso");
const colFinalizado = document.getElementById("finalizado");

const columnas = document.querySelectorAll(".column");

let tareaArrastrada = null;

// ======= LOCAL STORAGE =======
function obtenerTareas() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

function guardarTareas(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// ======= CREAR TARJETA =======
function crearCard(tarea) {
  const card = document.createElement("div");
  card.classList.add("card", tarea.prioridad);
  card.setAttribute("draggable", true);
  card.dataset.id = tarea.id;

  card.innerHTML = `
    <p><strong>${tarea.descripcion}</strong></p>
    <p>Prioridad: ${tarea.prioridad}</p>
    <p>Fecha: ${tarea.fecha}</p>

    <button class="btn-eliminar">❌ Eliminar</button>
  `;

  // ===== DRAG =====
  activarDrag(card);

  // ===== ELIMINAR SOLO BOTÓN =====
  const btnEliminar = card.querySelector(".btn-eliminar");

     btnEliminar.addEventListener("click", (e) => {
  e.stopPropagation();

  const confirmar = confirm("¿Seguro que quieres eliminar esta tarea?");

  if (confirmar) {
    eliminarTarea(tarea.id);
    card.remove();
  }
});

  // ===== INSERTAR SEGÚN ESTADO =====
  if (tarea.estado === "pendiente") colPendiente.appendChild(card);
  if (tarea.estado === "proceso") colProceso.appendChild(card);
  if (tarea.estado === "finalizado") colFinalizado.appendChild(card);
}

// ======= CREAR TAREA =======
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nuevaTarea = {
    id: Date.now(),
    descripcion: descripcion.value,
    prioridad: prioridad.value,
    fecha: fecha.value,
    estado: "pendiente"
  };

  const tareas = obtenerTareas();
  tareas.push(nuevaTarea);
  guardarTareas(tareas);

  crearCard(nuevaTarea);

  form.reset();
});

// ======= DRAG =======
function activarDrag(card) {
  card.addEventListener("dragstart", () => {
    tareaArrastrada = card;
    setTimeout(() => {
      card.style.display = "none";
    }, 0);
  });

  card.addEventListener("dragend", () => {
    setTimeout(() => {
      card.style.display = "block";
      tareaArrastrada = null;
    }, 0);
  });
}

// ======= DROP =======
columnas.forEach(col => {
  col.addEventListener("dragover", (e) => e.preventDefault());

  col.addEventListener("drop", () => {
    if (!tareaArrastrada) return;

    col.appendChild(tareaArrastrada);

    const id = tareaArrastrada.dataset.id;
    const tareas = obtenerTareas();

    const tarea = tareas.find(t => t.id == id);

    if (col.id === "pendiente") tarea.estado = "pendiente";
    if (col.id === "proceso") tarea.estado = "proceso";
    if (col.id === "finalizado") tarea.estado = "finalizado";

    guardarTareas(tareas);
  });
});

// ======= ELIMINAR =======
function eliminarTarea(id) {
  let tareas = obtenerTareas();
  tareas = tareas.filter(t => t.id !== id);
  guardarTareas(tareas);
}

// ======= CARGAR AL INICIO =======
document.addEventListener("DOMContentLoaded", () => {
  const tareas = obtenerTareas();
  tareas.forEach(tarea => crearCard(tarea));
});