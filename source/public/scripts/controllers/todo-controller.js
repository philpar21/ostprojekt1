import * as model from "../services/todostoreAPIcall.js";


function addTodo(data) {
    data.completed = data.completed === 'yes';
    model.addTodo(data);
}

function getTodos() {
    return model.getTodos();
}

function getById(id) {
    return model.getById(id)
}

function updateTodo(id, data) {
    data.completed = data.completed === 'yes';
    model.updateTodo(id, data);
}

function markAsDone(id) {
    model.markAsDone(id);
}

function deleteTodo(id) {
    model.deleteTodo(id);
}

export { addTodo, getTodos, getById, updateTodo, markAsDone, deleteTodo };