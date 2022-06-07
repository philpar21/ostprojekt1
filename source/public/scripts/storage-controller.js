/* generate ID */

const generatedID = Math.floor(Math.random() * 10000000);



/*  set to do  */

function setTodo(data) {
    localStorage.setItem(generatedID, JSON.stringify(data));
}

/* trials to get all keys */

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}: ${(localStorage.getItem(key))}`);
}

Object.keys(localStorage).forEach(function(key){
    console.log(JSON.parse(localStorage.getItem(key)));
});

/*  get to do  */

function getTodo() {
    return JSON.parse(localStorage.getItem(localStorage.key(0)) || '[]');
}

/*  update to do  */

function updateTodo(data) {
    localStorage.setItem(localStorage.key(0), JSON.stringify(this.data));
    return this.data;
}


export { generatedID, setTodo, getTodo, updateTodo };


