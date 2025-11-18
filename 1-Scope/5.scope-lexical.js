
function lexico(){      //Se le asigna un valor a la variable dentro de la funcion
    let variable = "Esto es una variable";

    function adentro(){        //Se crea una funcion adentro que imprime
        console.log(variable);
    }

    adentro();
}
lexico();   //Las funciones internas se pueden ejecutar ya que reservan variables de la funcion externa a ella