let numeros =[1,2,3,4,5,6,7,8,9,0]; //Declara una variable y se le asigna un array

for (let i=0; i < numeros.length; i++){ 
    if(i===9){ //inicia la condicional que verifica si es iugal a 5
        break; //termina 

    }
    console.log(numeros[i]);
}//Imprime en la consola los elementos hasta llegar a la condicion
