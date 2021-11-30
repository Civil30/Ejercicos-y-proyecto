const costoPorDia = 20;
const costoPorDiaAlta = 35;
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
    inputTelefono: document.querySelector("#telefono"),
    inputFecha : document.querySelector("#fecha"),
    inputDias:  document.querySelector("#dias"),
    inputFechaFin : document.querySelector("#fechaFin"),
    inputTemporada: document.querySelector("#temporada-checkbox"),
    inputCosto: document.querySelector("#input-costo"),
    inputPago : document.querySelector("#pago-checkbox"),
    btnRegistro : document.querySelector("#btnRegistro"),
    
    btnMostrar : document.querySelector("#mostrar"),
    inquilinos : document.querySelector(".inquilinos")
};


class Vecino {
    constructor (id, nombre, apellido, pisoN, pisoL, telefono, fecha, fechaDefechaDeVencimiento, temporadaAlta, costo, pago){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pisoN = pisoN;
        this.pisoL = pisoL;
        this.telefono = telefono;
        this.fecha = fecha;
        this.fechaDefechaDeVencimiento = fechaDefechaDeVencimiento;
        this.temporadaAlta = temporadaAlta;
        this.costo = costo;
        this.pago = pago;
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
html.inputDias.addEventListener("input", fechaDeVencimiento);
html.btnForm.addEventListener("click", cargarFormulario)
html.btnHotel.addEventListener("click", cargarHotel)



function crear (evt) {
    // evt.preventDefault();    
    const id = vecinos.length + 1;
    const nombre = html.inputNombre.value;
    const apellido = html.inputApellido.value;
    const pisoN = html.inputPisoN.value;
    const pisoL = html.inputPisoL.value;
    const telefono = html.inputTelefono.value;
    const fecha = html.inputFecha.value;
    const fechaDeVencimiento = html.inputFechaFin.value;
    const temporadaAlta = html.inputTemporada.checked;
    const costo = html.inputCosto.value;
    const pago = html.inputPago.checked;

    vecinosAdd = new Vecino(id, nombre, apellido, pisoN, pisoL, telefono, fecha, fechaDeVencimiento, temporadaAlta, costo, pago);
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


function fechaDeVencimiento() {
    const obtenerDias = Number(html.inputDias.value);
    const obtenerFecha = new Date(html.inputFecha.value);
    obtenerFecha.setDate(obtenerFecha.getDate() + obtenerDias + 1);

    const separarFecha = {
       año: obtenerFecha.getFullYear(),
       mes: (obtenerFecha.getMonth() + 1).toString().padStart(2, 0),
       dia: obtenerFecha.getDate().toString().padStart(2, 0)
    }
    
    html.inputFechaFin.value = `${separarFecha.año}-${separarFecha.mes}-${separarFecha.dia}`;

    calcularPrecio()
}

function calcularPrecio () {
    html.inputTemporada.checked
        ? html.inputCosto.value = `$ ${costoPorDiaAlta * html.inputDias.value}`
        : html.inputCosto.value = `$ ${costoPorDia * html.inputDias.value}`
    ;
    html.inputTemporada.addEventListener("change", calcularPrecio)
}


function cargarFormulario () {
    html.hotelDisplay.style.display = "none";
    html.formularioDisplay.style.display = "block";
}

function cargarHotel () {
    html.formularioDisplay.style.display = "none";
    html.hotelDisplay.style.display = "block";
}