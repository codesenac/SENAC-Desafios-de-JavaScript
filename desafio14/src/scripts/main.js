// Função para criar um novo elemento de tarefa
const createTaskElement = (taskText) => {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    const label = document.createElement('label')
    label.textContent = taskText

    li.appendChild(checkbox)
    li.appendChild(label)
    return li
}

// Função para adicionar uma nova tarefa à lista
const addTask = () => {
    const newTaskInput = document.getElementById('newTask')
    const taskText = newTaskInput.value.trim()

    if (taskText !== '') {
        const taskList = document.getElementById('taskList')
        const newTaskElement = createTaskElement(taskText)
        taskList.appendChild(newTaskElement)
        newTaskInput.value = ''
    }
}

// Evento de clique no botão "Adicionar Tarefa"
const addTaskBtn = document.getElementById('addTaskBtn')
addTaskBtn.addEventListener('click', addTask)

// Evento de pressionar "Enter" no input para adicionar a tarefa
const newTaskInput = document.getElementById('newTask')
newTaskInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) { // 13 é o código da tecla "Enter"
        addTask()
    }
})