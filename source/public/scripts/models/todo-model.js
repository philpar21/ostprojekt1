let todos = [];
todos = await getItemsFromAPI()
localStorage.setItem('todos', JSON.stringify(todos));

function getAPIURL() {
    return 'http://localhost:3005/todos';
}

async function getItemsFromAPI() {
    const todoAPIURL = getAPIURL();
    try {
        const res = await fetch(todoAPIURL)
        const result =  await res.json();     
        return result;   
    } catch (error) {
        throw error;
    }
}

export async function addTodo(data) {
    const todoAPIURL = getAPIURL();
    try {
        let response = await fetch(todoAPIURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        let result = await response.json();
        todos.push(data);
        localStorage.setItem('todos', JSON.stringify(todos));
        return result;
    } catch (error) {
        throw error;
    }

    
}

export function getTodos() {
    return todos;
}

export function getById(id) {
    return todos.find(todo => todo._id == id);
}

export async function updateTodo(id, todo) {
    var foundIndex = todos.findIndex(item => item.id == id);
    todos[foundIndex] = todo;
    localStorage.setItem('todos', JSON.stringify(todos));
    const todoAPIURL = getAPIURL();
    try {
        let response = await fetch(`${todoAPIURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(todo)
        })
        let result = await response.json();
    } catch (error) {
        throw error;
    }
    return todos;
}

export async function markAsDone(id) {
    var foundIndex = todos.findIndex(item => item._id == id);
    todos[foundIndex].completed = true;
    localStorage.setItem('todos', JSON.stringify(todos));
    const todoAPIURL = getAPIURL();
    try {
        let response = await fetch(`${todoAPIURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(todos[foundIndex])
        })
        let result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id != id)
    localStorage.setItem('todos', JSON.stringify(newTodos));
    const todoAPIURL = getAPIURL();

    try {
        let response = await fetch(`${todoAPIURL}/${id}`, {
                method: 'DELETE',
            })
        let result = await response.json();
    } catch (error) {
        throw error;
    }

}