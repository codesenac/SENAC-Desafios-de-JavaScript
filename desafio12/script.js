const person = { name: 'João', age: 30 }

const printPersonInfo = ({ name, age }) => {
  console.log(`Olá, meu nome é ${name} e eu tenho ${age} anos.`)
}

printPersonInfo(person) // Saída: Olá, meu nome é João e eu tenho 30 anos.