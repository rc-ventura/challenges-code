// Importa o módulo 'prompt-sync' para capturar entradas do usuário
const prompt = require('prompt-sync')()

// Variável 'number' é definida globalmente
let number 

// Função para obter um número válido do usuário (maior que 1)
function getValidNumber(number) {
    // Loop infinito até que um número válido seja fornecido
    while(true) {
        const input = prompt('Digite um número maior que 1: ') // Solicita um número ao usuário
        number = Number(input) // Converte a entrada para um número

        // Verifica se o número é válido (não é NaN e é maior que 1)
        if (!isNaN(number) && number > 1) {
            break // Se for válido, sai do loop
        } else {
            console.log('Número inválido. Tente novamente.') // Caso o número seja inválido, exibe mensagem
        }       
    }
    
    return number // Retorna o número válido
}

// Função para verificar se um número é primo
function isPrime(number) {
    // Verifica se o número é divisível por algum número entre 2 e (n-1)
    for (let i = 2; i < number; i++) {
        if (number % i === 0) { // Se houver algum divisor, não é primo
            return false
        }
    }
    // Se não encontrou nenhum divisor, o número é primo
    return number > 1
}

// Função para obter todos os números primos até o número fornecido
function getPrimesFrom(number) {
    const primes = []; // Array para armazenar os números primos
    
    // Loop para verificar números de 2 até o número fornecido
    for (let i = 2; i <= number; i++){
        if (isPrime(i)) { // Se o número for primo, adiciona à lista
            primes.push(i);
        }
    }
    return primes; // Retorna a lista de números primos
}

// Chama a função para obter um número válido do usuário
const validNumber = getValidNumber(number)
console.log("Número válido", validNumber) // Exibe o número válido escolhido

// Chama a função isPrime para verificar se o número válido é primo
const ehPrimo = isPrime(validNumber)
console.log(ehPrimo ? 'É primo' : 'Não é primo') // Exibe se o número é primo ou não

// Chama a função getPrimesFrom para obter os números primos até o número fornecido
const primesFromNumber = getPrimesFrom(validNumber);
console.log('Números primos a partir do número escolhido:', primesFromNumber); // Exibe os números primos encontrados
