const validator = (numCard) => {  //dentro va funcion is valid + funcion maskify
  //añadir función de separar cada 4 dígitos por separado o bien añadirla a la función maskify

function maskify (numCard){
  hiddenNum = [];
    for (let i = 0; i < numCard.lenght; i ++){
      if (i < numCard.lenght - 4){
        hiddenNum.push("*");
      } else {
        hiddenNum.push(numCard[i]);
      }
   }
}

//.value cuando llame a la función con event listenerde typing input en textbox;

function isValid (numCard){}
 let  numT = 0;
  for (let i = 0; i < numCard.lenght; i ++){
    let x = numCard [i];
      if (i < numCard.lenght && i % 2 !== 0){
        x = x*2;
        if (x > 9){
          x = sumDigits(x); 
        }
      }
    numT += x;
    return numT % 10 === 0;
  }

function sumDigits (numCard) { //función para sumar dígitos; la usaré para sumar los dígitos de tarjeta cuando sean > 9
  let convArr = (numCard + '') //convierte los dígitos en array
  .split ('') //separa los items del array
  .map(x => parseInt(x)); //devuelve los elementos una vez aplicando parseInt a c/u en un nuevo array
  convArr [0] + convArr[1];
}

}

export default validator; //para poder exportar con deafult una función debe declararse en 1a linea de archivo




