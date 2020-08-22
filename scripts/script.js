"use strict";

const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed');

const toDoData = [
    // {
    //     value: 'сварить кофе',
    //     completed: false
    // },
    // {
    //     value: 'помыть посуду',
    //     completed: true
    // }

];



// console.log(localStorage.getItem('сварить кофе')); 
// console.log(localStorage.key('сварить кофе')); 
// console.log(Object.keys(localStorage));
// console.log(Object.getOwnPropertyNames(localStorage));


const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    let keys = Object.keys(localStorage);
    for(let key of keys) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = `<span class="text-todo">${key}</span>
        <div class="todo-buttons"><button class="todo-remove"></button>
        <button class="todo-complete"></button></div>`;

        if(localStorage.getItem(key) === 'true'){
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        const btnTodoComplete = li.querySelector('.todo-complete');

        btnTodoComplete.addEventListener('click', function(){

            if (localStorage.getItem(key) === 'true') {
            console.log('true to false');
            localStorage.setItem(key, false);
        } else {
            console.log('false to true');
            localStorage.setItem(key, true);
        }
            render();
        });

        const btnTodoRemove = li.querySelector('.todo-remove');

        btnTodoRemove.addEventListener('click', function(){

            localStorage.removeItem(key);
         
            render();
        });
  }
};

todoControl.addEventListener('submit', function(event){
    event.preventDefault();

    if (headerInput.value === '')
    {alert ('Пустые дела добавляться не должны'); }
    else
    {
        localStorage.setItem(headerInput.value, false);
        headerInput.value = '';
    }

    render();
});

render();

