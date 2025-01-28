const prompt = require('prompt-sync')();

const list = [];
list[0] = 0;
list[1] = 1;

function fibonacci(n) {
    if (n < 2) {
        return list[n];
    } else {
        if (list[n] === undefined) {
            list[n] = fibonacci(n - 1) + fibonacci(n - 2);
        }
        return list[n];
    }
}

function getValidNumber() {
    while (true) {
        const input = prompt('Digite um número maior ou igual a 0: ');
        const number = Number(input);

        if (!isNaN(number) && number >= 0) {
            return number;
        } else {
            console.log('Número inválido. Tente novamente.');
        }
    }
}

const number = getValidNumber();
const fibSequence = [];
let sum = 0;

for (let i = 0; i <= number; i++) {
    const fibNumber = fibonacci(i);
    fibSequence.push(fibNumber);
    sum += fibNumber;
    console.log(`Fibonacci(${i}) = ${fibNumber}`);
}

console.log(`Soma de todos os números da sequência: ${sum}`);