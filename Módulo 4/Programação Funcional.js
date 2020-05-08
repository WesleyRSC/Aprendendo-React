//Função pura
function somar(n1,n2){
    return n1 + n2;
}
console.log(somar(2,5));
//-----------------------------

//Composição de função pura
function multiplicar(num1,num2){
    let result = 0;
    for( let i =0;i<num2;i++)
    {
        result = somar(result,num1);
    }
    return result;
}
console.log(multiplicar(4,8));
//-----------------------------

//Estado compartilhado
let array=[1,2,3,4,5];
function multArray1(numeros){
    for(let i=0;i<numeros.length;i++){ 
        numeros[i]= numeros[i]*2;
    }
    return numeros;
}
console.log(multArray1(array));
/*  multArray1 -> [2,4,6,8,10];
    array == [2,4,6,8,10];
    Altera o objeto fora da função Sem imutabilidade 
*/

let array=[1,2,3,4,5];
function multArray2(numeros){
    let newNumeros=[];
    for(let i=0;i<numeros.length;i++){ 
        newNumeros[i]= numeros[i]*2;
    }
    return newNumeros;
}
console.log(multArray2(array));
/*  multArray2 -> [2,4,6,8,10];
    array == [1,2,3,4,5];
    Não altera o objeto fora da função Objeto Imutavel
*/
//-----------------------------

// Métodos de Array (Sempre recebem uma função)

// MAP
let animais=['dog','cat','bird','lion'];
let numeros=[15,12,4,3];
novosAnimais = animais.map((animal,index)=>{ 
    return{
        nome: animal,
        id: numeros[index]
    }
})
/* novosAnimais==
(4) [{…}, {…}, {…}, {…}]
    0: {nome: "dog", id: 15}
    1: {nome: "cat", id: 12}
    2: {nome: "bird", id: 4}
    3: {nome: "lion", id: 3}
    length: 4
-----------------------------*/



// Filter
novosAnimais.filter((animal)=>{
    return animal.id %2==0;
})
/* filtrando dentre os arrays em 
    que o ID dos animais é Par 
-----------------------------*/

// Reduce
animaisPeso.reduce((initialValue, animal) => {
    initialValue = initialValue + animal.peso
    return initialValue
}, 0 )
// initialValue==34
//-----------------------------
