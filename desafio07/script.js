const checkLeapYear = (ano) =>{
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return true
    } else {
        return false
    }
}

console.log(checkLeapYear(2020)) // Saida: true (é um ano bissexto)
console.log(checkLeapYear(2023)) // Saida: false (não é um ano bissexto)