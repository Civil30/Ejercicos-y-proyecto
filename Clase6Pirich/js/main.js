const vecinos = [];
const pisos = [1, 2, 3, 4, 5, 6];
const letras = ["A", "B", "C", "D"];



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


class vecino {
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



for (let i = 0; i < pisos.length; i += 1) {
    const option = document.createElement("OPTION");
    option.textContent = pisos[i]
    html.inputPisoN.appendChild(option)
    // html.inputPisoN.innerHTML += `<option>${pisos[i]}</option>`    
}
for (let i = 0; i < letras.length; i += 1) {
    // const option = document.createElement("OPTION");
    // option.textContent = letras[i]
    // html.inputPisoL.appendChild(option)
    html.inputPisoL.innerHTML += `<option>${letras[i]}</option>`    
}



html.btnCrear.addEventListener("click", crear);
html.btnMostrar.addEventListener("click", mostrarInquilinos);



function vecinosAdd(id, pisoN, pisoL, nombre, apellido, pago, fecha) {
    vecinos.push(new vecino (id, pisoN, pisoL, nombre, apellido, pago, fecha));
};

vecinosAdd(1, 1, "A", "Marta", "Juarez", true, "01/08/2020");
vecinosAdd(2, 1, "B", "Joaquin", "Gomez", true, "22/05/2021");
vecinosAdd(3, 2, "A", "JORGE", "RAMOS", false, "08/12/2020");
vecinosAdd(4, 2, "B", "oscar", "diaz", true, "01/02/2019");
vecinosAdd(5, 3, "B", "Carla", "Pirinch", false, "07/10/2021");

function crear (evt) {
    evt.preventDefault();    
    const id = vecinos.length + 1;
    const nombre = html.inputNombre.value;
    const apellido = html.inputApellido.value;
    const pisoN = html.inputPisoN.value;
    const pisoL = html.inputPisoL.value;
    const pago = html.inputPago.checked;
    const fecha = html.inputFecha.value;

    vecinosAdd(id, pisoN, pisoL, nombre, apellido, pago, fecha)

    console.log(vecinos);
}

function mostrarInquilinos() {
    
    vecinos.forEach(persona => {
        const div = document.createElement("DIV");
        div.classList.add("card")
        div.innerHTML = `Nombre: ${persona.nombre} ${persona.apellido},  Piso: ${persona.pisoN + persona.pisoL}`
        html.inquilinos.appendChild(div)
    })

}







