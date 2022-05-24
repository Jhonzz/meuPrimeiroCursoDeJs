console.log("\nTrabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 19;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino existente");
    destinoExiste = true;
    break;
  }
  contador += 1;
}
console.log("Destino existe", destinoExiste);

if (destinoExiste && podeComprar) {
  console.log("\nBoa viagem");
} else {
  ("Desculpe tivemos um erro!");
}

for (i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destino) {
    console.log("Destino existente");
    destinoExiste = true;
  }
}
