let Total = 0

//cargo datos de API

function traerDatos(done) {

  const results = fetch("https://rickandmortyapi.com/api/character/");
  
  results
      .then(response => response.json())
      .then(data => {done(data)});
  
  }

  traerDatos(data => {
    console.log(data);



// Crear objetos

function NFTs (id, nombre, precio, img, habilitado ){

this.id = id;
this.nombre = nombre;
this.precio = precio;
this.img = img;
this.habilitado = habilitado;
this.boton = function(){ 
    
    if (habilitado === "Alive" || habilitado === "Dead" || habilitado === "unknown"){  //Si se da la primera compra acepta 

    console.log(" item -- " + nombre) 
    habilitado = "FALSE";
    cuenta(precio)
    agregarprecios(precio, nombre)

    } else {    //si ya fue vendidio genera alarma Toastify

        console.log(" item -- " + nombre + " fue vendido" )
        Toastify({
            text: "Item --"+ nombre + " fue agregado" ,
            className: "info",
            style: {
              background: "linear-gradient(to right, #bbc255, #393b19)",
            }
          }).showToast();

    }
    
}
}

//itera entre los elementos q se van a ver x categoria

let itemCategoria = localStorage.getItem("Categoria")
let itemsNFT = [] //array con elementos

if (localStorage.getItem("Categoria")){

 itemCategoria = localStorage.getItem("Categoria")

} else {
  itemCategoria = "Alive"
}

document.getElementById("Dead").onclick = function(){
  itemCategoria = "Dead"
  localStorage.setItem("Categoria", "Dead");  
};

document.getElementById("Alive").onclick = function(){
  itemCategoria = "Alive"
  localStorage.setItem("Categoria", "Alive");  
};

document.getElementById("Unknowns").onclick = function(){
  itemCategoria = "Dead"
  localStorage.setItem("Categoria", "unknown");  
};


//carga los elementos

for (const items of data.results ){

    if (items.status == itemCategoria){

    itemsNFT.push(new NFTs (items.id, items.name, items.id, items.image, items.status));
    }  

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
          <a href="#" class="btn btn-secondary" type="button" value="myButton"  id="${items.nombre}"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >ADD TO CART</a>
        </div>
        </div>`
    
        document.getElementById("content_cards").appendChild(card);  
        document.getElementById(items.nombre).onclick = items.boton;
   
    
}


// Agrega los precios de las compras

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
        <p class="parrafo_precio"> ${nombre}   -  ${precio} ₿(MTR)</p>
        </div>`;

    document.getElementById("content_precios").appendChild(content);  
}


function cambiartotal(Total){
    let total = document.getElementById("content_total");
    
    total.innerHTML =
    
        `<div class="total"  >

        <p class="color : white ">_________________________________</p>
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

});


