const prompt = require("prompt-sync")();

let continuar = true;

while (continuar) {
  console.log("==== MENU ====");
  console.log("0 - Sair.");
  console.log("1 - Verificar se número é par ou impar.");

  const opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 0:
      console.log("\n...encerrando.");
      continuar = false;
      break;

    case 1:
      const numero = Number(prompt("Digite um número: "));
      if (numero % 2 == 0) {
        console.log(`\n${numero} é par\n`);
      } else {
        console.log(`\n${numero} é impar\n`);
      }
      break;
  }
}
