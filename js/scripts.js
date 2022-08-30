import data from './nft.json' assert {type: 'json'};


//trabajo y guardado de variables "localstorage"

localStorage.setItem("NFT", JSON.stringify(data));

let NFTstring = localStorage.getItem("NFT")

let NFT = JSON.parse(NFTstring)

let Total = 0

// Crear objetos

function NFTs (id, nombre, precio, img, habilitado ){

this.id = id;
this.nombre = nombre;
this.precio = precio;
this.img = img;
this.habilitado = habilitado;

//this.presentar = function() { console.log(" item -- "+this.nombre)}

this.boton = function() { 
    
    if (habilitado === "ON"){

    console.log(" item -- " + nombre)
    habilitado = "FALSE";
    cuenta(precio)
    agregarprecios(precio, nombre)

    } else {

        console.log(" item -- " + nombre + " fue vendido" )
        Toastify({
            text: "Item --"+ nombre + " fue vendido" ,
            className: "info",
            style: {
              background: "linear-gradient(to right, #bbc255, #393b19)",
            }
          }).showToast();

    }
    
}


}

let itemsNFT = [] //array con elementos

for (const items of NFT){

    itemsNFT.push(new NFTs (items.id, items.nombre, items.precio, items.img, items.habilitado));
}    


/// presentar plantillas


for (const items of itemsNFT){

    let card = document.createElement("div");
    
    card.innerHTML =
    
        `<div class="card"  style="width: 12rem;" >
        <img src="${items.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">${items.nombre}   -   ${items.precio} ₿(MTR)</p>
          <a href="#" class="btn btn-secondary" type="button" value="myButton"  id="${items.nombre}">ADD TO CART</a>
        </div>
        </div>`
    
        document.getElementById("content_cards").appendChild(card);  
        document.getElementById(items.nombre).onclick = items.boton;
   
    
}


function cuenta(precio){
        let valor = precio
        Total = Total + precio 
        console.log( "el Total es  --- " + Total )
        cambiartotal(Total)
    
}

function agregarprecios(precio, nombre){

    let content = document.createElement("div");
    
    content.innerHTML =
    
        `<div class="lista"  style="width: 12rem;" >
        </div>
        <p class="color : white ">item agregardo -- ${nombre}   -  ${precio} ₿(MTR)</p>
        </div>`;

    document.getElementById("content_precios").appendChild(content);  
        
    
}

function cambiartotal(Total){

    let total = document.getElementById("content_total");
    
    total.innerHTML =
    
        `<div class="total"  style="width: 12rem;" >
    
        <p class="color : white ">TOTAL A PAGAR  = ${Total} ₿(MTR)</p>

        <a href="#" class="btn btn-secondary" type="button"  value="myButton"  id="total_pagar">FINALIZAR COMPRA</a>
        </div>`;
    
    document.getElementById("total_pagar").onclick = finalizarcompra;
    
}



function finalizarcompra(){

    Swal.fire({
        title: 'Esta seguro',
        text: "Su compra esta por ser concretada por "+Total + " ₿(MTR) ",

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Compra realizada',
            'Gracias',
            'success'
          )
        }
      })
}









