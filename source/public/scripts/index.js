// import { getTodo } from './storage-controller.js';

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
btn.id = // get ID here?

/* Add todos */

function getNewTodo(){
    const getTodo = JSON.parse(localStorage.getItem("todos")) || []
    console.log(getTodo);

     const { completed, title, description, importance, duedate, id } = getTodo;

     const addTodo = document.createElement('div');
     addTodo.innerHTML = `Completed ${completed} Title ${title} Description ${description} Importance ${importance} Due date ${duedate}`;
     document.querySelector('.emptydodo').appendChild(addTodo);

     document.querySelector('.emptydodo').appendChild(btn);
}

getNewTodo();

const element2 = document.getElementById('id');

element2.addEventListener('click', console.log('edit'));





