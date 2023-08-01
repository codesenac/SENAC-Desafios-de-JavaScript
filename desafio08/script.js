const checkPositiveNumber = (numero) => {
    if (numero > 0) {
        return true
    } else {
        return false
    }
}

console.log(checkPositiveNumber(5)) // Saida: true (é positivo)
console.log(checkPositiveNumber(-3)) // Saida: false (é negativo)
console.log(checkPositiveNumber(0)) // Saida: false (é igual a zero)