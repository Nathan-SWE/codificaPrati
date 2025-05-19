const prompt = require("prompt-sync")();

let continuar = true;

while (continuar) {
  console.log("\n==== MENU ====");
  console.log("0 - Sair.");
  console.log("1 - Verificar se número é par ou impar.");
  console.log("2 - Classificar idade.");
  console.log("3 - Classificar nota");
  console.log("5 - Calcular IMC");
  console.log("6 - Verificar tipo de triângulo");
  console.log("7 - Calcular valor da compra de maçãs");
  console.log("8 - Mostrar dois valores em ordem crescente");
  console.log("9 - Contagem regressiva de 10 até 1");
  console.log("10 - Escrever número 10 vezes");
  console.log("11 - Somar 5 números");
  console.log("12 - Tabuada de um número");
  console.log("13 - Média de números até digitar 0");
  console.log("14 - Fatorial de um número");
  console.log("15 - Sequência de Fibonacci\n");

  const opcao = Number(prompt("Escolha uma opção: "));

  switch (opcao) {
    case 0:
      console.log("\n...encerrando.\n");
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
        console.log("\nCriança\n");
      } else if (idade < 18) {
        console.log("\nAdolescente\n");
      } else if (idade < 60) {
        console.log("\nAdulto\n");
      } else {
        console.log("\nIdoso\n");
      }
      break;

    case 3:
      const nota = Number(prompt("Digite a nota (0 a 10): "));
      if (nota >= 7) {
        console.log("\nAprovado\n");
      } else if (nota >= 5) {
        console.log("\nRecuperação\n");
      } else {
        console.log("\nReprovado\n");
      }
      break;

    case 5:
      const peso = Number(prompt("Digite o peso (kg): "));
      const altura = Number(prompt("Digite a altura (m): "));
      const imc = peso / (altura * altura);
      if (imc < 18.5) {
        console.log("\nBaixo peso\n");
      } else if (imc < 25) {
        console.log("\nPeso normal\n");
      } else if (imc < 30) {
        console.log("\nSobrepeso\n");
      } else {
        console.log("\nObesidade\n");
      }
      break;

    case 6:
      const a = Number(prompt("Lado A: "));
      const b = Number(prompt("Lado B: "));
      const c = Number(prompt("Lado C: "));
      if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
          console.log("\nTriângulo Equilátero\n");
        } else if (a === b || a === c || b === c) {
          console.log("\nTriângulo Isósceles\n");
        } else {
          console.log("\nTriângulo Escaleno\n");
        }
      } else {
        console.log("\nOs lados não formam um triângulo.\n");
      }
      break;

    case 7:
      const qtd = Number(prompt("Quantas maçãs foram compradas? "));
      const preco = qtd >= 12 ? 0.25 : 0.3;
      console.log(`\nTotal: R$ ${(qtd * preco).toFixed(2)}\n`);
      break;

    case 8:
      const val1 = Number(prompt("Digite o primeiro valor: "));
      const val2 = Number(prompt("Digite o segundo valor: "));
      console.log("\nValores em ordem crescente:");
      if (val1 < val2) {
        console.log(`${val1}, ${val2}\n`);
      } else {
        console.log(`${val2}, ${val1}\n`);
      }
      break;

    case 9:
      console.log("\nContagem regressiva:");
      for (let i = 10; i >= 1; i--) {
        console.log(i);
      }
      console.log("");
      break;

    case 10:
      const num10 = Number(prompt("Digite um número: "));
      console.log("");
      for (let i = 0; i < 10; i++) {
        console.log(num10);
      }
      console.log("");
      break;

    case 11:
      let soma = 0;
      for (let i = 0; i < 5; i++) {
        soma += Number(prompt(`Digite o número ${i + 1}: `));
      }
      console.log(`\nSoma total: ${soma}\n`);
      break;

    case 12:
      const tab = Number(prompt("Digite o número da tabuada: "));
      console.log("");
      for (let i = 1; i <= 10; i++) {
        console.log(`${tab} x ${i} = ${tab * i}`);
      }
      console.log("");
      break;

    case 13:
      let total = 0;
      let count = 0;
      let num13;
      do {
        num13 = Number(prompt("Digite um número decimal (0 para sair): "));
        if (num13 !== 0) {
          total += num13;
          count++;
        }
      } while (num13 !== 0);
      if (count > 0) {
        console.log(`\nMédia: ${total / count}\n`);
      } else {
        console.log("\nNenhum número válido foi inserido.\n");
      }
      break;

    case 14:
      let num14 = Number(prompt("Digite um número para o fatorial: "));
      let fatorial = 1;
      for (let i = 1; i <= num14; i++) {
        fatorial *= i;
      }
      console.log(`\nFatorial de ${num14} é ${fatorial}\n`);
      break;

    case 15:
      let n1 = 0;
      let n2 = 1;
      console.log("\nSequência de Fibonacci:");
      for (let i = 0; i < 10; i++) {
        console.log(n1);
        const next = n1 + n2;
        n1 = n2;
        n2 = next;
      }
      console.log("");
      break;

    default:
      console.log("\nOpção inválida.\n");
  }
}
