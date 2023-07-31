const result = document.getElementById('result')

const findDivisibleByThree = () => {
    let numbers = []
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            numbers.push(i);
        }
    }

    result.innerHTML = numbers
}