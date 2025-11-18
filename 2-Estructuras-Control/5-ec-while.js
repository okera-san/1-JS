n = 0; //Iniciara el contador de la variable, que actuara como contador del bucle
x = 0; //Inicializa la variable que actuara como acumulador de la suma
while (n < 3) { //Inicia el bucle while. La ejecucion se repetira mientras la condición n < 3 sea verdadera
  n++; //Incrementa el valor de n en 1
  x += n; //Suma el nuevo valor de n a la variable x. Es equivalente a x = x + n.
}

console.log("El resultado final de x es:"+x); 