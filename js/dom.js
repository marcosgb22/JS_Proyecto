

const item =     [{  id: 1,  nombre: "MEN"      , precio: 1 , img: "Recursos/Imagenes/InShot_20220623_025042057.jpg" },
                  {  id: 2,  nombre: "CALAVERA" , precio: 2 , img: "Recursos/Imagenes/tapa_eno_calavera.jpg" },
                  {  id: 3,  nombre: "GIRASOL"  , precio: 3 , img: "Recursos/Imagenes/TapaEpEon.jpg"},
                  {  id: 4,  nombre: "NICKITUS" , precio: 7 , img: "Recursos/Imagenes/nico.JPG"}];



for (const items of item) {

//let contenedor = document.createElement("div");

let card = document.createElement("div");

card.innerHTML =

    `<div class="card"  style="width: 12rem;">
    <img src="${items.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">${items.nombre}   -   ${items.precio} ₿(MTR)</p>
      <a href="#" class="btn btn-secondary">ADD TO CART</a>
    </div>
    </div>`

    document.getElementById("content_cards").appendChild(card);

}

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



