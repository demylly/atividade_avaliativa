/* 1) (0,5 p) Crie variáveis para armazenar seu nome, altura, série e turma. Após isso, mostre no terminal uma mensagem personalizada se apresentando. */

/* 2) (0,5 p) Crie uma lista com 3 esportes que você gosta */

/* 3) (1,0 p) Crie uma condição que verifica se você é maior que o professor Patrick, que possui 1.73 de altura */

/* 4) (1,0 p) Crie uma função que mostre os 3 esportes no terminal. Use o laço de repetição que preferir. */

/* 5) (1,0 p) Crie um código que verifica se o esporte "natação" existe na lista criada da questão 2. */

/* 6) (1,0 p) Crie um laço de repetição que conta de 0 até -10 */

let nome = "demylly"
let altura = 1.73
let serie = 3
let turma = "DSC"
console.log ("olá, meu nome é "+ nome +" minha altura é "+ altura +"Altualmente estou "+ serie, turma+".")



const esportes = ["futebool","volei","queimada"]

function alturaPatrick(altura){
    if (altura >= 1.73){
        console.log("Voce é maior que o professor Patrick")
    }else{
        console.log("Voce é maior que o professor")
    }
}
function mostrarEsporte(){
let contador = 0
    while (contador <esportes.length){
        console.log(contador + " - " + esportes[contador])
        contador++
    }
}
mostrarEsporte()

function verificaNatacao(){
    if(esportes== "natação"){
        console.log(Tem Natação)
    }else{
        console.log("Não tem Natação")
        if(esportes)
}
}
verificaNatacao()


function contador(){
 let contador = 1
 while( contador <= 10){
    console.log(contador)
    contador++
   }
}
contador()

