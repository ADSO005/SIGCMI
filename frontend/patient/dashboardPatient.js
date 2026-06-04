/* NO SCROLL */
function bloquearScroll(){
    document.body.classList.add("no-scroll");
}

function desbloquearScroll(){
    document.body.classList.remove("no-scroll");
}



/* MODAL DE WHATSAAP */
const btnWhatsapp = document.querySelector('.btn_verde');

if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', function() {
        const url = "https://wa.me/573105212658";
        window.open(url, 'blank');
    });
}



/* MODAL DE CANCELAR */
function cancelar_cita(){
    alert("¿Deseas cancelar esta cita?");
}



/* MODAL PERFIL */
const main = document.querySelector("main");
const perfil = document.getElementById("perfil");

function irPerfil(){
    main.classList.add("oculto");
    perfil.classList.remove("oculto");
    window.scrollTo(0, 0);
}

function volverInicio(){
    main.classList.remove("oculto");
    perfil.classList.add("oculto");
    window.scrollTo(0, 0);
}


/* MODAL EDITAR */
function abrirModal(){
    document.getElementById("modalConfirmar").style.display = "flex";
}

function cerrarModal(){
    document.getElementById("modalConfirmar").style.display = "none";
}

function confirmar(){
    alert("Identidad confirmada correctamente, cambios guardados");
}

function perfilContraseña(tituloElemento){
    let contenedor = tituloElemento.parentElement;
    contenedor.classList.toggle("activo");
    let contra = tituloElemento.querySelector(".cambiarContraseña");
    if (contenedor.classList.contains("activo")){
        contra.textContent = "▲";
    }else{
        contra.textContent = "▼";
    }
}



/* MODAL CAMBIAR CONTRASEÑA */
const botonContra = document.querySelector(".btn_contra");

botonContra.addEventListener("click", function() {
    const contenedorPrincipal = this.closest('.contenedor_contra');
    const inputs = contenedorPrincipal.querySelectorAll('input');
    
    const actual = inputs[0].value.trim();
    const nueva = inputs[1].value.trim();
    const confirmacion = inputs[2].value.trim();


    if (actual === "" || nueva === "" || confirmacion === "") {
        alert("⚠️ Por favor, completa todos los campos.");
        return;
    }

    const requisitos = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$@%]).{6,}$/;

    if (!requisitos.test(nueva)) {
        alert("❌ La contraseña no cumple con los requisitos:\n- Mínimo 6 caracteres.\n- Debe incluir letras, números y caracteres especiales (!$@%).");
        return;
    }

    if (nueva !== confirmacion) {
        alert("❌ La nueva contraseña y la confirmación no coinciden.");
        return;
    }

    alert("✅ Cambios guardados con éxito");

    inputs.forEach(input => input.value = ''); 
    contenedorPrincipal.classList.remove('activo');
    contenedorPrincipal.querySelector('.cambiarContraseña').textContent = "▼";
});



/* MODAL BOTONES DE CONFIRMACION */
function manejarConfirmacion(event) {
    
    event.preventDefault();

    const boton = event.target;
    
    const esFormCita = boton.closest('.form_cita');
    const esModalRepro = boton.closest('.modal_repro_box');
    const esModalNoti = boton.closest('.modal_contenido');

    let mensaje = "";

    if (esFormCita) {
        mensaje = "✅ ¡Cita solicitada con éxito! Revisa tu correo para la confirmación.";
        cerrarmodal(); 
    } 
    else if (esModalRepro) {
        mensaje = "🕒 Tu cita ha sido reprogramada correctamente.";
        cerrarRepro(); 
    } 
    else if (esModalNoti) {
        mensaje = "🔔 Preferencias de notificación actualizadas.";
        cerrarNoti(); 
    } 
    else {
        mensaje = "✅ Acción realizada con éxito.";
    }

    alert(mensaje);
}
document.querySelectorAll('.confirmar_2, .btn_reprogramar, .btn_guardar').forEach(boton => {
    boton.addEventListener('click', manejarConfirmacion);
});



/* MODAL DESPLEGABLE */
function abrirmodal(){
    document.getElementById("modal_oculto").classList.add("activo");
}

function cerrarmodal(){
    document.getElementById("modal_oculto").classList.remove("activo");
}



/* MODAL NOTIFICACIONES */
function abrirNoti(){
    document.getElementById("modalNoti").classList.add("activo");
    bloquearScroll();
}

function cerrarNoti(){
    document.getElementById("modalNoti").classList.remove("activo");
    desbloquearScroll();
}


/* MODAL REPROGRAMAR */
function abrirRepro(){
    document.getElementById("modalRepro").classList.add("activo");
    bloquearScroll();
}

function cerrarRepro(){
    document.getElementById("modalRepro").classList.remove("activo");
    desbloquearScroll();
}



/* MODAL DIAGNOSTICO */
function abrirDiag(){
    document.getElementById("modalDiag").classList.add("activo");
    bloquearScroll();
}

function cerrarDiag(){
    document.getElementById("modalDiag").classList.remove("activo");
    desbloquearScroll();
}

function toggleDiag(element){
    element.classList.toggle("activo");
    let flecha = element.querySelector(".flecha");

    if(element.classList.contains("activo")){
        flecha.textContent = "▲";
    } else {
        flecha.textContent = "▼";
    }
}

