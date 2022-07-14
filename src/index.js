import validator from './validator.js';// para poder importar funcion con default, declarar import en linea 1.

console.log(validator);
document.getElementById("validation").addEventListener('click', validator);


//function numHide (numCard){
   // hiddenNum = [];
     //   for (let i = 0; i < numCard.lenght; i ++){
       //     if (i < numCard.lenght - 4){
          //      hiddenNum.push("*");
          //  } else {
             //   hiddenNum.push(numCard[i]);
         //   }
   //     }
//}

//.value cuando llame a la función con event listenerde typing input en textbox;