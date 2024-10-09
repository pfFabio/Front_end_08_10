/*
criar uma funcao com uma variavel que inicialize uma string

dentro da da primeira funcao, criar uma funcao com outra variavel inicializada como string

invocar a variavel externa fora da funcao
*/




function foraFuncao(){
    let mago = "contemplem o magoooooOOOOO!!"

    function poderes(){
        let poderes = "com seus podereeeeesss!"

        function divinos(){
            let divinos = "DIVINOS PODEREEEEEEEEEEEEEEESSSSSSSS"
            console.log(mago)
            console.log(poderes)
            console.log(divinos)
        }
        divinos()
    }
    poderes()
}
foraFuncao()

