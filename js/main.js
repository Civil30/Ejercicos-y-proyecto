const inputBuscar = $("#input__buscar");
const btnBuscar = $("#btn__buscar")
const harryUrl = "http://hp-api.herokuapp.com/api/characters"

const harryDatos = () => {
    $.get(harryUrl, (datos, estado)  => {
        if(estado === "success") {
            mostrarCarta (datos)
        }

    })
}

function mostrarCarta (datos) {
    
    const inputMin = inputBuscar.val().toLowerCase()
    $(".personajes").empty()

    datos.forEach(ele => {        
        const {name, species, gender, house, dateOfBirth, image, actor} = ele;

        if ((name.toLowerCase().includes(inputMin))) {
            
            $(".personajes").prepend(`<div class="card">
                                        <h2>${name}</h2>
                                        <img src=${image} alt="imagen">
                                        <ul>
                                            <li>Species:  ${species}</li>
                                            <li>Gender:  ${gender}</li>
                                            <li>House:	${house}</li>
                                            <li>DateOfBirth:  ${dateOfBirth}</li>
                                            <li>Actor:  ${actor}</li>
                                        </ul>
                                    </div>`)
            console.log(ele)

        }
        
    })
}

inputBuscar.on("input", () => {
    
    inputBuscar.val()
}

)

btnBuscar.click(harryDatos)



