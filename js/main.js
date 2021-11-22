const titulo = document.querySelector("#titulo");

titulo.onmouseover = cambio;
titulo.onmouseout = volver;

function cambio() {
    titulo.textContent = "Bienvenid@ a la plataforma";
};
function volver(){
    titulo.textContent = "Curso JavaScript"
}

const pisos = [1, 2, 3, 4, 5];
const letras = ["A", "B", "C", "D", "E"];
let vecinos = JSON.parse(localStorage.getItem("data"));

if (!vecinos) {
    vecinos = [] 
};
 

const html = {
    id : document.querySelector("#formulario"),
    inputNombre : document.querySelector("#nombre"),
    inputApellido : document.querySelector("#apellido"),
    inputPisoN : document.querySelector("#pisoN"),
    inputPisoL : document.querySelector("#pisoL"),
    inputPago : document.querySelector("#pago"),
    inputFecha : document.querySelector("#fecha"),
    btnCrear : document.querySelector("#crear"),
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

html.btnCrear.addEventListener("click", crear);
html.btnMostrar.addEventListener("click", mostrarInquilinos);


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


