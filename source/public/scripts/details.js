/* import storage function */

import { setTodo, generateID } from './storage-controller.js';

/* close without save */

const element = document.getElementById('close');

function closeNewTodo(){
    window.open('index.html', "_self");
}

element.addEventListener('click', closeNewTodo);

/* go to details function */

function closeDetails() {
    window.location.replace('index.html' );
}



/* save form data to local storage */

const form = document.forms[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    formData.append('id', generateID());
    const entries = formData.entries();
    const data = Object.fromEntries(entries);

    // eslint-disable-next-line no-restricted-syntax
    for (const formElement of formData) {
        console.log(formElement);
    }

    setTodo(data);

    closeDetails();

});

