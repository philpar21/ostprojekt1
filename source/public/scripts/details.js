import { getById, addTodo, updateTodo, deleteTodo } from './controllers/todo-controller.js';
 
const element = document.getElementById('close');

function closeNewTodo(){
    window.open('index.html', "_self");
}

element.addEventListener('click', closeNewTodo);

function closeDetails() {
    window.location.assign('index.html' );
}

function getUrlId() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('todoid')
}


const form = document.forms[0];
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const entries = formData.entries();
    const data = Object.fromEntries(entries);
    const id = getUrlId();
    if(id) {
        updateTodo(id, data);
    } else {
        addTodo(data);
    }
    
    closeDetails();
});

const deleteButton = document.getElementById('delete')
deleteButton.addEventListener('click', () => {
    const id = getUrlId();
    deleteTodo(id);
    closeDetails();
})

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
        document.getElementById('duedate').value = new Date(todo.duedate).toISOString().split('T')[0];
        document.getElementById('create').style.display = 'none';
    } else {
        document.getElementById('update').style.display = 'none';
        document.getElementById('delete').style.display = 'none';
        document.getElementById('no').checked = true;
    }
}
setFields()


