// funcao em eventos, valor de this em funcoes de evento pode variar  dependendo do
// elemento que desparou o evento
/*
const btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    console.log(this)
})
*/

const pessoa = {
    nome: "Fábio",
    idade: 29,
    saudar : () => {
       console.log(`olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

pessoa.saudar()

//Arrow Function
// são ideais para callbacks
//são uteis quando voce não precisa se preocupar com o valor de this
//podem simplificar o código em alguns casos


//Function normal
//são mais flexiveis em relação ao valor de this
//são necessárias quando vc precisa controlar explicitamente o valor 
//de this, call, apply ou bind

//High order Functions 
//são funções que podem receber outras funções com argumentos ou retornar funções 
//elas são a base da programação funcional permitindo criar codigos mais flexiveis
// e reutilizaveis

//imutabilidade
//dados não podem ser auterados apos a sua criação em vez de modificar um valor 
//existente criamos um novo valor com a mudança desejada isso ajuda a evitar bugs e 
//torna o código mais facil de manter

//funções puras
//sempre retornam o mesmo comportamento independente do valor do argumento

function Soma(a,b){
    return a+b
}


Soma(1,2)
Soma(1,2)
Soma(1,2)
Soma(1,2)

/*
map, filter e reduce
são métodos de array que permitem manipular dados de forma funcional, retornando 
novos arrays sem modificar o original
*/


//funções de ordem superior

function mapear(array, funcao){
    const resultados = []
    for(let i=0; i<array.length; i++){
        resultados.push(funcao[array[i]])
    }
    return resultados
}


const numeros = [1,2,3,4]
const dobro = numeros.map(numero => numero * 2)
const dobro2 = mapear(numeros, numero => numero * 2)

console.log(numeros)
console.log(dobro)
console.log(dobro2)


//SPREAD
const pessoaa = {nome:"joao", idade: 30}
const novaPessoa = {...pessoaa, idade: 31}


console.log(pessoaa)
console.log(novaPessoa)

//SPREAD e imutabilidade

const fruta1 = ["banana", "maça", "uva"]
const fruta2 = [...fruta1, "Pera"]

console.log(fruta1)
console.log(fruta2)