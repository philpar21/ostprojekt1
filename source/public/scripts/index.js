
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

/* Add todos manually */

const element2 = document.getElementById('clicktodos');

function getNewTodo(){
     const getTodo = JSON.parse(localStorage.getItem("todos")) || []
     console.log(getTodo);

     let { completed, title, description, importance, duedate } = getTodo;

     const addTodo = document.createElement('div');
     addTodo.innerHTML = `Completed ${completed} Title ${title} Description ${description} Importance ${importance} Due date ${duedate}`;
     document.querySelector('.emptydodo').appendChild(addTodo);
}

element2.addEventListener('click', getNewTodo);





