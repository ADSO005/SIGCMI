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
function abrirModal() {
  modal.style.display = "flex";
}

// Function Close
closeModal.onclick = () => {
  modal.style.display = "none";
};