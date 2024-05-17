import * as readlineSync from "readline-sync";

let arreglo : number[]= new Array(12);
let contador:number = readlineSync.questionInt("Ingrese un numero del (0 a 11): ");
let num: number;
let num78 : number= 78;
arreglo[0]= 4;
arreglo[1]= 7;
arreglo[2]= 9;
arreglo[3]= 3;
arreglo[4]= 1;
arreglo[5]= 45;
arreglo[6]= 67;
arreglo[7]= 23;
arreglo[8]= 29;
arreglo[9]= 78;
arreglo[10]= 11;
arreglo[11]= 16;

if (contador== 9){
    console.log("El numero seleccionado es el mas grande: " + contador + " = " + arreglo[9]);
}   else if(contador>=12 ){
    console.log("El numero ingresado no es valido");
} else{
    num = contador;
    console.log("El numero seleccionado no es el mas grande: " + contador + " = " + arreglo[num]);  
}

function parImpar(num78: number): string{
    if(num78 % 2==0) {
      return("El numero " + num78 + " es par" );
    } else{
        return("El numero " + num78 + " es impar");
    }
}

console.log(parImpar(num78));