const converterHorasParaSegundos = (horas) => {
    return horas * 3600
}

console.log(converterHorasParaSegundos(2)) // Saida: 7200 (2 horas são equivalentes a 7200 segundos)
console.log(converterHorasParaSegundos(1.5)) // Saida: 5400 (1.5 horas são equivalentes a 5400 segundos)
console.log(converterHorasParaSegundos(0.5)) // Saida: 1800 (0.5 horas são equivalentes a 1800 segundos)