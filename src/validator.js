const validator = {

maskify: function (numCard){
  console.log(numCard);
    document.getElementById("numCard").value = numCard.replace(/\s/g, '')//no permitir espacios
    .replace(/\D/g, '')//no permitir letras
    .replace(/([0-9]{4})/g, '$1 ')//agrupar en bloques de 4 dígitos
    .trim();//quitar último espacio en un str

},

sumDigits: function (numCard){ //función para sumar dígitos; la usaré para sumar los dígitos de tarjeta cuando sean > 9
  let convArr = (numCard + '') //convierte los dígitos en array
  .split ('') //separa los items del array
  .map(x => parseInt(x)); //devuelve los elementos una vez aplicando parseInt a c/u en un nuevo array
  convArr [0] + convArr[1]; //suma los ahora dos dígitos
},

isValid: function (numCard){ //numcard---> str con el número de tarjeta 
let numT = [];
 for (let i = 0, l = numCard.lenght; i < l; i ++){
  let x = numCard [i];
     if (i % 2 !== 0){
       if(parseInt(numCard[i]) * 2 > 9){
        numT.push(parseInt(numCard[i] * 2));
       x = this.sumDigits(x);
       }else{
        numT.push(parseInt(numCard[i] * 2));
       }
      }else{
        numT.push(parseInt(numCard[i]));
      }
    numT += x;
    return numT % 10 === 0;
  }
}

}

export default validator; //para poder exportar con deafult una función debe declararse en 1a linea de archivo



