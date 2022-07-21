import validator from './validator.js';// para poder importar funcion con default, declarar import en linea 1.
console.log(validator);

let cardInput  = "";
// llamar funciones dentro de objeto validator con event listener (keyup en input para maskify, click en botón para isValid)
function maskifyListener(event){
    //recibe el numero de tarjeta como lo escribe la usuaria y cambia el string según validator.maskify;
   cardInput = event.target.value;//el valor del elemento html con id "numcard" (que llama a la función como evento en el dom) se guarda en la variable cardInput;
   cardInput = cardInput.replace(/\s/g, '')//no permitir espacios
    .replace(/[a-zA-Z.,:;-_()]/g, '');//no permitir letras

    event.target.value = validator.maskify(cardInput);//muestra en HTML el num enmascarado
}
document.getElementById("numCard").addEventListener('keyup', maskifyListener);//activar función con keyup en input

function validationListener(){

    if(validator.isValid(cardInput)){ //mando llamar la función isValid de validator con el no. de tarjeta como parámetro
        document.getElementById('messageText').innerHTML= "<span style='color: green;'>Tarjeta Validada</span>"; //si el resultado de isValid sobre el no. de tarjeta es igual a true que dé mensaje de válido
    }else {
        document.getElementById('messageText').innerHTML = "<span style='color: red;'>Tarjeta Invalida, inténtalo de nuevo</span>";// si no que dé mensaje de no válido
    }
}
document.getElementById("validation").addEventListener('click', validationListener);//activar funcion con click en btn validar