// This e um objeto especial em JS, que se refere ao objeto que esta sendo manipulado
//no contexto atual. Seu valor varia dependendo de como a função e chamada e do modo estrito

// funcao como metodos de objetos
//Quando uma funcao e chamada como um metodo de um objeto, o this dentro dessa 
//funcao se refere ao objeto que a chamou

// 1- this como funcao que se torna um metodo de um objeto por isso voce consegue fazer referencia ao this
const pessoa = {
     nome: "Fábio",
     idade: 29,
     saudar : function(){
        console.log(`olá meu nome é ${this.nome} e tenho ${this.idade} anos`)
     }
}

pessoa.saudar()
// this fazendo referencia ao objeto global do navegador obj windows
function minhaFuncao(){
    console.log(this)
}

//minhaFuncao()

// dica prova:  NODE e NPM - Linha de comando


// 3 - funcao chamada com call() e apply() voce pode especificar o valor de this para uma funcao

function nossaFuncao(arg1, arg2){
    console.log(this, arg1,arg2)
}

const obj = {nome: "joão"}

nossaFuncao.call(obj, "olá", "mundo")


// 4  - funcao dentro de construtores = o this se refere ao novo obj criado

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const pessoa1 = new Pessoa("ana", 22)

console.log(pessoa1)


