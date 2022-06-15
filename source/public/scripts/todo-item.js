const addTodo = document.createElement('div');
addTodo.setAttribute('uniqueId', `${uniqueId}`);
document.querySelector('.emptydodo').insertAdjacentElement("beforeend", addTodo);

const dateNew = document.createElement('div');
dateNew.innerHTML = `${duedate}`;
document.querySelector('.dateNew').appendChild(dateNew);

const titletodoNew = document.createElement('div');
titletodoNew.innerHTML = `${title}`;
document.querySelector('.titletodoNew').appendChild(titletodoNew);

const importanceNew = document.createElement('div');
importanceNew.innerHTML = `${importance}`;
document.querySelector('.importanceNew').appendChild(importanceNew);

const donebuttonNew = document.createElement('div');
donebuttonNew.innerHTML = `${completed}`;
document.querySelector('.donebuttonNew').appendChild(donebuttonNew);

const descriptionNew = document.createElement('div');
descriptionNew.innerHTML = `${description}`;
document.querySelector('.descriptionNew').appendChild(descriptionNew);

const editButtonNew = document.createElement('button');
editButtonNew.setAttribute('id', `${uniqueId}`);
editButtonNew.innerHTML = 'Edit';
editButtonNew.type = 'button';
editButtonNew.style.color = '#ffffff';
editButtonNew.style.backgroundColor = '#1f86ff';
editButtonNew.style.borderRadius = '5px';
editButtonNew.style.border = '1px solid transparent';
editButtonNew.style.width = '100px';
editButtonNew.style.height = '40px';
editButtonNew.style.margin = '0 15px 0 0';
editButtonNew.style.padding = '11px 20px 10px';
editButtonNew.style.float = 'right';
document.querySelector('.editButtonNew').appendChild(editButtonNew);
editButtonNew.addEventListener('click', (editTodo));