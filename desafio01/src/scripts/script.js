
const result = document.querySelector('#result')

const pairNumbers = () => {
    const inputNumber = parseInt(document.querySelector('.input-number').value)

    if(inputNumber % 2 === 0) {
        result.innerHTML = `O número ${inputNumber} é par`
    } else {
        result.innerHTML = `O número ${inputNumber} não é par`
    }
}