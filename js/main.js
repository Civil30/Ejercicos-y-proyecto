const pisos = [1, 2, 3, 4, 5];
const letras = ["A", "B", "C", "D", "E"];
let vecinos = JSON.parse(localStorage.getItem("data"));

if (!vecinos) {
    vecinos = [] 
};
 

//Menú de navegación
menu = $("#menu")
btnHome = $("#btn-home")
btnForm = $("#btn-form")
btnHotel = $("#btn-hotel")
formularioDisplay = $(".formularioDisplay")
hotelDisplay = $(".hotel")
//Formulario de Registro
formulario = $("#formulario")
inputNombre = $("#nombre")
inputApellido = $("#apellido")
inputPisoN = $("#pisoN")
inputPisoL = $("#pisoL")
inputPago = $("#pago")
inputFecha = $("#fecha")
inputDias=  $("#dias")
inputFechaFin = $("#fechaFin")
btnRegistro = $("#btnRegistro")
btnMostrar = $("#mostrar")
inquilinos = $(".inquilinos")


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
    inputPisoN.append(`<option>${piso}</option>`)
};
for (const letra of letras) {
    inputPisoL.append(`<option>${letra}</option>`)    
};

btnRegistro.click(crear);
// html.btnMostrar.addEventListener("click", mostrarInquilinos);
// html.inputDias.addEventListener("change", vencimiento);
btnForm.click(() => cargarElemento(hotelDisplay, formularioDisplay));
btnHotel.click(() => cargarElemento(formularioDisplay, hotelDisplay));



function crear (evt) {
    // evt.preventDefault();    
    const id = vecinos.length + 1;
    const nombre = inputNombre.val();
    const apellido = inputApellido.val();
    const pisoN = inputPisoN.val();
    const pisoL = inputPisoL.val();
    const pago = inputPago.prop("checked");
    const fecha = inputFecha.val();

    vecinosAdd = new Vecino(id, pisoN, pisoL, nombre, apellido, pago, fecha);
    vecinos.push(vecinosAdd)

    localStorage.setItem("data", JSON.stringify(vecinos));
};

// function mostrarInquilinos() {   Va a ir en panel de control, no está pasado a jQuery
    
//     html.inquilinos.innerHTML=" ";

//     vecinos.forEach( persona => {
//         const div = document.createElement("DIV");
//         div.classList.add("card");
//         div.innerHTML = `<p> Nombre: ${persona.nombre} ${persona.apellido},  Piso: ${persona.pisoN + persona.pisoL} <p>`;
//         html.inquilinos.appendChild(div)
//     })
       
// };

function vencimiento(e) {
    //probando de calcular sobre fechas
}

function cargarElemento (ele1, ele2) {
    ele1.css("display", "none")
    ele2.css("display", "block");
}

