import { getTodos, markAsDone } from './controllers/todo-controller.js';

let nameSorted = 'none';
let dueDateSorted = 'none';
let creationDateSorted = 'none';
let importanceSorted = 'none';
let showOnlyCompleted = false;

function clearSortedVars(typeIgnored) {
    nameSorted = typeIgnored === 'name' ? nameSorted : 'none';
    dueDateSorted = typeIgnored === 'duedate' ? dueDateSorted : 'none';;
    creationDateSorted = typeIgnored === 'creationdate' ? creationDateSorted : 'none';;
    importanceSorted = typeIgnored === 'importance' ? importanceSorted : 'none';;
}

const element = document.getElementById('createtodo');
element.addEventListener('click', addNewTodo);
function addNewTodo(){
    window.open('details.html', "_self");
}

function clearLabels() {
    document.querySelector('[data-sort="name"]').innerHTML = 'Name';
    document.querySelector('[data-sort="due-date"]').innerHTML = 'Due Date';
    document.querySelector('[data-sort="creation-date"]').innerHTML = 'Creation Date';
    document.querySelector('[data-sort="importance"]').innerHTML = 'Importance';
}

/* Sort functions */

function sortAndDisplayElementsByName() {
    const nameSorting = document.querySelector('[data-sort="name"]');
    const todos = getTodos();
    clearLabels();
    clearSortedVars('name')
    
    if (nameSorted === 'low-high') {
        document.getElementById('item-wrapper').innerHTML = "";
        todos.sort(function(a, b){
            if(a.title > b.title) { return -1; }
            if(a.title < b.title) { return 1; }
            return 0;
        })
        renderTodos(todos);
        nameSorting.innerHTML = 'Name ↑';
        nameSorted = 'high-low';
        return;
    }
    
    nameSorting.innerHTML = 'Name ↓';
    todos.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    })
    document.getElementById('item-wrapper').innerHTML = "";
    renderTodos(todos);
    nameSorted = 'low-high'
}

function sortAndDisplayElementsByDueDate() {
    const sortingButton = document.querySelector('[data-sort="due-date"]');
    const todos = getTodos();
    clearLabels();
    clearSortedVars('duedate')
    
    if(dueDateSorted === 'low-high') {
        sortingButton.innerHTML = 'Due Date ↑';
        todos.sort(function(a, b){
            if(a.duedate > b.duedate) { return -1; }
            if(a.duedate < b.duedate) { return 1; }
            return 0;
        })
        document.getElementById('item-wrapper').innerHTML = "";
        renderTodos(todos);
        dueDateSorted = 'high-low';
        return;
    }
    
    sortingButton.innerHTML = 'Due Date ↓';
    todos.sort(function(a, b){
        if(a.duedate < b.duedate) { return -1; }
        if(a.duedate > b.duedate) { return 1; }
        return 0;
    })
    document.getElementById('item-wrapper').innerHTML = "";
    renderTodos(todos);
    dueDateSorted = 'low-high';
    
}

function sortAndDisplayElementsByCreationDate() {
    const sortingButton = document.querySelector('[data-sort="creation-date"]');
    const todos = getTodos();
    clearLabels();
    clearSortedVars('creationdate')
    
    if(creationDateSorted === 'low-high') {
        sortingButton.innerHTML = 'Creation Date ↑';
        todos.sort(function(a, b){
            if(a.creationdate > b.creationdate) { return -1; }
            if(a.creationdate < b.creationdate) { return 1; }
            return 0;
        })
        document.getElementById('item-wrapper').innerHTML = "";
        renderTodos(todos);
        creationDateSorted = 'high-low';
        return;
    }
    
    
    sortingButton.innerHTML = 'Creation Date ↓';
    todos.sort(function(a, b){
        if(a.creationdate < b.creationdate) { return -1; }
        if(a.creationdate > b.creationdate) { return 1; }
        return 0;
    })
    document.getElementById('item-wrapper').innerHTML = "";
    renderTodos(todos);
    creationDateSorted = 'low-high';
}


