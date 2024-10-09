//Closure são uma das caracteristicas mais poderoas e, ao mesmo tempo mais complexas do js um closure e ma função q se lembra do seu ambiente lexico, mesmo apos ter sido executada


// Data Binding = Controle total da saida
function criarContador(){
    let contador = 0
    return function(){
        contador++
        return contador
    }
}

const meuContador = criarContador()


console.log(meuContador())//1
console.log(meuContador())//2
console.log(meuContador())//3

