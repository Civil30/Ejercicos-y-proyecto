const pisos = [1, 2, 3, 4, 5];
const letras = ["A", "B", "C", "D", "E"];
let vecinos = JSON.parse(localStorage.getItem("data"));

if (!vecinos) {
    vecinos = [] 
};
 

const html = {
    //Menú de navegación
    menu : document.querySelector("#menu"),
    btnHome : document.querySelector("#btn-home"),
    btnForm : document.querySelector("#btn-form"),
    btnHotel : document.querySelector("#btn-hotel"),
    formularioDisplay : document.querySelector(".formularioDisplay"),
    hotelDisplay : document.querySelector(".hotel"),
    //Formulario de Registro
    formulario : document.querySelector("#formulario"),
    inputNombre : document.querySelector("#nombre"),
    inputApellido : document.querySelector("#apellido"),
    inputPisoN : document.querySelector("#pisoN"),
    inputPisoL : document.querySelector("#pisoL"),
    inputPago : document.querySelector("#pago"),
    inputFecha : document.querySelector("#fecha"),
    inputDias:  document.querySelector("#dias"),
    inputFechaFin : document.querySelector("#fechaFin"),
    btnRegistro : document.querySelector("#btnRegistro"),
    btnMostrar : document.querySelector("#mostrar"),
    inquilinos : document.querySelector(".inquilinos")
};


class Vecino {
    constructor (id, pisoN, pisoL, nombre, apellido, pago, fecha){
        this.id = id;
        this.pisoN = pisoN;
        this.pisoL = pisoL;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pago = pago;
        this.fecha = fecha;
    }
};

for (const piso of pisos) {
    const option = document.createElement("OPTION");
    option.textContent = piso
    html.inputPisoN.appendChild(option)
};
for (const letra of letras) {
    html.inputPisoL.innerHTML += `<option>${letra}</option>`    
};

html.btnRegistro.addEventListener("click", crear);
// html.btnMostrar.addEventListener("click", mostrarInquilinos);
window.addEventListener("load", () => html.inputDias.addEventListener("change", vencimiento));
html.btnForm.addEventListener("click", cargarFormulario)
html.btnHotel.addEventListener("click", cargarHotel)



function crear (evt) {
    // evt.preventDefault();    
    const id = vecinos.length + 1;
    const nombre = html.inputNombre.value;
    const apellido = html.inputApellido.value;
    const pisoN = html.inputPisoN.value;
    const pisoL = html.inputPisoL.value;
    const pago = html.inputPago.checked;
    const fecha = html.inputFecha.value;

    vecinosAdd = new Vecino(id, pisoN, pisoL, nombre, apellido, pago, fecha);
    vecinos.push(vecinosAdd)

    localStorage.setItem("data", JSON.stringify(vecinos));
};

function mostrarInquilinos() {
    
    html.inquilinos.innerHTML=" ";

    vecinos.forEach( persona => {
        const div = document.createElement("DIV");
        div.classList.add("card");
        div.innerHTML = `<p> Nombre: ${persona.nombre} ${persona.apellido},  Piso: ${persona.pisoN + persona.pisoL} <p>`;
        html.inquilinos.appendChild(div)
    })
       
};

function vencimiento(e) {
    // console.log(e); 
    const obtenerFecha = html.inputFecha.value;
    let obtenerDias = 
    console.log(obtenerFecha);
    let aver = obtenerFecha + obtenerDias;
    // html.inputFechaFin.value = aver
    console.log(obtenerDias);
    console.log(aver);
}

function cargarFormulario (e) {
    
    html.hotelDisplay.style.display = "none";

    html.formularioDisplay.style.display = "block";
}

function cargarHotel (e) {

    html.formularioDisplay.style.display = "none";

    html.hotelDisplay.style.display = "block";
}
