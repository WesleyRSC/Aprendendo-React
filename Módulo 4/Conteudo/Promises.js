function api(email, senha) {
    return new Promise((resolved,reject) => {
        setTimeout(() => {
            if (senha==12345) {
                resolved(`O  usuario ${email} está logado`)
            } else {
                reject(`Email o senha invalidos`)
            }
        }, 5000);
    }) 
}

function main() {
    console.log('Inicio da Promise')
    api('wesley@email.com',12345).then((value) => {
        console.log(value);
    }).catch((erro) => {
        console.log(`Digite novamente, ${erro}`)
    })

    api('wesley@email.com',678).then((value) => {
        console.log(value);
    }).catch((erro) => {
        console.log(`Digite novamente, ${erro}`)
    })
    
    console.log('Fim da Promise');
}

main();