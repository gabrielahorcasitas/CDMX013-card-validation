import validator from './validator.js';// para poder importar funcion con default, declarar import en linea 1.
console.log(validator);

let inputUnmasked = "";

//callback de funciones en validator desde dom
function maskifyListener(event){
    let inputValue = event.target.value.replace(/\s/g, '')//no permitir espacios
    .replace(/[a-zA-Z.,:;-_()]/g, '');//no permitir letras
    
    // endHashtag = posición del último #
	// contar el número de # para saber hasta donde cortar la cadena;
	//si el value.match no encuentra el match es igual a false,
	//para que no sea = a false el || (or) [] lo hace array vacio para que length sea = 0; 
	let endHashtag = (inputValue.match(new RegExp("#", "g")) || []).length;
    
    //guardar primeros cuatro dígitos y mostrar tal cual vienen
	if(endHashtag === 0) {//si no hay #
		inputUnmasked = inputValue;

	}else {//si hay # (endHashtag > 0)
		//el inputUnmasked se forma desde el principio de la cadena que ya tenemos hasta la posición que corresponde
        // al último # (endHashtag) y le agregamos los últimos caracteres de la cadena que escribió el usuario
		//del número de #'s en adelante
		//slice devuelve los caracteres de una cadena que comienzan en una localización especificada y, de acuerdo 
		//al número de caracteres que se especifiquen (si no se especifica son todos los que hay hasta el final)
		inputUnmasked = inputUnmasked.slice(0, endHashtag) + inputValue.slice(endHashtag);	
	}
    event.target.value = validator.maskify(inputUnmasked);//muestra en HTML el num enmascarado
}
document.getElementById("numCard").addEventListener('keyup', maskifyListener);//activar función con keyup en input

function validationListener(){

    if(validator.isValid(inputUnmasked)){ //mando llamar la función isValid de validator con el no. de tarjeta como parámetro
        document.getElementById('messageText').innerHTML= "<span style='color: green;'>Tarjeta Validada</span>";
        //si el resultado de isValid sobre el no. de tarjeta es igual a true que dé mensaje de válido
    }else {
        document.getElementById('messageText').innerHTML = "<span style='color: red;'>Tarjeta Invalida, inténtalo de nuevo</span>";
        // si no que dé mensaje de no válido
    }
}
document.getElementById("validation").addEventListener('click', validationListener);//activar funcion con click en btn validar