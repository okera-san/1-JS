let dia="Domingo";

switch (dia){       //Se utiliza por tener varias condiciones
    case "Lunes":
        console.log("Inicio de semana");    //si se cumple lunes imprime inicio de semana
        break;  //break finaliza la ejecucion del bloque
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
        case "Sabado":
            console.log("Media semana");    //indica media semana no importando que dia sea
            break;
        case "Domingo": //si se cumple domingo imprime fin de semana
            console.log("fin de semana");
}