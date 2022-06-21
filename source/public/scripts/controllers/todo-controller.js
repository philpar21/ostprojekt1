import * as model from "../services/todo-service.js";


export function addTodo(data) {
    data.completed = data.completed === 'yes';
    model.addTodo(data);
}

export function getTodos() {
    return model.getTodos();
}

export function getById(id) {
    return model.getById(id)
}

export function updateTodo(id, data) {
    data.completed = data.completed === 'yes';
    model.updateTodo(id, data);
}

export function markAsDone(id) {
    model.markAsDone(id);
}

export function deleteTodo(id) {
    model.deleteTodo(id);
}