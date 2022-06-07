/* generate ID */

const generatedID = Math.floor(Math.random() * 10000000);



/*  set to do  */

function setTodo(data) {
    localStorage.setItem(generatedID, JSON.stringify(data));
}



/*  get to do  */

function getTodo() {
    return JSON.parse(localStorage.getItem(localStorage.key(0)) || []);
}


export { generatedID, setTodo, getTodo };


