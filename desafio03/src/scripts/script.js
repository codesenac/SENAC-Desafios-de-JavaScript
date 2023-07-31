const result = document.getElementById('result')

const printNumbersDescending = () => {
    let output = ''
    for (let i = 10; i >= 1; i--) {
        output += `${i} \u{1F449} `
    }
    result.innerHTML = output
}
