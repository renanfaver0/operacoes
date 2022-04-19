
let namePilot = prompt("Qual seu nome, piloto?");
let velocity = 0;
let velocityAcelerate = prompt("Qual velocidade você deseja acelerar?");
let confirmVelocity = confirm("Estamos indo para a velocidade: " + velocityAcelerate + "km/s");

if (confirmVelocity) {
    velocity = velocityAcelerate;
}

if (velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade");
} else if (velocity < 40) {
    alert("Você está devagar, podemos aumentar mais.");
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter.");
} else if (velocity< 100) {
    alert("Velocidade alta. Considere diminuir.");
} else {
    alert("Velocidade perigosa. Controle automático forçado.");
}

alert("Nome do piloto: " + namePilot);
alert("Velocidade atual: " + velocityAcelerate);