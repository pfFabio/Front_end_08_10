function foraFuncao(){
    let foraVariavel = "sou uma variavel externa"
    
    function dentroFuncao(){
        let dentroVariavel = "sou uma variavel interna"
        console.log(foraVariavel) // acesso a variavel externa
        console.log(dentroVariavel) // acesso a variavel interna
    }
    
    function outraFuncao(){
        console.log(foraVariavel) // acesso a variavel externa
        console.log(dentroVariavel) // acesso a variavel interna
        
    }
    dentroFuncao()
    outraFuncao()
}

console.log(foraVariavel) // acesso a variavel externa
foraFuncao()

