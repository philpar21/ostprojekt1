/* import storage function */

import { storageController } from './storage-controller.js';

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

/* generate ID */

function generateID() {
    return Math.floor(Math.random() * 10000000);
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

    storageController("todos", data);

    closeDetails();

});

