// TOGGLE SIDEBAR //
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const main    = document.getElementById("mainContent");
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle("open");
    document.getElementById("sidebarOverlay").classList.toggle("show");
  } else {
    sidebar.classList.toggle("collapsed");
    main.classList.toggle("collapsed");
    document.getElementById("toggleBtn").style.marginLeft =
      sidebar.classList.contains("collapsed") ? "4px" : "";
  }
}

function cerrarSidebarMovil() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebarOverlay").classList.remove("show");
}


// NAVEGACIÓN ENTRE VISTAS // 
function cambiarVista(e, viewId, link) {
  e.preventDefault();
  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("preActive"));
  link.classList.add("preActive");
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
  if (window.innerWidth <= 768) cerrarSidebarMovil();
}

// CERRAR SESIÓN //
function cerrarSesion() {
  if (confirm("¿Seguro que deseas cerrar sesión?")) {
    alert("Sesión cerrada. Redirigiendo al login...");
  }
}

// BOTON INICIAR CONSULTA // 
function iniciarConsulta(id) {
  const cita = document.getElementById(id);
  cita.classList.replace("estado-pendiente", "estado-encurso");
  cita.querySelector(".state").textContent = "En curso";
  cita.querySelector(".state").className = "state yellowState";
  cita.querySelector(".hour").classList.add("hour-encurso");
  const btn = cita.querySelector(".btn-iniciar");
  btn.textContent = "Finalizar Consulta";
  btn.className = "btn-consulta btn-finalizar";
  btn.setAttribute("onclick", `finalizarConsulta('${id}')`);
}

// BOTON FINALIZAR CONSULTA // 
function finalizarConsulta(id) {
  const cita = document.getElementById(id);
  cita.classList.replace("estado-encurso", "estado-completada");
  cita.querySelector(".state").textContent = "Completado";
  cita.querySelector(".state").className = "state greenState";
  cita.querySelector(".hour").classList.remove("hour-encurso");
  cita.querySelector(".btn-full-row").style.display = "none";
}
