
import data from './nft.json' assert {type: 'json'};

let Total = 0;

//localStorage.setItem("NFT", data);
//
//console.log (localStorage.getItem(NFT))


for (const items of data){

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


botonMEN.onclick = () =>{  
  Total = Total + 1
  cambiartotal(Total)
}

botonCALAVERA.onclick = () =>{  
  Total = Total + 2
  cambiartotal(Total)
}

botonGIRASOL.onclick = () =>{  
  Total = Total + 3
  cambiartotal(Total)
}

botonNICKITUS.onclick = () =>{  
  Total = Total + 7
  cambiartotal(Total)
}


function cambiartotal(Total){

let total = document.getElementById("content_total");

total.innerHTML =

    `<div class="lista"  style="width: 12rem;" >
    </div>
    <p class="color : white ">Total a pagar -  ${Total} ₿(MTR)</p>
    </div>`;

}