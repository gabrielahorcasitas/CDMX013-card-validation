import * as validator from './validator.js';// para poder importar funcion con default, declarar import en linea 1.

console.log(validator);

//poner timer para maskify


// llamar funciones dentro de objeto validator con event listener (keyup en input para maskify, click en botón para isValid)

function maskifyListener(){
    //recibe el numero de tarjeta como lo escribe la usuaria y cambia el string según validator.maskify;
    let cardNum = document.getElementById("numCard").value;//el valor del elemento html con id "numcard" (no. de tarjeta) se guarda en la variable dardNum;

    let formatedCardNum = validator.maskify(cardNum);// la variable con el num formateado contiene el no. de tarjeta una vez aplicada la función maskify;

    document.getElementById("numCard").innerHTML = formatedCardNum;
}

document.getElementById("numCard").addEventListener('keyup', maskifyListener);

function validationListener(){
    let cardNum = document.getElementById("numCard").value; //el valor del elemento html con id "numcard" (no. de tarjeta) se guarda en la variable dardNum;
    //console.log(cardNum);
    //if siempre evalúa si true*
    if(validator.isValid(cardNum)){ //mando llamar la función isValid de validator con el no. de tarjeta como parámetro
        alert("Tarjeta Validada"); //si el resultado de isValid sobre el no. de tarjeta es igual a true que dé un alert de válido
    }else {
        alert("Tarjeta invalida, vuelve a intentarlo");// si no que dé un alert de no válido
    }
}

document.getElementById("validation").addEventListener('click', validationListener);