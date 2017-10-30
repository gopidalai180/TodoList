var todoList = /** @class */ (function () {
    function todoList() {
        this.todos = [];
    }
    todoList.prototype.addtodo = function (input) {
        this.todos.push(input);
    };
    todoList.prototype.updatetodo = function (input) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].todo_id == input.todo_id) {
                this.todos[i].todo_Title = input.todo_Title;
                break;
            }
        }
    };
    todoList.prototype.deletetodo = function (input) {
        //console.log(input);
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].todo_id == input) {
                //console.log(this.todos[i]);
                //console.log(i);
                this.todos.splice(i, 1);
                break;
            }
        }
    };
    todoList.prototype.marktodo = function (input) {
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].todo_id == input) {
                this.todos[i].status = false;
                break;
            }
        }
    };
    todoList.prototype.display = function () {
        console.log(this.todos);
    };
    return todoList;
}());
var toDoList = new todoList();
function addTodo(id, todo_Title, status) {
    toDoList.addtodo({
        todo_id: id,
        todo_Title: todo_Title,
        status: status
    });
}
function updateTodo(id, todo_Title, status) {
    toDoList.updatetodo({
        todo_id: id,
        todo_Title: todo_Title,
        status: status
    });
}
function displayTodos() {
    toDoList.display();
}
function deleteTodos(id) {
    toDoList.deletetodo(id);
    displayTodos();
}
function markTodos(id) {
    toDoList.marktodo(id);
}
