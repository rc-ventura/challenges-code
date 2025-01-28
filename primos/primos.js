const prompt = require('prompt-sync')()

let number 

function getValidNumber(number) {
    while(true) {
        const input = prompt('Digite um número maior que 1: ')
        number = Number(input)

        if (!isNaN(number) && number > 1) {
            break
        } else {
            console.log('Número inválido. Tente novamente.')
        }       
    }
    
    return number
}

function isPrime(number) {
    
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return number > 1
}

function getPrimesFrom(number) {
    const primes = [];
    
    for (let i = 2; i <= number; i++){
        if (isPrime(i)) { 
            primes.push(i);
        }
    }
    return primes;
}


const validNumber = getValidNumber(number)
console.log("Numero valido", validNumber)

const ehPrimo = isPrime(validNumber)
console.log(ehPrimo ? 'É primo' : 'Não é primo')

const primesFromNumber = getPrimesFrom(validNumber);
console.log('Números primos a partir do número escolhido:', primesFromNumber);