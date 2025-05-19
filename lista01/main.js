const prompt = require("prompt-sync")();

let continuar = true;

while (continuar) {
  console.log("==== MENU ====");
  console.log("0 - Sair.");
  console.log("1 - Verificar se número é par ou impar.");
  console.log("2 - Classificar idade.");
  console.log("3 - Classificar nota");

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

    case 2:
      const idade = Number(prompt("Digite a idade: "));
      if (idade < 12) {
        console.log("Criança");
      } else if (idade < 18) {
        console.log("Adolescente");
      } else if (idade < 60) {
        console.log("Adulto");
      } else {
        console.log("idoso");
      }
      break;

    case 3:
      const nota = Number(prompt("Digite a nota (0 a 10): "));
      if (nota >= 7) {
        console.log("Aprovado");
      } else if (nota >= 5) {
        console.log("Recuperação");
      } else {
        console.log("Reprovado");
      }
      break;
  }
}
