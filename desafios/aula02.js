let nome = prompt("Digite seu nome:");
alert("Bem-vindo(a) " + nome + '.');

let dia = prompt("Qual dia da semana?");
if(dia.toUpperCase() == "SABADO" || dia.toLocaleUpperCase() == "DOMINGO"){
    alert("Bom final de semana!");
} else {
    alert("Boa semana!");
};

let numero = prompt("Digite um número: ");
if(numero > 0){
    alert("Esse número é positivo.");
} else {
    alert("Esse número é negativo");
}; 

let pontos = prompt("Digite seus pontos: ");
if(pontos > 100){
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
};

let valor = 100;
alert(`${nome} seu saldo na conta é de R$${valor}.`);