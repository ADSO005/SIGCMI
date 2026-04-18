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

const btnCancel = document.getElementById("btnCancel");

btnCancel.addEventListener("click", () => {

  const confirmacion = confirm("¿Seguro que deseas cancelar la cita?");

  if (confirmacion) {
    alert("Cita cancelada correctamente");

    // Aquí puedes hacer más cosas:
    // 1. Cambiar estado en la tabla
    // 2. Guardar en base de datos
    // 3. Actualizar UI

    modal.style.display = "none"; // cerrar modal
  }

});
//====================MODAL CLICK REPRO====================

// Modal New
const modalRepro = document.getElementById("modalRepro");

// Buttons clos
const closeRepro = document.getElementById("closeRepro");
const cancelRepro = document.getElementById("cancelRepro");

// Open modal repro
function openRepro() {
  modal.style.display = "none"; // cerrar el primero
  modalRepro.style.display = "flex"; // abrir el nuevo
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
  const modalSheduleA = document.getElementById("modalSheduleA");
  const btnOpen = document.getElementById("openModalSheduleA");
  const btnClose = document.getElementById("closeModalSheduleA");
  const btnCancel = document.getElementById("cancelModalSheduleA");

  // Opne modal
  if (btnOpen) {
    btnOpen.addEventListener("click", () => {
      modalSheduleA.style.display = "flex";
    });
  }

  // Close con X
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      modalSheduleA.style.display = "none";
    });
  }

  // Close with cancelar
  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      modalSheduleA.style.display = "none";
    });
  }

  // Close by clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modalSheduleA) {
      modalSheduleA.style.display = "none";
    }
  });


  // ==================== FORM ====================
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

      modal.style.display = "none";
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

    // 🔹 Quitar active a todos
    links.forEach(l => l.classList.remove("active"));

    // 🔹 Activar el clickeado
    link.classList.add("active");

    // 🔹 Cambiar vista
    const viewId = link.dataset.view;

    views.forEach(v => v.classList.remove("active"));
    document.getElementById(viewId).classList.add("active");
  });
});