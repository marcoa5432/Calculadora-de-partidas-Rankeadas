 // "Função" para calcular o saldo e o nível do jogador
function calcularrank(vitoria, derrota){

// "Variável" para armazenar o saldo (diferença entre vitórias e derrotas)
let vitoriaDerrota = vitoria - derrota;
let nivel;

// "Estrutura" de decisão para definir o nível com base no número de vitórias
if (vitoria < 10){
    nivel = "ferro";
} else if ( vitoria <= 20){
    nivel = "broze";
} else if (vitoria <= 50){
    nivel = "prata";
} else if (vitoria <= 80){
    nivel = "ouro";
} else if (vitoria <= 90){
    nivel = "diamante";
} else if (vitoria <= 100){
    nivel = "lendário";
} else {
    nivel = "irmortal";
}   

// Retorna uma mensagem com o saldo e o nível do jogador
//console.log ("o saldo do vitorias é " , vitoriaDerrota , "e esta no nivel" , nivel); // outra forma de ter o retorno
return `O saldo do vitorias é  ${vitoriaDerrota}  e esta no nivel ${nivel}`; 

}

// Função para coletar as vitórias e derrotas, chamando a função calcularRank
function calcularRank(vitoria , derrota){
    
    let resultado = calcularrank (vitoria, derrota); // Chama a função para calcular o saldo e o nível
    console.log(resultado);// Exibe o resultado no console

}
calcularRank(53,15); // Exemplo de execução      

     

       



