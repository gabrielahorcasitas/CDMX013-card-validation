const validator = {//objeto validator que contiene funciones

  //nombre : es una función, finalizar con coma si siguen más funciones dentro del objeto
  maskify: function (numCard){//numcard---> str con el número de tarjet
     let numberMasked = "";//numMasked es un  str
      if (numCard.length > 4){//aplicar maskify en cuanto str de input sea mayor a 4 dígitos
       //desplegar #'s según extensión de dígitos en input + últimos 4 dígitos en input sin enmascarar
       numberMasked = "#".repeat(numCard.length - 4) + numCard.slice(-4);
        return numberMasked;//mostrar input masked
      }else{
       return numCard// si son menos de 4 dígitos mostrar input sin enmascarar 
    }
  },

  isValid: function (numCard){ //numcard---> str con el número de tarjeta 

  let sum = 0;//guardar suma
  let numTransformed = []; //guardando en un array números transformados por operaciones en algoritmo luhn
  numCard = numCard.split('').reverse();//convertir input a array para espejearlo
  numCard = numCard.join('');//volver array a str

    for (let i = 0; i < numCard.length; i ++){//iterar función en en dígito por posición
      let x = numCard[i];//objeto en el índice
        if (i % 2 !== 0){// aplicar if a números en posición inpar (js empieza en índice 0)
          if(parseInt(x) * 2 > 9){//convertir a int y si int multiplicado por 2 es mayor a 9
            x = parseInt(x) * 2 - 9;//restar 9 (equivale a separar y sumas dígitos)
            numTransformed.push(x);//añadir número con operaciones a numTransformed
          }else{
            numTransformed.push(parseInt(numCard[i] * 2));//agregar a numTransformed si al multiplicar no son > 9
          }
        }else{
          numTransformed.push(parseInt(numCard[i]));//agregar a numTransformed nums en posición par sin operaciones
        }
      }

    for (let i = 0; i < numTransformed.length; i++){//para los num en indices de numTransformed
      sum += numTransformed[i];// agregar numeros a variable sum y sumarlos
    }
  return sum % 10 === 0;//retornar si suma modulo 10 es igual a cero
  }

}

export default validator; //para poder exportar con deafult una función debe declararse en 1a linea de archivo
