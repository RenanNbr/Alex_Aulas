//parametros de funcao



//function somaOutronumero(){
//    return 50 + 50 
//}

//console.log(soma(2,2))
//console.log(soma(245,20))
//console.log(soma(-500,60))

//parametros x argumentos

//ordem parametros

//function nomeIdade(nome, idade){
//    return `meu nome é ${nome} e minha idade ${idade}`;
//}

//console.log(nomeIdade(17, "renan"))

function soma(numero1, numero2){
    return numero1 + numero2 //2 + 2
}

function multiplicca(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

//console.log(multiplicca(4, 5), soma(3, 3))

                   //9         //6
multiplicca( soma(4, 5), soma(3, 3))

console.log(multiplicca( soma(4, 5), soma(3, 3)))