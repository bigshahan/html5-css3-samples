$(function() {
	// Function to add a todo item
	var addTodoItem = function (todo) {
		// Create a string with html for a list item


		// Select the unordered list of todo items


		// Append the html to the unordered list of todo items
		

		// Add a click handler to the delete button in the list item


		// Add a click handler to the input checkbox in the list item

	};

	// Todo Form Submit Handler
	var handleSubmit = function (e) {
		e.preventDefault();

		console.log('Form was submitted');

		// Get the todo input value
		// HINT: use jquery to select the input. and then call the val() method

		// Output value to the console

		// Add the todo item (using the addTodoItem function)
	};

	// Setup event handlers
	$('#add-todo-form').submit(handleSubmit);

	// Load initial page with todo items

});