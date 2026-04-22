como muevo mis nav para que queden del lado derecho y la img del izquierdo

<header>
  <a href="/" class="logo">
    <img src="logo.png" alt="Logo">
  </a>

  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>

header {
  display: flex;
  justify-content: space-between; /* separa extremos */
  align-items: center; /* alinea vertical */
}

y como lo implemento responsibo

@media (max-width: 768px) {
  header {
    flex-direction: column; /* se apilan */
    align-items: flex-start;
  }

  nav ul {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
}
quiero desde js, agregar tareas y que se puedan mover tipodrag and drop
// Elementos del DOM
const form = document.getElementById("formulario");
const descripcion = document.getElementById("descripcion");
const prioridad = document.getElementById("prioridad");
const fecha = document.getElementById("fecha");

const colPendiente = document.getElementById("pendiente");
const colProceso = document.getElementById("proceso");
const colFinalizado = document.getElementById("finalizado");

const columnas = document.querySelectorAll(".column");

let tareaArrastrada = null;

// 📌 Crear tarea desde el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Crear tarjeta
  const card = document.createElement("div");
  card.classList.add("card", prioridad.value);
  card.setAttribute("draggable", true);

  // Contenido
  card.innerHTML = `
    <p><strong>${descripcion.value}</strong></p>
    <p>Prioridad: ${prioridad.value}</p>
    <p>Fecha: ${fecha.value}</p>
  `;

  // Activar drag
  activarDrag(card);

  // Agregar a pendientes
  colPendiente.appendChild(card);

  // Limpiar form
  form.reset();
});

// 🖱️ Función drag
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

// 📥 Permitir soltar en columnas
columnas.forEach(col => {
  col.addEventListener("dragover", (e) => {
    e.preventDefault(); // necesario
  });

  col.addEventListener("drop", () => {
    col.appendChild(tareaArrastrada);
  });
});

como aplico el local storage

// Obtener tareas
function obtenerTareas() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

// Guardar tareas
function guardarTareas(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

/* Variables Profesor */
:root {

/* Colores principales */

--color-primario: #2563eb;

--color-secundario: #7c3aed;

--color-terciario: #10b981;

/* Colores de estado */  
--color-pendiente: #3b82f6;  
--color-progreso: #f59e0b;  
--color-completado: #10b981;  
 
/* Tipografía */  
--fuente-principal: 'Segoe UI', system-ui, sans-serif;  
--tamano-base: 16px;  
 
/* Espaciado */  
--espacio-xs: 0.5rem;  
--espacio-sm: 1rem;  
--espacio-md: 1.5rem;  
--espacio-lg: 2rem;  
}
* {
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-size: 16px;
 max-width: 100%;
 
}

h1{
    color: #2563eb;
    font-size: 2rem;
}
h3{
    color: #7c3aed;
}



#btnAgregar{
   
    height: 3rem;
    width: 12rem;
    margin: 2rem;
    background-color: #10b981;
    border: 2px black solid;
    border-radius: 4px;
}
header{
    margin: 1rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color:#f4f6f8;

    display: flex;
    flex-direction: column;
    /* mejor que center en móviles */
    min-height: 100vh;
    align-items: center;
}

main {
    width: 50%;
    max-width: 900px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
}

/* FORMULARIO */
form {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border:2px #10b981 solid ;
    padding: 4rem;
    background-color: #af8ee9;
    
    
}

#menu_ {
    display: flex;
    gap: 10px;
}

#menu_ input,
#menu_ button {
    flex: 1;
}

/* CONTENEDOR DE COLUMNAS */
main > section:last-of-type {
    width: 100%;
    display: flex;
    gap: 15px;
}

/* COLUMNAS */
.columna {
    flex: 1;
    background: #f5f5f5;
    padding: 10px;
    border-radius: 10px;
    min-height: 200px;
}

/* KANBAN */
.board {
  display: flex;
  gap: 20px;
}

.column {
  background: #f4f4f4;
  padding: 10px;
  width: 200px;
  min-height: 300px;
}

.card {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  cursor: grab;
}
label{
    font-family: 'Courier New', Courier, monospace;

}
ajusta
/* =========================
   VARIABLES
========================= */
:root {
  --color-primario: #2563eb;
  --color-secundario: #7c3aed;
  --color-terciario: #10b981;

  --color-pendiente: #3b82f6;
  --color-progreso: #f59e0b;
  --color-completado: #10b981;

  --fuente-principal: 'Segoe UI', system-ui, sans-serif;

  --espacio-xs: 0.5rem;
  --espacio-sm: 1rem;
  --espacio-md: 1.5rem;
  --espacio-lg: 2rem;
}

/* =========================
   RESET GENERAL
========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--fuente-principal);
}

/* =========================
   BODY
========================= */
body {
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
}

/* =========================
   TITULOS
========================= */
h1 {
  color: var(--color-primario);
  font-size: 2rem;
  margin: var(--espacio-md) 0;
}

h2 {
  color: var(--color-secundario);
}

/* =========================
   HEADER
========================= */
header {
  width: 100%;
  padding: var(--espacio-sm);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* =========================
   MAIN
========================= */
main {
  width: 90%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--espacio-lg);
}

/* =========================
   FORMULARIO
========================= */
form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: var(--espacio-sm);
  padding: var(--espacio-lg);
  border: 2px solid var(--color-terciario);
  border-radius: 10px;
  background-color: #ffffff;
}

label {
  font-family: var(--fuente-principal);
  font-weight: bold;
}

#menu_ {
  display: flex;
  gap: var(--espacio-sm);
}

#menu_ input,
#menu_ button {
  flex: 1;
}

/* BOTÓN */
#btnAgregar {
  height: 3rem;
  background-color: var(--color-terciario);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

#btnAgregar:hover {
  opacity: 0.9;
}

/* =========================
   KANBAN
========================= */
.board {
  display: flex;
  gap: var(--espacio-sm);
  width: 100%;
  justify-content: center;
}

.column {
  flex: 1;
  background: #f4f4f4;
  padding: var(--espacio-sm);
  border-radius: 10px;
  min-height: 300px;
}

/* =========================
   CARDS
========================= */
.card {
  background: white;
  padding: var(--espacio-sm);
  margin-bottom: var(--espacio-sm);
  border-radius: 6px;
  cursor: grab;
  border-left: 5px solid transparent;
}

/* PRIORIDADES */
.card.alta {
  border-left-color: red;
}

.card.media {
  border-left-color: orange;
}

.card.baja {
  border-left-color: green;
}