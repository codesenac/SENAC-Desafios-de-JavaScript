const fizzBuzz = (numero) => {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz"
    } else if (numero % 3 === 0) {
        return "Fizz"
    } else if (numero % 5 === 0) {
        return "Buzz"
    } else {
        return numero
    }
}

console.log(fizzBuzz(3))  // Saida: "Fizz"
console.log(fizzBuzz(5))  // Saida: "Buzz"
console.log(fizzBuzz(15)) // Saida: "FizzBuzz"
console.log(fizzBuzz(7))  // Saida: 7 (não é divisível por 3 ou 5)