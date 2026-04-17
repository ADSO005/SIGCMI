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

//====================MODAL CLICK REPROGRAMAR====================

// modal nuevo
const modalReprogramar = document.getElementById("modalRepro");

// botones cerrar
const closeReprogramar = document.getElementById("closeRepro");
const cancelReprogramar = document.getElementById("cancelRepro");

// abrir modal reprogramar
function abrirReprogramar() {
  modal.style.display = "none"; // cerrar el primero
  modalReprogramar.style.display = "flex"; // abrir el nuevo
}

// cerrar modal reprogramar
closeReprogramar.onclick = () => {
  modalReprogramar.style.display = "none";
};

cancelReprogramar.onclick = () => {
  modalReprogramar.style.display = "none";
};