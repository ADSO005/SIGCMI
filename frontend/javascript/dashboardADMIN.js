/*Selecting 'a of nav' turns the background blue */

const items = document.querySelectorAll(".nav-link");

items.forEach(item => {
  item.addEventListener("click", () => {

    // remove activate all
    items.forEach(i => i.classList.remove("preActive"));

    // put active the one you clicked
    item.classList.add("preActive");

  });
});

const btn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
let main = document.querySelector(".main");

btn.onclick = () => {
  sidebar.classList.toggle("collapsed");

  btn.style.marginLeft =
    sidebar.classList.contains("collapsed") ? "9px" : "5%";
  main.classList.toggle("collapsed");
};

//====================MODAL CLICK TO MANAGE====================

// Elements
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Function Open
function openModal() {
  modal.style.display = "flex";
}

// Function Close
closeModal.onclick = () => {
  modal.style.display = "none";
};

// Close if clicked outside the modal
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};


document.querySelectorAll(".open-modal").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

const botonesCancelar = document.querySelectorAll(".btnCancel");

botonesCancelar.forEach(btn => {
  btn.addEventListener("click", () => {

    const confirmacion = confirm("¿Seguro que deseas cancelar la cita?");

    if (confirmacion) {
      alert("Cita cancelada correctamente");


      document.getElementById("modal").style.display = "none";
    }

  });
});

document.addEventListener("click", (e) => {

  if (!e.target.classList.contains("btnEstado")) return;

  const fila = e.target.closest("tr");
  const estado = fila.querySelector(".status");
  const botones = fila.querySelectorAll(".btnEstado");

  // ================= CANCEL =================
  if (e.target.classList.contains("cancelTableContainer")) {

    const confirmacion = confirm("¿Seguro que deseas cancelar la cita?");
    if (!confirmacion) return;

    estado.textContent = "Cancelado";
    estado.className = "status cancelado";

    // hide ALL buttons
    botones.forEach(btn => btn.style.display = "none");
  }

  // ================= COMPLETAR =================
  if (e.target.classList.contains("completeTableContainer")) {

    estado.textContent = "Completado";
    estado.className = "status completado";

    // hide buttons (recommended)
    botones.forEach(btn => btn.style.display = "none");
  }

  // ================= IN PROGRESS=================
  if (e.target.classList.contains("editTableContainer")) {

    estado.textContent = "En curso";
    estado.className = "status encurso";

    //hide all
    botones.forEach(btn => btn.style.display = "none");

    // ONLY show complete
    const btnCompletar = fila.querySelector(".completeTableContainer");
    if (btnCompletar) btnCompletar.style.display = "inline-block";
  }

});
//====================MODAL CLICK REPRO====================

// Modal New
const modalRepro = document.getElementById("modalRepro");

// Buttons close
const closeRepro = document.getElementById("closeRepro");
const cancelRepro = document.getElementById("cancelRepro");

// Open modal repro
function openRepro() {
  modal.style.display = "none";
  modalRepro.style.display = "flex";
}

// Close modal repro
closeRepro.onclick = () => {
  modalRepro.style.display = "none";
};

cancelRepro.onclick = () => {
  modalRepro.style.display = "none";
};


