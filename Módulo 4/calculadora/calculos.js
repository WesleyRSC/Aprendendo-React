function soma(n1,n2) {
    return n1+n2;
}

function sub(n1,n2) {
    return n1-n2;
}

function mult(n1,n2){
    return n1*n2;
}

function div(n1,n2) {
    if (n2==0) {
        return 0;
    }
    else{
        return n1/n2;
    }
}

module.exports = { 
    soma: soma,
    subtracao: sub,
    multiplicacao: mult,
    divisao: div
};