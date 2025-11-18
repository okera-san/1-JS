let numeros =[1,2,3,4,5,6,7,8,9,10,11];  //Declara la variable con array de 10 elementos

for (let a = 0; a < numeros.length; a++){ //Inicia el bucle for
    if(a===5){ //Inicia una condicional veerificando si es igual a 5
     continue; //indica que continue y no salga como el break

    }
    console.log(numeros[a]);
} //imprime los numeros del 1 al 11