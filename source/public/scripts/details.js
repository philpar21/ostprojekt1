import { getById, addTodo, updateTodo } from './controllers/todo-controller.js';
 
const element = document.getElementById('close');

function closeNewTodo(){
    window.open('index.html', "_self");
}

element.addEventListener('click', closeNewTodo);

function closeDetails() {
    window.location.assign('index.html' );
}


const form = document.forms[0];
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('todoid')
    
    if(id) {
        updateTodo(id, data);
    } else {
        addTodo(data);
    }
    
    closeDetails();
});

function setFields() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('todoid')
    if(id) {
        const todo = getById(id)
        document.getElementById('yes').checked = todo.completed;
        document.getElementById('no').checked = !todo.completed;
        document.getElementById('title').value = todo.title;
        document.getElementById('description').value = todo.description;
        document.getElementById('importance').value = todo.importance;
        document.getElementById('duedate').value = todo.duedate;
        document.getElementById('create').style.display = 'none';
    } else {
        document.getElementById('update').style.display = 'none';
        document.getElementById('no').checked = true;
    }
}
setFields()


