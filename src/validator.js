const validator = (numCard) => { 
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
    console.log(numT);
  }
}

export default validator; //para poder exportar con deafult una función debe declararse en 1a linea de archivo

function sumDigits (numCard) { //función para sumar dígitos; la usaré para sumar los dígitos de tarjeta cuando sean > 9
  let convArr = (numCard + '') //convierte los dígitos en array
  .split ('') //separa los items del array
  .map(x => parseInt(x)); //devuelve los elementos una vez aplicando parseInt a c/u en un nuevo array
  convArr [0] + convArr[1];
  console.log (convArr);
}
