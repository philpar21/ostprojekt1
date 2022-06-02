/*  local storage controller */

function storageController(key, data) {
    localStorage.setItem("todos", JSON.stringify(data))
}

 /* function getTodo(key, data) {
    JSON.parse(localStorage.getItem("todos", data) || []);
} */

export { storageController };