
/* CODIGO SANTIAGO: IMPLEMENTACION DE LOS MODULOS DE RECUPERACION DE CONTRASEÑA */
/* funcion click link: abrir modulo 1 */
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("abrirRecuperar").addEventListener("click", function(){
        abrirModal("modal1");
    });
});

function abrirModal(id){
    document.getElementById(id).style.display = "flex";
}

function cerrarModal(id){
    document.getElementById(id).style.display = "none";
}
