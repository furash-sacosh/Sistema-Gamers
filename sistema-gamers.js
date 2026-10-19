const p = require('prompt-sync')();

let time = [];
let con = true;

function showm(){
    console.log("\n--------SISTEMA DE GAMERS--------");
    console.log("\n1. Adicionar jogador.");
    console.log("2. Remover jogador.");
    console.log("3. Ver equipe.");
    console.log("4. Calcular média da equipe.")
    console.log("5. Sair.\n");
}

function add(){
    let name = p("digite o nome do jogador ou 0 para voltar: ");
    name = name.toUpperCase();
    if(name === "0"){
        console.log("\n Voltando ao menu...\n");
        return;
    }
    let fun = p("Digite a função do jogador: ");
    let pont = Number(p("Digite a pontuação do jogador: "))
    if(isNaN(pont)){
        console.log("\nPontuação invalida!\n")
        return;
    }

    let player ={
        nome: name,
        funcao: fun,
        pontuacao: pont,
    } 
        time.push(player);
        console.log("\nSUCESSO!!!! Jogador" + name + " foi adicionado a equipe.");
        console.log("\nEquipe atualizada:\n");
        see();
}

function dell(){
    if(time.length === 0){
        console.log("\nSem jogadores...");
        return;
    } else{
        console.log("\nEquipe atual: \n");
        see();
        console.log("\n");
        let d = p("Digite o nome do jogador que deseja remover ou 0 para voltar: ");
        console.log("\n");
        d = d.toUpperCase();

        let indexdell = -1;
        for(let i = 0; i < time.length; i++){
            if(time[i].nome === d){
                indexdell = i;
                break;
            } 
        }
        
        if(d === "0"){
            console.log("\n Voltando ao menu...\n");
            return;  
        }

        if(indexdell === -1){
            console.log("\nJogador não encontrado.\n");
            return;
            } else{
            time.splice(indexdell, 1);
            console.log("\nSUCESSO!!! " + d + " foi removido da equipe.\n");
            console.log("\nEquipe atualizada:\n");
            see();
        }
    }
}

function see(){
    if(time.length === 0){
        console.log("\nNada...")
    }

    for(let i = 0; i < time.length; i++){
        let player = time[i];
        console.log((i + 1) + ". " + player.nome + " | Função: " + player.funcao + " | Pontuação: " + player.pontuacao);
    }
}

function calculo(){
    if(time.length === 0){
        console.log("\nNada...")
        return;
    }
    let totalp = 0;

    for(let i = 0; i < time.length; i++){
        totalp = totalp + time[i].pontuacao;
    }
    let media = totalp / time.length;
    console.log("\nA média de pontos da equipe é: ", media);
}

while(con === true){
    showm();
    let op = Number(p("Digite uma opção: "));

    if(op === 1){
        add();
    } else if(op === 2){
        dell();
    } else if(op === 3){
        see();
    } else if(op === 4){
        calculo();
    } else if(op === 5){
        console.log("\nSAINDO...\n");
        con = false;
    } else{
       console.log("\nInvalida! Tente uma das opções listadas.\n");
    }
}