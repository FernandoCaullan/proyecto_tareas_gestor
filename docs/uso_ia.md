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