
function nome(callBack){
    let name=`React`;
    callBack(name);
}

function printNome(name){
    console.log(`Meu nome é ${name}`);
}


nome(printNome);
// Uma função que recebe por parametro outra função 
// que trabalha em cima do callback