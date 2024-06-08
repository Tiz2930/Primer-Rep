function intercambiar(arreglo:number[], i:number, j:number) {
    let aux:number;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}

function comparar(arreglo : number[], i : number, j :
    number) : number {
    let comparacion : number;
    if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
    } else {
    comparacion = 1;
    }
    return comparacion;
}

function burbuja(arreglo:number[]){
    for(let i=0 ;i < arreglo.length;i++){
        for(let j=0;j < arreglo.length-1;j++){
            if (comparar(arreglo, j, j+1) == -1 ){
                intercambiar(arreglo, j, j+1);
            }
        }
    }
    console.log(arreglo)
}

let arreglo = [5,4,3,4,5];
burbuja(arreglo);