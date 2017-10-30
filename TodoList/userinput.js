window.onload = function() {
    var input = document.getElementById('inp');
    var btn = document.getElementById('btn');

    var id = 0;
    var status = true;
    btn.onclick = function () {
        var value = input.value;
        console.log(value);
            addTodo(id, value, status);
            id++;

        input.value = null;
        displaytodo();

        displayTodos();

    };
};

todo_delete = function(id){
    var r = confirm("Are you sure you want to delete?");
    if (r == true) {
        deleteTodos(id);
        displaytodo();
    }


};
todo_mark= function(id) {
    markTodos(id);
    displaytodo();
};
todo_modify = function (id) {

    var editable = document.getElementById("p"+id);
    var button  = document.getElementById("modify"+id);
    if (editable.contentEditable == "true") {
        editable.setAttribute("class","done");
        editable.contentEditable = "false";
        button.innerHTML = "Modify";

    } else {
        editable.setAttribute("class","update");
        editable.setAttribute("contenteditable","true") ;
        button.innerHTML = "Submit";

        SelectText("p"+id);
    }

    updateTodo(id,editable.innerText,true);
    //displaytodo();
};
function displaytodo() {
    var main = document.getElementById("todolist");

    main.innerHTML = null;

    for(var i=0;i<toDoList.todos.length;i++) {
        var todo = document.createElement("div");
        todo.setAttribute("data-id", "div"+toDoList.todos[i].todo_id);

        var titlelist = document.createElement("ul");

        var title  = document.createElement("li");
        title.setAttribute("id", "p"+toDoList.todos[i].todo_id);
        title.setAttribute("contenteditable",false);
        todo.setAttribute("class","status"+toDoList.todos[i].status);
        title.innerText = toDoList.todos[i].todo_Title;
        todo.appendChild(titlelist);
        titlelist.appendChild(title);
        var delete_button = document.createElement("button");
        delete_button.setAttribute("id","delete");
        delete_button.setAttribute("onclick","todo_delete("+toDoList.todos[i].todo_id+")");

        delete_button.innerText = "Delete";
        titlelist.appendChild(delete_button);
        var modify_button = document.createElement("button");
        modify_button.innerText = "Modify";
        modify_button.setAttribute("id","modify"+toDoList.todos[i].todo_id);
        modify_button.setAttribute("onclick","todo_modify("+toDoList.todos[i].todo_id+")");
        titlelist.appendChild(modify_button);
        var mark_button = document.createElement("button");
        mark_button.innerText = "Complete";
        mark_button.setAttribute("id","complete");
        mark_button.setAttribute("onclick","todo_mark("+toDoList.todos[i].todo_id+")");
        titlelist.appendChild(mark_button);
        main.appendChild(todo);
    }
}
function SelectText(element) {

    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}