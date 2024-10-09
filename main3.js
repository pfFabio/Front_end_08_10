function funcaoExterna(){
    let VariavelExterna = "sou uma variavel externa"
    function funcaoInterna(){
        let variavelInterna = "sou uma variavel interna"
        console.log(VariavelExterna)
        console.log(variavelInterna)
    }
    funcaoInterna()
}
funcaoExterna()



function exemplo(){
    var x = 1
    let y = 2
    const z = 3
    if(true){
        var x = 10
        let y = 20
        const z = 30
        console.log(x, y, z)
    }

    console.log(x, y, z)
}

exemplo()



