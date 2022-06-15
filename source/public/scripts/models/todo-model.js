const items = JSON.parse(localStorage.getItem('todos') || '[ ]');

export function addTodo(data) {
    items.push(data);
    localStorage.setItem('todos', JSON.stringify(items));
}

export function getTodos() {
    return items;
}

export function getById(id) {
    return items.find(item => item.id == id);
}

export function updateTodo(id, item) {
    var foundIndex = items.findIndex(item => item.id == id);
    items[foundIndex] = item;
    console.log("🚀 ~ file: todo-model.js ~ line 26 ~ items[foundIndex]", items[foundIndex])
    localStorage.setItem('todos', JSON.stringify(items));
    return items;
}

export function markAsDone(id) {
    var foundIndex = items.findIndex(item => item.id == id);
    items[foundIndex].completed = true;
    localStorage.setItem('todos', JSON.stringify(items));
}