import * as rls from "readline-sync";

let base: number = rls.questionFloat("Ingrese la base: ");
let exponente: number = rls.questionFloat("Ingrese el exponente: ");
let resultado: number = 1
let resultadoFuncion;

function potencia(base: number, exponente: number) {
    for(let i : number=0; i < exponente; i ++){
          resultado*= base
    }return resultado

}
resultadoFuncion = potencia(base, exponente);