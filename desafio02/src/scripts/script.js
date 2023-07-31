const result = document.getElementById('result')

const calculateSum = () => {
    let sum = 0

    for (let i = 1; i <= 200; i++) {
        sum += i
    }

    result.textContent = `A soma dos números de 1 a 200 é: ${sum}`
}