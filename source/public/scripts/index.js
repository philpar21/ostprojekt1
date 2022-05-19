const element = document.getElementById('createtodo');

function addNewTodo(){
    window.open('details.html', "_self");
}

element.addEventListener('click', addNewTodo);

const elementCompleted = document.getElementById('taskcomplete');

function markCompleted(){
    elementCompleted.style.backgroundColor = 'red';
    elementCompleted.style.color = 'white';
    elementCompleted.innerHTML = 'Complete';
}

elementCompleted.addEventListener('click', markCompleted);

const sorting = document.querySelector('.filters-drpd');

function sortElements(){
    sorting.innerHTML = '↑';
}

sorting.addEventListener('click', sortElements);

