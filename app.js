alert("Boas vindas ao jogo do número secreto!");
let dificuldade = 1000;
let numero = parseInt(Math.random() * dificuldade);
console.log(numero);
let chute;
let tentativas = 0;

while (chute != numero){
    chute = prompt(`Escolha um número de 0 a ${dificuldade}: `);
    
    if(numero == chute){
        alert("Você acertou!");
    } else {
        if(numero > chute){
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }

    tentativas++;
};

let frase = tentativas > 1 ? `Foram ${tentativas} tentativas.` : `Foi apenas ${tentativas} tentativa.`;

alert(frase);