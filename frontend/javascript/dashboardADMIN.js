const btn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
let main = document.querySelector(".main");

btn.onclick = () => {
  sidebar.classList.toggle("collapsed");

  btn.style.marginLeft =
    sidebar.classList.contains("collapsed") ? "9px" : "5%";
    main.classList.toggle("collapsed");
};