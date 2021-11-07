let entrada = prompt("consultar por Marta, Joaquin, Jorge, Oscar O Carla").toLowerCase();

class vecino {
    constructor (id, piso, nombre, pago, fecha){
        this.id = id;
        this.piso = piso;
        this.nombre = nombre;
        this.pago = pago;
        this.fecha = fecha;
    }
}

const vecinos = [];

function vecinosAdd(id, piso, nombre, pago, fecha) {
    vecinos.push(new vecino (id, piso, nombre, pago, fecha));
}     

vecinosAdd(1, "1 A", "Marta", true, "01/08/2020");
vecinosAdd(2, "1 B", "Joaquin", true, "22/05/2021");
vecinosAdd(3, "2 A", "JORGE", false, "08/12/2020");
vecinosAdd(4, "2 B", "oscar", true, "01/02/2019");
vecinosAdd(5, "3 B", "Carla", false, "07/10/2021");

// console.table(vecinos);  
// console.log(vecinos);



const deudores = vecinos.filter(nombre => nombre.pago === false);

console.log(deudores);


vecinos.sort ((a,b) => {
    
    let nombreA = a.nombre.toLowerCase();
    let nombreB = b.nombre.toLowerCase();
    
    if (nombreA < nombreB){
        return -1;
    }
    
    if (nombreA > nombreB){
        return 1;
    }
    return 0;
});

console.table(vecinos);


vecinos.forEach(vecinos  => {
    if (entrada == vecinos.nombre.toLowerCase()){
        for (const prop in vecinos) {
            document.write(`<p id="datos"> ${prop} = ${vecinos [prop] } </p>`);
        }
        
        console.table(vecinos);
    }
});








