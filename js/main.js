const costoPorDia = 20;
const costoPorDiaAlta = 35;
const pisos = [1, 2, 3, 4, 5];
const letras = ["A", "B", "C", "D", "E"];
let vecinos = JSON.parse(localStorage.getItem("data"));
if(!vecinos) {
    vecinos = []
}

const html = {
    //Menú de navegación
    // menu : document.querySelector("#menu"),
    menu : document.querySelectorAll(".btn-menu"),
    btnControl: document.querySelector("#btn-control"),
    btnForm : document.querySelector("#btn-form"),
    btnHotel : document.querySelector("#btn-hotel"),
    formularioDisplay : document.querySelector("#formulario-display"),
    cardDisplay: document.querySelector("#card-display"),
    hotelDisplay : document.querySelector("#hotel-display"),
    //Formulario de Registro
    formulario : document.querySelector("#formulario"),
    inputNombre : document.querySelector("#nombre"),
    inputApellido : document.querySelector("#apellido"),
    inputPisoN : document.querySelector("#pisoN"),
    inputPisoL : document.querySelector("#pisoL"),
    inputTelefono: document.querySelector("#telefono"),
    inputFecha : document.querySelector("#fecha"),
    inputDias:  document.querySelector("#dias"),
    inputFechaFin : document.querySelector("#fecha-fin"),
    inputTemporada: document.querySelector("#temporada-checkbox"),
    inputCosto: document.querySelector("#input-costo"),
    inputPago : document.querySelector("#pago-checkbox"),
    btnRegistro : document.querySelector("#btnRegistro"),
    
    btnVentanas :document.querySelector(".ventanas"),
    btnVentana :document.querySelectorAll(".ventana"),
    btnMostrar : document.querySelector("#mostrar"),
    inquilinos : document.querySelector(".contenedor-card"),
    hotelModal: document.querySelector(".hotel-modal")
};




class Vecino {
    constructor (id, nombre, apellido, pisoN, pisoL, telefono, fecha, fechaDeVencimiento, temporadaAlta, costo, pago){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pisoN = pisoN;
        this.pisoL = pisoL;
        this.telefono = telefono;
        this.fecha = fecha;
        this.fechaDeVencimiento = fechaDeVencimiento;
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

//Eventos
html.formulario.addEventListener("submit", crear);
html.btnMostrar.addEventListener("click", mostrarInquilinos);
html.btnVentanas.addEventListener("click", hotelModal)
html.inputDias.addEventListener("input", fechaDeVencimiento);
html.inputTemporada.addEventListener("change", calcularPrecio)
html.btnForm.addEventListener("click", cargarFormulario)
html.btnHotel.addEventListener("click", cargarHotel)
html.btnControl.addEventListener("click", cargarControl)
html.inputPago.addEventListener("change", tomarPago)


//Funciones
function crear (evt) {
    // evt.preventDefault();    
    const id = vecinos.length + 1;
    const nombre = html.inputNombre.value;
    const apellido = html.inputApellido.value;
    const pisoNumero = html.inputPisoN.value;
    const pisoLetra = html.inputPisoL.value;
    const telefono = html.inputTelefono.value;
    const fecha = html.inputFecha.value;
    const fechaDeVencimiento = html.inputFechaFin.value;
    const temporadaAlta = html.inputTemporada.checked;
    const costo = html.inputCosto.value;
    const pago = html.inputPago.checked;
    
    
    // vecinos.forEach( inquilinos => {
    //     const {pisoN, pisoL} = inquilinos;
    //     if (pisoN + pisoL == pisoNumero + pisoLetra){
    //         evt.preventDefault();    
    
    //     }
        
        
    // })
    
    vecinosAdd = new Vecino(id, nombre, apellido, pisoNumero, pisoLetra, telefono, fecha, fechaDeVencimiento, temporadaAlta, costo, pago);
    vecinos.push(vecinosAdd)
    
    localStorage.setItem("data", JSON.stringify(vecinos));
    
};

function mostrarInquilinos() {
    
    html.inquilinos.innerHTML=" ";

    vecinos.forEach( persona => {
        const { nombre, apellido, pisoN, pisoL, telefono, fecha, fechaDeVencimiento, costo, pago } = persona
        const div = document.createElement("DIV");
        div.classList.add("card");
        div.innerHTML = `<div class="card__imagen">
                            <img src="./img/63765.jpg" alt="perfil">
                        </div>
                        <div class="card__pago">
                            <p> ${pago}No Pago</p>
                        </div>
                        <div class="card__detalles">
                            <h3>${nombre} ${apellido}</h3>
                            <div class="card__detalles__grid">
                                <div class="card__items">
                                    <p>Ingreso</p> 
                                    <p>${fecha}</p>
                                </div>
                                <div class="card__items">
                                    <p>Egreso</p> 
                                    <p>${fechaDeVencimiento}</p>
                                </div>
                                <div class="card__items">
                                    <p>Teléfono</p> 
                                    <p>${telefono}</p>
                                </div>
                                <div class="card__items">
                                    <p>Costo</p> 
                                    <p>${costo}</p>
                                </div>
                            </div>    
                        </div>
                        <button>Eliminar</button>`
        html.inquilinos.appendChild(div)
    })
       
};

function calcularPrecio () {
    html.inputCosto.value = `$ ${costoPorDia * html.inputDias.value}`;
    if(html.inputTemporada.checked) {
        html.inputCosto.value = `$ ${costoPorDiaAlta * html.inputDias.value}`;
    };
}

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



function tomarPago () {
    html.inputCosto.style["background-color"] = "#e85252"
    if (html.inputPago.checked) {
        html.inputCosto.style["background-color"] = "#0a66c2";
    }
}

function cargarFormulario () {
    // document.body.style["background-color"] = "#BEAEE2";
    html.hotelDisplay.style.display = "none";
    html.cardDisplay.style.display = "none";
    html.formularioDisplay.style.display = "block";
}

function cargarHotel () {
    html.formularioDisplay.style.display = "none";
    html.cardDisplay.style.display = "none";
    html.hotelDisplay.style.display = "block";
}

function cargarControl () {
    // document.body.style["background-color"] = "white";
    html.formularioDisplay.style.display = "none";
    html.hotelDisplay.style.display = "none";
    html.cardDisplay.style.display = "block";
}


// function idVentanas(e) {
//     html.btnVentana.forEach(idVentana => {
//         idVentana.id
//         console.log(id)
//     })
// }


function hotelModal(evt) {

    vecinos.forEach( inquilino => {
        const { nombre, apellido, pisoN, pisoL, telefono, fecha, fechaDeVencimiento, costo, pago } = inquilino;
        const idVecino = pisoN + pisoL
        if ( evt.target.id == idVecino ) {
            
            Swal.fire({
                title: `${nombre} ${apellido}`,
                text: `Teléfono ${telefono}`,
                confirmButtonText: "Aceptar",
                // buttonsStyling: false,

                // customClass:{

                //     confirmButton: "form__btn"
                // }
                
                    
                  
                
            })
            
            // html.hotelModal.innerHTML = `<h2>${nombre} ${apellido}</h2>
            // <p>Piso ${pisoN+pisoL}</p>
            // <p>Teléfono ${telefono}</p>
            // <p>Ingreso ${fecha}</p>
            // <p>Egreso ${fechaDeVencimiento}</p>
            // <p>A pagar ${costo}</p>
            // <p>${pago}</p>`
        }
    })
}



