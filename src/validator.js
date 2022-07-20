const validator = {

  maskify: function (numCard){
      numCard =  numCard.replace(/\s/g, '');
      let maskedNum = "";
        if (numCard.length > 4){
          maskedNum = "*".repeat(numCard.length - 4) + numCard.slice(-4);
          return maskedNum;
        } else{
          return numCard;
        }
  },

  sumDigits: function (numCard){ //función para sumar dígitos; la usaré para sumar los dígitos de tarjeta cuando sean > 9
    let convArr = (numCard + '') //convierte los dígitos en array
    .split ('') //separa los items del array
    .map(x => parseInt(x)); //devuelve los elementos una vez aplicando parseInt a c/u en un nuevo array
    convArr [0] + convArr[1]; //suma los ahora dos dígitos
  },

  isValid: function (numCard){ //numcard---> str con el número de tarjeta 
  console.log(numCard);
  let sum = 0;
  let numTransformed = []; //guardando en un array números transformados por operaciones en algoritmo luhn
  for (let i = 0; i < numCard.length; i ++){
    let x = numCard [i];//objeto en el índice
      if (i % 2 == 0){// aplicar if a números en posición par, porque js empieza en índice 0
        if(parseInt(x) * 2 > 9){
          x = parseInt(x) * 2;//
          x = this.sumDigits(x);//función sumDigits del objeto validator
          numTransformed.push(x);
        }else{
          numTransformed.push(parseInt(numCard[i] * 2));
        }
      }else{
        numTransformed.push(parseInt(numCard[i]));
      }
      for (let i = 0; i < numTransformed.length; i++){
        sum += numTransformed[i];
      }
    }
  return sum % 10 === 0;
  }

}

//no. de tarjeta para probar: 4137894711755904

export default validator; //para poder exportar con deafult una función debe declararse en 1a linea de archivo



