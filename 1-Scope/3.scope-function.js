
function scope(){   //La funcion scope es similar a la local, pero esta se utiliza mas para variables temporales auxiliares
    var nombre= "Esta variable esta en una function scope";
    console.log(nombre);
}

scope();

// es similar a la local porque se evitan mas comfilctos y mantiene clases privadas.