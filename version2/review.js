var todos = ["item1", "item2", "item3"];

// It should have a function to display todos.

function displayTodos() {
    console.log("My todos: ", todos);
}

//It should have a function to add todos.
function addTodo(todo) {
    todos.poush(todo);
    displayTodos();
}

//It should have a function to change todos.
function changeTodo(positoin, newValue) {
    todos[position] = newValue;
    displayTodos();
}
// It should have a function to delete todos. 

function deleteTodo(positon) {
    todos.splice(positioin, 1);
    displayTodos();
}