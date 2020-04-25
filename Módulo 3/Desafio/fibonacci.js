'use strict'

const fibonacci = () => {
    let fibonacciarray = [0,1];
    for (let index = 1; fibonacciarray[index] <= 350; index++) {
        fibonacciarray.push(fibonacciarray[index] + fibonacciarray[index-1]);   
    }
    return fibonacciarray;
}

const isFibonnaci = (num = 1) => {
    let fibonacciarray = [0,1];
    for (let i = 1; fibonacciarray[i] <= num; i++) {
        fibonacciarray.push(fibonacciarray[i] + fibonacciarray[i-1]);   
    }
    if (fibonacciarray.indexOf(num)>=0) {
        return true;
    }
    else{
        return false;
    }
}
console.log(fibonacci);
console.log(isFibonnaci(377));