alert("Boas vindas ao jogo do número secreto!");
let numero = 29;
let chute;
let tentativas = 0;

while (chute != numero){
    chute = prompt('Escolha um número de 1 a 30: ');
    
    if(numero == chute){
        alert("Você acertou!");
    } else {
        if(numero > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que o ${chute}`);
        }
    }

    tentativas++;
};

alert(`Foram ${tentativas} tentativas.`);

