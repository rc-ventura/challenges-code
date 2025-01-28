// Importa o módulo 'prompt-sync' para capturar entradas do usuário
const prompt = require('prompt-sync')();

// Inicializa a lista de Fibonacci com os dois primeiros números: 0 e 1
const list = [];
list[0] = 0;
list[1] = 1;

// Função recursiva para calcular o número de Fibonacci na posição 'n'
// Usando memoização para armazenar os resultados já calculados
function fibonacci(n) {
    // Caso base: se 'n' for 0 ou 1, retorna diretamente o valor já armazenado
    if (n < 2) {
        return list[n];
    } else {
        // Se o valor de Fibonacci não foi calculado antes, calcula de forma recursiva
        if (list[n] === undefined) {
            list[n] = fibonacci(n - 1) + fibonacci(n - 2); // Calcula e armazena o resultado
        }
        return list[n]; // Retorna o número de Fibonacci já calculado (com memoização)
    }
}

// Função para obter um número válido do usuário (maior ou igual a 0)
function getValidNumber() {
    while (true) {
        const input = prompt('Digite um número maior ou igual a 0: '); // Solicita o número
        const number = Number(input); // Converte o valor para um número

        // Verifica se o número é válido (não é NaN e é maior ou igual a 0)
        if (!isNaN(number) && number >= 0) {
            return number; // Retorna o número válido
        } else {
            console.log('Número inválido. Tente novamente.'); // Exibe mensagem de erro
        }
    }
}

// Chama a função para obter um número válido do usuário
const number = getValidNumber();

// Inicializa um array vazio para armazenar a sequência de Fibonacci e uma variável para a soma
const fibSequence = [];
let sum = 0;

// Laço para calcular e imprimir os números de Fibonacci até o valor informado pelo usuário
for (let i = 0; i <= number; i++) {
    const fibNumber = fibonacci(i); // Chama a função recursiva para calcular o número de Fibonacci
    fibSequence.push(fibNumber); // Adiciona o número calculado à lista
    sum += fibNumber; // Adiciona o número à soma total
    console.log(`Fibonacci(${i}) = ${fibNumber}`); // Exibe o número de Fibonacci calculado
}

// Exibe a soma de todos os números da sequência de Fibonacci
console.log(`Soma de todos os números da sequência: ${sum}`);
