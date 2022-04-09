const form = document.querySelector('#task-form');

const taskInput = document.querySelector('#task');

const ul = document.querySelector('.collection');

alob();

function alob() {
  form.addEventListener('submit', addTask);
}
function addTask(e){
  if(taskInput.value === '') {
    alert('Add a task');
  }else {
    const lis = document.createElement('li');

    lis.className('task');

    lis.append('ul');

    document.querySelector('.task').textContent = taskInput.value;
    console.log(taskInput.value);
  }
  e.preventDefault();
}
localStorage.setItem(taskInput.value);


