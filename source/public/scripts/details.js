/* import storage function */

// import { storageController } from './details-storage.js';

/* close without save */

const element = document.getElementById('close');

function closeNewTodo(){
    window.open('index.html', "_self");
}

element.addEventListener('click', closeNewTodo);

/* save form data to local storage */

const form = document.forms[0];

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const entries = formData.entries();
    const data = Object.fromEntries(entries)

    for (const formElement of formData) {
        console.log(formElement);
    }

    console.log(data);

    // storageController("todos", data);

    localStorage.setItem("todos", JSON.stringify(data))

});

