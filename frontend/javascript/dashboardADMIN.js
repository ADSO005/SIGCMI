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