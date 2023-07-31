const result = document.getElementById('result')

const printMultiplicationTable = () => {
    let output = ''

    for (let i = 1; i <= 10; i++) {
        const multiplicationResult = 5 * i
        output += `5 x ${i} = ${multiplicationResult}<br>`
    }

    result.innerHTML = output
}