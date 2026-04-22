# Documentacion de pedidos IA

 #### **P:** *como separo el logo del nav dentro de mi header*
---

### 🧭 Estilos del Header (Flexbox)

Este código CSS organiza el `header` usando Flexbox para alinear elementos.

## 🎨 Código

```css
header {
  display: flex;
  justify-content: space-between; /* separa extremos */
  align-items: center; /* alinea vertical */
}
```

# JavaScript
**P:** *quiero desde js, agregar tareas y que se puedan mover tipodrag and drop*
```js
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
```

**P:** *como aplico el local storage*
---
```js
// Obtener tareas
function obtenerTareas() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

// Guardar tareas
function guardarTareas(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

```
# Revision css

**P:** Se le pide ajustar css y revisar errores
---
```css
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
```
# Index Revision
---
#### **P:** *Limpia el codigo de html*
---
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyecto_tarea_gestor</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    
</head>
<body>
    <header>
        
        <img id="logo" src="assets/img/logo.png" alt="LogoNav">
        <nav>            
           <a href="#logo">INICIO</a>
           <a href="#formulario">Agregar Tareas</a>
           <a href="#piepagina">Contactanos</a>
           
            
        </nav>
    </header>


    <main>
        <h1>Gestor de Tareas</h1>
        <form id="formulario" >
            <label for="descripcion">Descripción:</label>  
            <textarea id="descripcion" required></textarea>  
 
            <label for="prioridad">Prioridad:</label>  
            <select id="prioridad" required>  
                <option value="">Seleccionar...</option>  
                <option value="alta">Alta</option>  
                <option value="media">Media</option>  
                <option value="baja">Baja</option>  
            </select>  
            
            <label for="fecha">Fecha límite:</label> 
            <section id="menu_"> 
                <input type="date" id="fecha" required>  
        
                <button id="btnAgregar" type="submit">Agregar Tarea</button>  
            </section>
        </form>
        <section class="container">
            
            <div class="board">
            
                <div class="column" id="pendiente" >
                    <h2>Pendientes</h2>
                </div>

                <div class="column" id="proceso" >
                    <h2>En proceso</h2>
                </div>

                <div class="column" id="finalizado">
                    <h2>Finalizado</h2>
                </div>
        
            </div>
        
  
        </section>
        
    </main>

    <footer id="piepagina">
        <p>
           
        
        </p>
    </footer>
<script src="assets/js/script.js"></script>
</body>
</html>
```
## Sintaxis de md 
---
#### **P:** *sintaxis de md*
---
```md

# Título 1
## Título 2
### Título 3
#### Título 4
##### Título 5
###### Título 6
Texto normal

**negrita**
*cursiva*
~~tachado~~
- Item 1
- Item 2
  - Sub item
```
> **Notas:** Existen diferencias respecto a las request, algunos datos fueron modificados o son usados como referencia.

