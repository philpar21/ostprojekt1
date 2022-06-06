/* generate ID */

function generateID() {
    return Math.floor(Math.random() * 10000000);
}



/*  set to do  */

function setTodo(data) {
    localStorage.setItem('todos', JSON.stringify(data));
}


/*  get to do  */

function getTodo() {
    return JSON.parse(localStorage.getItem('todos') || []);
}




export { generateID, setTodo, getTodo };


