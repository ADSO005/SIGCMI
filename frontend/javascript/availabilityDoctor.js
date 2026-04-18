const DIAS_SEMANA = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

let horario = [];

const contenedor      = document.getElementById('contenedorDias');
const botonAgregarDia = document.getElementById('botonAgregarDia');
const tplTarjeta      = document.getElementById('tpl-tarjeta');
const tplFranja       = document.getElementById('tpl-franja');

// ── Franja ───────
function crearFranja(franja, i, j) {
  const el = tplFranja.content.cloneNode(true).querySelector('.franja-horaria');

  el.querySelector('.entrada').value = franja.entrada;
  el.querySelector('.salida').value  = franja.salida;

  el.querySelector('.salida').onchange = e => {
  const entrada = el.querySelector('.entrada').value;
  const salida  = e.target.value;
  if (salida <= entrada) {
    alert('La hora de salida debe ser mayor que la de entrada');
    e.target.value = horario[i].franjas[j].salida;
    return;
  }
  horario[i].franjas[j].salida = salida;
};
  el.querySelector('.salida').onchange  = e => { horario[i].franjas[j].salida  = e.target.value; };

  el.querySelector('.boton-eliminar-franja').onclick = () => {
    horario[i].franjas.splice(j, 1);
    renderizar();
  };

  return el;
}

// ── Tarjeta ──────
function crearTarjeta(dia, i) {
  const tarjeta = tplTarjeta.content.cloneNode(true).querySelector('.tarjeta-dia');

  tarjeta.classList.toggle('inactivo', !dia.activo);
  tarjeta.querySelector('.nombre-dia').textContent = dia.dia;

  const toggle = tarjeta.querySelector('input[type="checkbox"]');
  toggle.checked = dia.activo;
  toggle.onchange = () => { horario[i].activo = toggle.checked; renderizar(); };

  tarjeta.querySelector('.boton-agregar-franja').onclick = () => {
    horario[i].franjas.push({ entrada: '09:00', salida: '17:00' });
    renderizar();
  };

  tarjeta.querySelector('.boton-eliminar-dia').onclick = () => {
    horario.splice(i, 1);
    renderizar();
  };

  const contenedorFranjas = tarjeta.querySelector('.contenedor-franjas');
  dia.franjas.forEach((franja, j) => {
    contenedorFranjas.appendChild(crearFranja(franja, i, j));
  });

  return tarjeta;
}

// ── Botón agregar día ───
function actualizarBotonAgregarDia() {
  const diasUsados = horario.map(d => d.dia);
  const siguiente  = DIAS_SEMANA.find(d => !diasUsados.includes(d));

  console.log('siguiente:', siguiente);        // ¿aparece 'Lunes'?
  console.log('boton hidden:', botonAgregarDia.hidden); // ¿es true o false?

  botonAgregarDia.hidden  = !siguiente;
  botonAgregarDia.onclick = () => {
    horario.push({ dia: siguiente, activo: true, franjas: [{ entrada: '09:00', salida: '17:00' }] });
    renderizar();
  };
}

// ── Renderizado principal ───
function renderizar() {
  contenedor.querySelectorAll('.tarjeta-dia').forEach(el => el.remove());
  horario.forEach((dia, i) => contenedor.insertBefore(crearTarjeta(dia, i), botonAgregarDia));
  actualizarBotonAgregarDia();
}

// ── Cerrar ────
document.getElementById('botonCerrar').onclick = () => {
  alert('Horario guardado:\n' + JSON.stringify(horario, null, 2));
};

renderizar();