// Simulación de actividades iniciales


// Simulación de login (admin = true / false)
let esAdmin = localStorage.getItem("admin") === "true";

// Renderizar actividades
function renderActividades() {
  const contenedor = document.getElementById("lista-actividades");
  contenedor.innerHTML = "";

  actividades.forEach((act) => {
    const card = document.createElement("div");
    card.classList.add("actividad-card");
    card.innerHTML = `
      <i class="ri-file-pdf-2-line pdf-icon"></i>
      <h3>${act.titulo}</h3>
      <div class="acciones">
        <a href="${act.archivo}" target="_blank" class="btn ver">Ver</a>
        <a href="${act.archivo}" download class="btn descargar">Descargar</a>
        ${esAdmin ? `
          <button class="btn admin" onclick="eliminarActividad(${act.id})">Eliminar</button>
          <button class="btn editar" onclick="editarActividad(${act.id})">Editar</button>
        ` : ""}
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Agregar nueva actividad
function agregarActividad() {
  const titulo = document.getElementById("titulo").value;
  const archivo = document.getElementById("archivo").value;

  if (titulo && archivo) {
    const nueva = { id: Date.now(), titulo, archivo };
    actividades.push(nueva);
    renderActividades();
    document.getElementById("titulo").value = "";
    document.getElementById("archivo").value = "";
  } else {
    alert("Por favor, completa todos los campos.");
  }
}

// Eliminar actividad
function eliminarActividad(id) {
  actividades = actividades.filter((a) => a.id !== id);
  renderActividades();
}

// Editar actividad (simulación simple con prompt)
let actividadEditando = null;

function editarActividad(id) {
  const act = actividades.find((a) => a.id === id);
  actividadEditando = id;

  // Llenar los inputs del modal
  document.getElementById("editar-titulo").value = act.titulo;
  document.getElementById("editar-archivo").value = act.archivo;

  // Mostrar modal
  document.getElementById("modal-editar").classList.remove("hidden");
}

function cerrarModal() {
  document.getElementById("modal-editar").classList.add("hidden");
  actividadEditando = null;
}

function guardarEdicion() {
  if (actividadEditando !== null) {
    const act = actividades.find((a) => a.id === actividadEditando);
    act.titulo = document.getElementById("editar-titulo").value;
    act.archivo = document.getElementById("editar-archivo").value;

    renderActividades();
    cerrarModal();
  }
}
// Mostrar formulario solo si es admin
window.onload = () => {
  if (esAdmin) {
    document.getElementById("admin-form").classList.remove("hidden");
  }
  renderActividades();
};
