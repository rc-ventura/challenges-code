// Importa o módulo prompt-sync para capturar entradas do usuário
const prompt = require('prompt-sync')();

// Função para obter um número válido do usuário (maior ou igual a 0)
function getValidNumber() {
    while (true) {
        const input = prompt('Digite um número maior ou igual a 0: '); // Solicita o número ao usuário
        const number = Number(input); // Converte a entrada para número

        // Verifica se o número é válido (não é NaN e é maior ou igual a 0)
        if (!isNaN(number) && number >= 0) {
            return number; // Retorna o número válido
        } else {
            console.log('Número inválido. Tente novamente.'); // Mensagem de erro caso o número seja inválido
        }
    }
}

// Função para gerar a sequência de Fibonacci até o número n
function generateFibonacciSequence(n) {
    const list = [0, 1]; // Começa com os dois primeiros números da sequência
    for (let i = 2; i <= n; i++) {
        list[i] = list[i - 1] + list[i - 2]; // Calcula o próximo número da sequência
    }
    return list; // Retorna a lista com a sequência gerada
}

// Chama a função para obter um número válido do usuário
const number = getValidNumber();

// Chama a função para gerar a sequência de Fibonacci até o número fornecido
const fibSequence = generateFibonacciSequence(number);

// Variável para armazenar a soma de todos os números da sequência
let sum = 0;

// Loop para calcular a soma da sequência e exibir cada número
for (let i = 0; i <= number; i++) {
    const fibNumber = fibSequence[i];
    sum += fibNumber; // Adiciona o número da sequência à soma
    console.log(`Fibonacci(${i}) = ${fibNumber}`); // Exibe o número da sequência
}

// Exibe a soma total dos números da sequência
console.log(`Soma de todos os números da sequência: ${sum}`);