function sortAndDisplayElementsByImportance() {
    const sortingButton = document.querySelector('[data-sort="importance"]');
    const todos = getTodos();
    clearLabels();
    clearSortedVars('importance')
    
    if(importanceSorted === 'low-high') {
        sortingButton.innerHTML = 'Importance ↑';
        todos.sort(function(a, b){
            if(a.importance > b.importance) { return -1; }
            if(a.importance < b.importance) { return 1; }
            return 0;
        })
        document.getElementById('item-wrapper').innerHTML = "";
        renderTodos(todos);
        importanceSorted = 'high-low';
        return;
    }
    
    sortingButton.innerHTML = 'Importance ↓';
    todos.sort(function(a, b){
        if(a.importance < b.importance) { return -1; }
        if(a.importance > b.importance) { return 1; }
        return 0;
    })
    document.getElementById('item-wrapper').innerHTML = "";
    renderTodos(todos);
    importanceSorted = 'low-high';
}

function markCompleted(){
    const elementCompleted = document.getElementById('taskcomplete');
    if (showOnlyCompleted) {
        elementCompleted.innerHTML = 'Complete';
        elementCompleted.classList.add('selected')
    } else {
        elementCompleted.innerHTML = 'Show completed';
        elementCompleted.classList.remove('selected')
    }
}

function toggleCompletedOnly() {
    showOnlyCompleted = !showOnlyCompleted;
    markCompleted();
    const todos = getTodos();    
    document.getElementById('item-wrapper').innerHTML = "";
    renderTodos(todos);
}

document.querySelector(".filters").addEventListener("click", (event) => {
    const sortType = event.target.attributes['data-sort'].value;
    if (sortType === 'name') {
        sortAndDisplayElementsByName();
    }

    if (sortType === 'due-date') {
        sortAndDisplayElementsByDueDate();
    }

    if (sortType === 'creation-date') {
        sortAndDisplayElementsByCreationDate();
    }

    if (sortType === 'importance') {
        sortAndDisplayElementsByImportance();
    }

    if (sortType === 'completed') {
        toggleCompletedOnly()
    }

})

function divCreator(innerHTML, className) {
    const div = document.createElement("div");
    div.className = className
    div.innerHTML = innerHTML;

    return div;
}

function renderTodos(todos) {
    const itemWrapper = document.getElementById('item-wrapper');
    const filteredTodos = showOnlyCompleted ? todos.filter(todo => todo.completed) : todos
    filteredTodos.forEach(todo => {
        const {completed, title, description, importance, duedate, _id} = todo;
        const item = document.createElement("div");
        item.className = "item"

        const date = divCreator(new Date(duedate).toISOString().split('T')[0], "date");
        item.appendChild(date);

        const titleTodo = divCreator(title, "titleTodo");
        item.appendChild(titleTodo);

        const importanceTodo = divCreator(importance, "importance");
        item.appendChild(importanceTodo);

        const buttonWrapper = document.createElement("div");
        buttonWrapper.className = "doneButton"
        
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.className = 'donebutton';
        radioButton.value = `${_id}`;
        radioButton.name = `${_id}`;
        radioButton.checked = completed ? 'checked' : undefined;
        radioButton.onclick = (event) => {
            markAsDone(event.target.value)
        }
        buttonWrapper.appendChild(radioButton)
        const radioLabel = document.createElement('label');
        radioLabel.for = "donebutton";
        radioLabel.innerHTML = "Mark as done";
        buttonWrapper.appendChild(radioLabel)

        item.appendChild(buttonWrapper);

        const descriptionTodo = divCreator(description, "description");
        item.appendChild(descriptionTodo);

        const editButtonWrapper = document.createElement('div')
        editButtonWrapper.className = 'editbutton';
        const editButton = document.createElement('a');
        editButton.type = "button"
        editButton.id = "edit"
        editButton.className = "standard-btn";
        editButton.innerHTML = 'Edit';
        editButton.setAttribute('href', `${window.location.origin}/details.html?todoid=${_id}`);
        editButtonWrapper.appendChild(editButton);
        item.appendChild(editButtonWrapper);

        itemWrapper.appendChild(item)
    });
}


function initialize(){
    const todos = getTodos();
    sortAndDisplayElementsByName(todos)
}
/* Initialize app with default state */
initialize();









