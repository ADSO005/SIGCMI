const btn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

btn.onclick = () => {
  sidebar.classList.toggle("collapsed");

  btn.style.marginLeft =
    sidebar.classList.contains("collapsed") ? "10px" : "5%";

};