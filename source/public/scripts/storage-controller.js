/*  set Todo  */

function setTodo(data) {

    const todoId = Math.floor(Math.random() * 10000000);
    data.push('ourNewIDforStorage', todoId);
    localStorage.setItem(todoId, JSON.stringify(data))
}


/*  get Todo  */


function getTodo(key) {
    return JSON.parse(localStorage.getItem(key) || []);

}

/* generate ID */

function generateID() {
    return Math.floor(Math.random() * 10000000);
}

export { setTodo, getTodo, generateID };

