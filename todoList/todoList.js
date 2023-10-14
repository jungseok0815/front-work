let todoList =  localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [];


window.onload =function(){
    drawTodo2(todoList);
}
function addTodo(){
    const todoTitle = document.getElementById("serch-in").value
    function getTodoNode(){
        let data = {
            title : todoTitle,
            isDone : false,
            date : new Date().getTime()
        };  
        todoList.push(data);
        localStorage.setItem("todoList", JSON.stringify(todoList))
        drawTodo2(todoList);
        document.getElementById("serch-in").value = "";
    }
    todoTitle.trim() ==="" ?  false : getTodoNode();
}
function drawTodo2(data){
    const toDoListView = document.getElementById('todo-list-view');
    toDoListView.replaceChildren();
    for(let todoNode of data){
        const todoNode2 = document.createElement('div');
        todoNode2.innerText = todoNode.title;
        todoNode.isDone === true ? todoNode2.classList.add('done') : ""
        todoNode2.onclick = function(){
            this.classList.length === 0 ?  this.classList.add('done') :this.classList.remove('done');
            todoNode.isDone = !todoNode.isDone;
            todoList =  todoList.map(todo =>  todo.date === todoNode.date ? todoNode :  todo )
            localStorage.setItem("todoList", JSON.stringify(todoList))
        }

        const removebtn = document.createElement('button');
        removebtn.innerHTML = 'x';
        removebtn.className = 'remove-btn';
        removebtn.onclick = function(){
            this.parentNode.remove();
            todoList = todoList.filter((i)=>{
                return i.date !== todoNode.date;
            })
            localStorage.setItem("todoList", JSON.stringify(todoList))
        }
        todoNode2.appendChild(removebtn);
        toDoListView.appendChild(todoNode2);
   }
}















