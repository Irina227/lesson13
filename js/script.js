// todo-control
// header-input
// todo todo-list
// todo-completed

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");
const headerButton = document.querySelector("header-button")
const todoItem = document.querySelector("todo-item")

const toDoData = []; //массив, куда записываются все введенные значения input



const showText = function () {
  todoItem.textContent = ''
}
headerButton.addEventListener('click', function(){
  localStorage.setItem('todo-item', header-input.value) //сохранение в localstorage
})




const render = function () {
  //массив перебора объектов
  todoList.innerHTML = ''
  todoCompleted.innerHTML = '' //очищение задач после добавления новых, проверка на пустую строку
  

  toDoData.forEach(function (item) { //перебор массива
    const li = document.createElement("li");

    li.classList.add("todo-item");

    li.innerHTML = '<span class="text-todo">' + item.text +
          '<div class="todo-buttons">' +
					'<button class="todo-remove"></button>' + 
					'<button class="todo-complete"></button>' + //добавление новой верстки на страницу
				'</div>'

        if (item.completed) {
          todoCompleted.append(li)
        } else {
          todoList.append(li)//помещение задач каждую в свой список, выполненный или нет
        }

        li.querySelector('.todo-complete').addEventListener('click', function(){
          item.completed = !item.completed //при клике на галочку задачи перемещаются из одного блока в другой
          render()
        })


        li.querySelector('.todo-remove').addEventListener('click', function(){
          if (item.completed) {
            todoCompleted.remove(li)
          } else {
            todoList.remove(li) //удаление дел на кнопку
          }
          render()
        })



  });
};


todoControl.addEventListener("submit", function (event) {
  event.preventDefault(); //останавливает перезагрузку страницы и оставляет данные

  const newToDo = {
    text: headerInput.value,
    completed: false,  
  };

  toDoData.push(newToDo);//добавляет в массив новые объекты
  headerInput.value = ' '; //очищает строку от записанных элементов после события

  render(); //запуск функции
});
showText()