// Get the input from the user
let command = prompt("What would you like to do?");

// The list of all the Todos
const todos = [];

// Quit the App when user enter "quit" or "q"
while (command !== "quit" && command !== "q") {

    // Display the list of the Todos
    if (command === "list") {
        console.log("LIST OF THE TODOS");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);  // [ Index: element ]
        }
    }
    // Add a todo
    else if (command === "new") {
        const newTodo = prompt("Enter new todo");
        console.log(`${newTodo} added to the list`);
        todos.push(newTodo);  // Update the Todos list
    }
    // Delete a todo
    else if (command === "delete") {
        const indexToDelete = parseInt(prompt("Enter the index of Todo to delete"));
        if (!Number.isNaN(indexToDelete)) {
            const deleted = todos.splice(indexToDelete, 1);  // Delete the given index
            console.log(`${deleted} was deleted`);
        } else {
            console.log("Unknown Index");
        }
    }

    command = prompt("What would you like to do?");  // Always prompt the user for an input until he enters "quit" or "q"
}
console.log("OK, YOU QUIT THE APP");  // Quitting the App