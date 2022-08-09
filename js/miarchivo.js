let TOTAL = [0 , 0];
let CRIPTO =  [0 , " "];


function elegir_cripto(MONEDA){
  switch (MONEDA) {
    case 'MONSTER':
        VALOR = 1;
        NOMBRE = "MONSTER";
        alert('ELEGISTE MONSTER');
        
      break;
    case 'AZURE':
        VALOR = 0.0005;
        NOMBRE = "AZURE";
        alert('ELEGISTE AZURE');
      break;
    case 'PING':
        VALOR = 0.1;
        NOMBRE = "PING";
        alert('ELEGISTE PING');
      break;
    default:
    
  }

return [VALOR, NOMBRE];  
}  





function agregar_compra (NFT, VALOR, TOK){

  const item = {
    MEN: {
      precio: 1 * TOK
    },
    CALAVERA: {
      precio:2 * TOK
    },
    GIRASOL: {
      precio:3 * TOK
    },
    NICKITUS: {
      precio:7 * TOK
    }
  }

    switch (NFT) {
        case 'MEN':
            VALOR = VALOR + item.MEN.precio;
            NO = 0;
            alert('COMPRASTE MEN');
            
          break;
        case 'CALAVERA':
            VALOR = VALOR + item.CALAVERA.precio;
            NO = 0;
            alert('COMPRASTE CALAVERA');
          break;
        case 'GIRASOL':
            VALOR = VALOR + item.GIRASOL.precio;
            NO = 0;
            alert('COMPRASTE GIRASOL');
          break;
        case 'NICKITUS':
            VALOR = VALOR + item.NICKITUS.precio;
            NO = 0;
            alert('COMPRASTE NICKITUS');
          break;
        case 'NO':
            NO = 1;
            VALOR = VALOR + 0;
            alert('SE TERMINA COMPRA');

          break;
        default:
        
      }
    return [VALOR, NO];    
}

var MONEDA=prompt('QUE CRIPTO QUIERES USAR? DSIPONIBLES = *MONSTER *AZURE *PING ');
CRIPTO = elegir_cripto(MONEDA);


var NFT=prompt('QUE NFT QUIERES COMPRAR? --ESCRIBE EL *NOMBRE PARA COMPRAR -- ESCRIBE *NO para SALIR ');
TOTAL = agregar_compra(NFT, TOTAL[0],CRIPTO[0]);


if (TOTAL[0] != 0){ 
    while (TOTAL[1]<1){
    var NFT=prompt('LA SUMA DE LA COMPRA ES ' + TOTAL[0] + ' ' + CRIPTO[1] + ' DESEA AGREGAR OTRO? --ESCRIBE EL *NOMBRE PARA COMPRAR --*NO para SALIR');
    TOTAL = agregar_compra(NFT, TOTAL[0],CRIPTO[0]);

    }
}



alert('COMPRA FINAL ES = ' + TOTAL[0] + ' ' + CRIPTO[1]);




