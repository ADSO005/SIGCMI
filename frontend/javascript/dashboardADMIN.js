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