//==================BUTTON SAVE CHANGES AND VERIFICATION INPUTS===================
function saveChanges() {
  const mesaggeSaveChanges = document.getElementById("mesaggeSaveChanges");

  const dateRepro = document.getElementById("dateRepro").value;
  const timeRepro = document.getElementById("timeRepro").value;
  const errorMessageRepro = document.getElementById("errorMessageRepro");

  // VALIDATION
  if (dateRepro === "" || timeRepro === "") {
    errorMessageRepro.style.display = "block";
    errorMessageRepro.textContent = "⚠️ Debes llenar todos los campos obligatorios";

    // hide after 3s
    setTimeout(() => {
      errorMessageRepro.style.display = "none";
    }, 3000);

    return;
  }

  // HIDE ERROR
  errorMessageRepro.style.display = "none";

  // show message
  mesaggeSaveChanges.classList.add("show");

  setTimeout(() => {
    mesaggeSaveChanges.classList.remove("show");
  }, 3000);

  // close modal
  document.getElementById("modalRepro").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {

  // ==================== MODAL ====================
  // OPEN MODAL (for ALL buttons)
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.openModal;
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.style.display = "flex";
      }
    });
  });

  // CLOSE MODAL (for ALL buttons)
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.closeModal;
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.style.display = "none";
      }
    });
  });

  //CLOSE ON CLICK OUTSIDE (for ALL modals)
  window.addEventListener("click", (e) => {
    document.querySelectorAll(".modal").forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });



  // ==================== FORM NEW APPIOINMETS====================
  const form = document.getElementById("formCita");
  const message = document.getElementById("messageModalSheduleA");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const pacient = document.getElementById("pacienteModalSheduleA").value;
    const doctor = document.getElementById("medicoModalSheduleA").value;
    const date = document.getElementById("dateModalSheduleA").value;
    const time = document.getElementById("timeModalSheduleA").value;
    const reason = document.getElementById("reasonModalSheduleA").value;

    if (!pacient || !doctor || !date || !time || !reason) {
      mostrarMensaje("⚠️ Debes llenar todos los campos obligatorios", "errorModalSheduleA");
    } else {
      mostrarMensaje("Cita agendada con éxito.", "successModalSheduleA");

      modalSheduleA.style.display = "none";
      form.reset();
    }
  });

  function mostrarMensaje(texto, tipo) {
    message.textContent = texto;
    message.className = "messageModalSheduleA show " + tipo;

    setTimeout(() => {
      message.classList.remove("show");
    }, 3000);
  }

});

const links = document.querySelectorAll(".nav-link");
const views = document.querySelectorAll(".view");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active from all
    links.forEach(l => l.classList.remove("active"));

    // Activate clicking
    link.classList.add("active");

    // Change view
    const viewId = link.dataset.view;

    views.forEach(v => v.classList.remove("active"));
    document.getElementById(viewId).classList.add("active");
  });
});


// ==================== ELEMENTS ====================
const historyModal = document.getElementById("patientHistoryModal");
const closeHistoryModal = document.getElementById("closePatientHistoryModal");


// ==================== OPEN MODAL FUNCTION ====================
function openPatientHistory() {
  historyModal.style.display = "flex";
}


// ==================== CLOSE MODAL ====================
closeHistoryModal.addEventListener("click", () => {
  historyModal.style.display = "none";
});


// ==================== CLOSE WHEN CLICK OUTSIDE ====================
window.addEventListener("click", (e) => {
  if (e.target === historyModal) {
    historyModal.style.display = "none";
  }
});

const btnNewPatient = document.getElementById("btnNewPatient");
const patientCard = document.getElementById("patientCard");

btnNewPatient.addEventListener("click", () => {

  if (patientCard.style.display === "block") {
    patientCard.style.display = "none";
  } else {
    patientCard.style.display = "block";
  }

});

const colombia = {
  "Amazonas": ["Leticia", "Puerto Nariño"],
  "Antioquia": ["Medellín", "Bello", "Itagüí", "Envigado", "Rionegro"],
  "Arauca": ["Arauca", "Saravena"],
  "Atlántico": ["Barranquilla", "Soledad", "Malambo"],
  "Bolívar": ["Cartagena", "Magangué", "Turbaco"],
  "Boyacá": ["Tunja", "Duitama", "Sogamoso"],
  "Caldas": ["Manizales", "Villamaría"],
  "Caquetá": ["Florencia"],
  "Casanare": ["Yopal"],
  "Cauca": ["Popayán", "Santander de Quilichao"],
  "Cesar": ["Valledupar", "Aguachica"],
  "Chocó": ["Quibdó"],
  "Córdoba": ["Montería", "Lorica"],
  "Cundinamarca": ["Bogotá", "Soacha", "Chía", "Zipaquirá", "Facatativá"],
  "Guainía": ["Inírida"],
  "Guaviare": ["San José del Guaviare"],
  "Huila": ["Neiva", "Pitalito"],
  "La Guajira": ["Riohacha", "Maicao"],
  "Magdalena": ["Santa Marta", "Ciénaga"],
  "Meta": ["Villavicencio", "Acacías"],
  "Nariño": ["Pasto", "Tumaco", "Ipiales"],
  "Norte de Santander": ["Cúcuta", "Ocaña"],
  "Putumayo": ["Mocoa", "Puerto Asís"],
  "Quindío": ["Armenia", "Calarcá"],
  "Risaralda": ["Pereira", "Dosquebradas"],
  "San Andrés y Providencia": ["San Andrés"],
  "Santander": ["Bucaramanga", "Floridablanca", "Girón"],
  "Sucre": ["Sincelejo"],
  "Tolima": ["Ibagué", "Espinal"],
  "Valle del Cauca": ["Cali", "Palmira", "Buenaventura", "Tuluá"],
  "Vaupés": ["Mitú"],
  "Vichada": ["Puerto Carreño"]
};

