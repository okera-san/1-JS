
function local() {      // La funcion hace que se imprima nombre
    let nombre = "Jose esta en local";  //la variable nombre se le asigno un valor
    console.log(nombre);    //se imprime
}

local(); // Con esto se indica que la varible nombre let es local y funciona dentro de la funcion

// console.log(nombre); //nos demuestra que no se puede accerder a la funcion desde fuera y el alcance local mantiene reservada la variable enn el bloque