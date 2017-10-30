// var counter: number;
// counter = 0;
interface todo{
    todo_id: number,
    todo_Title: string,
    status: boolean
}

class todoList{
    public todos: todo[];
    constructor(){
        this.todos = [];
    }

    addtodo(input:todo){
        this.todos.push(input);
    }
    updatetodo(input:todo){
        for(var i = 0;i<this.todos.length;i++){
            if(this.todos[i].todo_id == input.todo_id){
                this.todos[i].todo_Title = input.todo_Title;
                break;
            }
        }
    }
    deletetodo(input:number){
        //console.log(input);
        for(var i = 0;i<this.todos.length;i++){
            if(this.todos[i].todo_id == input){
                //console.log(this.todos[i]);
                //console.log(i);
                this.todos.splice(i,1);
                break;
            }
        }
    }
    marktodo(input:number){
        for(var i = 0;i<this.todos.length;i++){
            if(this.todos[i].todo_id == input){
                this.todos[i].status = false;
                break;
            }
        }
    }
    display() {

        console.log(this.todos);

    }
}
var toDoList = new todoList();

function addTodo(id:number , todo_Title: string, status: boolean){
    toDoList.addtodo({
        todo_id: id,
        todo_Title: todo_Title,
        status: status
    })
}
function updateTodo(id:number,todo_Title: string,status:boolean){
    toDoList.updatetodo({
        todo_id: id,
        todo_Title: todo_Title,
        status: status
    })
}
function displayTodos(){
    toDoList.display();
}
function deleteTodos(id:number){

    toDoList.deletetodo(id);
    displayTodos();
}
function markTodos(id:number){
    toDoList.marktodo(id);
}