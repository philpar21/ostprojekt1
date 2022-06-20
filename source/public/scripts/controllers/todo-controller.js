import * as model from "../models/todo-model.js";

export const generatedID = () => Math.floor(Math.random() * 10000000);

export function addTodo(data) {
    data.id = generatedID();
    data.completed = data.completed === 'yes';
    data.creationdate = Date.now()
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