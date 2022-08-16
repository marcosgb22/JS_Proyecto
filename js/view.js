//    Programa principal

//    container.innerHTML = “
//    
//    <div class="card" style="width: 12rem;">
//    <img src="Recursos/Imagenes/InShot_20220623_025042057.jpg" class="card-img-top" alt="...">
//    <div class="card-body">
//      <h5 class="card-title"></h5>
//      <p class="card-text">NFT MEN</p>
//      <a href="#" class="btn btn-primary">ADD TO CART</a>
//    </div>
//    </div>”

let Total = 0;


const item =     [{  id: 1,  nombre: "MEN"      , precio: 1 , img: "Recursos/Imagenes/InShot_20220623_025042057.jpg" },
                  {  id: 2,  nombre: "CALAVERA" , precio: 2 , img: "Recursos/Imagenes/tapa_eno_calavera.jpg" },
                  {  id: 3,  nombre: "GIRASOL"  , precio: 3 , img: "Recursos/Imagenes/TapaEpEon.jpg"},
                  {  id: 4,  nombre: "NICKITUS" , precio: 7 , img: "Recursos/Imagenes/nico.JPG"}];



for (const items of item) {

//let contenedor = document.createElement("div");

let card = document.createElement("div");

card.innerHTML =

    `<div class="card"  style="width: 12rem;" >
    <img src="${items.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${items.nombre}   -   ${items.precio} ₿(MTR)</p>
      <a href="#" class="btn btn-secondary" id="${items.nombre}">ADD TO CART</a>
    </div>
    </div>`

    document.getElementById("content_cards").appendChild(card);

}


let botonMEN = document.getElementById("MEN")
let botonCALAVERA = document.getElementById("CALAVERA")
let botonGIRASOL = document.getElementById("GIRASOL")
let botonNICKITUS = document.getElementById("NICKITUS")

botonMEN.addEventListener("click", respuestaClick)
function respuestaClick(){
  Total = 1
}


let n = 0

while (n < 5) {

n ++


let total = document.getElementById("content_total");



total.innerHTML =

    `<div class="lista"  style="width: 12rem;" >
    </div>
    <p class="color : white ">Total a pagar -  ${Total} ₿(MTR)</p>
    </div>`

//document.getElementById("content_total").append(total)

}