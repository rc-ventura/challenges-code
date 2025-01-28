// Importa o módulo 'prompt-sync' para capturar entradas do usuário
const prompt = require('prompt-sync')()

// Array 'primes' para armazenar os números primos encontrados
let primes = []

// Função recursiva que recebe um número e retorna um array com todos os números primos até esse número
function getPrimesRecursive(number) {
    
    // Caso base: se o número for menor que 2, retorna o array de primos já encontrado
    if (number < 2) {
        return primes // Retorna o array de primos quando o número for menor que 2
    } else {
        // Se o número for primo, adiciona ao array 'primes'
        if (isPrime(number)) {
            primes.push(number); // Adiciona o número primo ao array
        }
        // Chama a função recursivamente com o número anterior
        return getPrimesRecursive(number - 1); // Chama recursivamente com o número decremetado
    }
}

// Função para verificar se um número é primo
function isPrime(number) {
    // Loop para verificar se o número é divisível por qualquer número entre 2 e (n-1)
    for (let i = 2; i < number; i++) {
        if (number % i === 0) { // Se encontrar um divisor, o número não é primo
            return false
        }
    }
    return number > 1 // Se não encontrar divisor, retorna true (número primo)
}

// Solicita ao usuário um número e converte a entrada para número
const input = prompt('Digite um número maior que 1: ')
number = Number(input)

// Chama a função recursiva para obter os números primos até o número informado
const primesFromNumber = getPrimesRecursive(number);

// Exibe os números primos encontrados até o número informado
console.log('Números primos a partir do número escolhido:', primesFromNumber);
