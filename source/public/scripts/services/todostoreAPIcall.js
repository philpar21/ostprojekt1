let todos = [];
todos = await getItemsFromAPI()

function getAPIURL() {
    return '/todos';
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

async function addTodo(data) {
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

        return result;
    } catch (error) {
        throw error;
    }
}

function getTodos() {
    return todos;
}

function getById(id) {
    return todos.find(todo => todo._id == id);
}

async function updateTodo(id, todo) {
    var foundIndex = todos.findIndex(item => item.id == id);
    todos[foundIndex] = todo;
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
        return result;
    } catch (error) {
        throw error;
    }
}

async function markAsDone(id) {
    var foundIndex = todos.findIndex(item => item._id == id);
    todos[foundIndex].completed = true;
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

async function deleteTodo(id) {
    const todoAPIURL = getAPIURL();

    try {
        let response = await fetch(`${todoAPIURL}/${id}`, {
                method: 'DELETE',
            })
        let result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }

}

export { addTodo, getTodos, getById, updateTodo, markAsDone, deleteTodo}