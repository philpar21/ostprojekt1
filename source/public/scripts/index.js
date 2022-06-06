import { getTodo } from './storage-controller.js';

/* Create todos , open details.js */

const element = document.getElementById('createtodo');

function addNewTodo(){
    window.open('details.html', "_self");
}

element.addEventListener('click', addNewTodo);


/* Show completed */

const elementCompleted = document.getElementById('taskcomplete');

function markCompleted(){
    elementCompleted.style.backgroundColor = 'red';
    elementCompleted.style.color = 'white';
    elementCompleted.innerHTML = 'Complete';
}


/* Sort */

elementCompleted.addEventListener('click', markCompleted);

const sorting = document.querySelector('.filters-drpd');

function sortElements(){
    sorting.innerHTML = '↑';
}

sorting.addEventListener('click', sortElements);

document.querySelector(".filters").addEventListener("click", (event) => {
    console.log(event.target)
})

/* Edit button */

const btn = document.createElement("button");
btn.innerHTML = "Edit";
btn.type = "button";
btn.name = "formBtn";


/* Add todos */

function getNewTodo(){

     const { completed, title, description, importance, duedate, id } = getTodo();

     const addTodo = document.createElement('div');
     addTodo.innerHTML = `Completed ${completed} Title ${title} Description ${description} Importance ${importance} Due date ${duedate} ID ${id}`;
     document.querySelector('.emptydodo').appendChild(addTodo);

     document.querySelector('.emptydodo').appendChild(btn);
}

getNewTodo();