const depto = document.getElementById("departamento");
const ciudad = document.getElementById("ciudad");

// cargar departamentos
Object.keys(colombia).forEach(d => {
  depto.innerHTML += `<option value="${d}">${d}</option>`;
});

// cambiar ciudades
depto.addEventListener("change", () => {
  ciudad.innerHTML = `<option>Seleccionar</option>`;

  colombia[depto.value].forEach(c => {
    ciudad.innerHTML += `<option value="${c}">${c}</option>`;
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const formulary = document.getElementById("formPaciente");
  const btnGuardarPacient = document.getElementById("btnGuardar");
  const mensaje = document.getElementById("mensajeGlobal");
  const card = document.getElementById("patientCard");
  const btnCancelar = document.getElementById("btnCancelar");

  const campos = formulary.querySelectorAll("input[required], select[required]");

  // ACTIVAR BOTÓN
  function validar() {
    let lleno = true;

    campos.forEach(campo => {
      if (campo.value.trim() === "") {
        lleno = false;
      }
    });

    btnGuardarPacient.disabled = !lleno;
  }

  campos.forEach(campo => {
    campo.addEventListener("input", validar);
    campo.addEventListener("change", validar);
  });

  // GUARDAR
  formulary.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formulary.checkValidity()) {
      mensaje.textContent = "⚠️ Completa todos los campos";
      mensaje.style.background = "red";
      mensaje.classList.add("show");

      setTimeout(() => mensaje.classList.remove("show"), 3000);
      return;
    }

    // ÉXITO
    mensaje.textContent = "Guardado con éxito";
    mensaje.style.background = "#25D366";
    mensaje.classList.add("show");

    formulary.reset();
    btnGuardar.disabled = true;

    setTimeout(() => {
      mensaje.classList.remove("show");
      card.style.display = "none";
    }, 2000);
  });

  // CANCELAR
  btnCancelar.addEventListener("click", () => {
    card.style.display = "none";
  });

});

const btnGuardar = document.getElementById("btnGuardarMedico");
const contenedor = document.getElementById("contenedorMedicos");

btnGuardar.addEventListener("click", (e) => {
  e.preventDefault();

  // Obtener valores
  const nombre = document.getElementById("nombre").value;
  const especialidad = document.getElementById("especialidad").value;
  const cedula = document.getElementById("cedula").value;
  const experiencia = document.getElementById("experiencia").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const horario = document.getElementById("horario").value;

  // Validación
  if (!nombre || !especialidad || !cedula || !experiencia || !telefono || !correo || !horario) {
    alert("⚠️ Llena todos los campos");
    return;
  }

  // Crear tarjeta
  const card = document.createElement("div");
  card.classList.add("card-medico");

  card.innerHTML = `
    <h3>${nombre}</h3>
    <p><strong>Especialidad:</strong> ${especialidad}</p>
    <p><strong>Cédula:</strong> ${cedula}</p>
    <p><strong>Experiencia:</strong> ${experiencia} años</p>
    <p><strong>Teléfono:</strong> ${telefono}</p>
    <p><strong>Correo:</strong> ${correo}</p>
    <p><strong>Horario:</strong> ${horario}</p>
  `;

  // Agregar al contenedor
  contenedor.appendChild(card);

  // Limpiar formulario
  document.querySelector("form").reset();
});

document.addEventListener("click", (e) => {

  if (e.target.id === "btnMedicsAction") {

    const form = document.querySelector(".medicsFormADMIN");

    if (form) {
      form.classList.toggle("hiddenMedics");
    }

  }

});