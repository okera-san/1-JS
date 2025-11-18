let nombre="este nombre es global"; //Esta variable es global porque esta fuera de algun bloque

function nombreglobal(){    //la funcion dice que se imprima la variable nombre
    console.log(nombre);     //la linea 3,4 y 5 no estan en el scope global porque estan en un bloque o dentro de la funcion
}   

nombreglobal();     //Esta linea esta en scope global y puede ser consultada en cualquier lugar.
console.log(nombre);    //EL console log imprime y esta en el scope global.    