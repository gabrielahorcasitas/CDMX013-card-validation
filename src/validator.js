function maskify (numCard){
console.log(numCard);//por qué marca undefined??? creo que js está tomando el no. de tarjeta como int y no como str
  let hiddenNum = "";
    for (let i = 0; i < numCard.lenght; i ++){
      if (i < numCard.lenght - 4){
        hiddenNum += "*";
      } else {
        hiddenNum += numCard[i];
      }
   }
   return hiddenNum;
}

function sumDigits (numCard) { //función para sumar dígitos; la usaré para sumar los dígitos de tarjeta cuando sean > 9
  let convArr = (numCard + '') //convierte los dígitos en array
  .split ('') //separa los items del array
  .map(x => parseInt(x)); //devuelve los elementos una vez aplicando parseInt a c/u en un nuevo array
  convArr [0] + convArr[1]; //suma los ahora dos dígitos
}

function isValid (numCard){ //numcard---> str con el número de tarjeta 
console.log(numCard.lenght);
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
}

export {maskify, isValid}; //para poder exportar con deafult una función debe declararse en 1a linea de archivo



