const form = document.querySelector('.form');
const input = document.querySelector('.input');
const box = document.querySelector('.box');

let todo = [];

const render = () => {
    box.innerHTML = todo.
    map(
    (item) => `
    <p>${item.name}</p>
    <button onclick="deleteTodo(${item.id})">Delete</button>
    <button onclick="editTodo(${item.id})">Edit</button>
    `)
    .join('');
};

const deleteTodo = (id) => {
    todo = todo.filter((item) => item.id !== id);
    render();
}

const editTodo = (id) => {
    const newValue = prompt('');
    todo = todo.map((obj) => (obj.id === id ? {id,name: newValue } : obj));
    render();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    todo.push({name: input.value, id: Date.now() });
    input.value = "";
    render();
});