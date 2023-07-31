const result = document.getElementById('result')

const printEvenNumbers = () => {
    let output = ''

    for (let i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            output += i + ' '
        }
    }

    result.innerHTML = output
}