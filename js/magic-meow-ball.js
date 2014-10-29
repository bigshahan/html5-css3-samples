function randomReply() {
	var array = [
		'Meow says the signs are good.',
		'Meow says meow.',
		'Meow says no.',
		'Meow says yes.',
		'Meow says code more.',
		'Meow says right meow.'
	];

	return array[Math.round(Math.random()*(array.length - 1))];
}

// Output 'Magic Meow Ball!' to the console


// loop forever!
while (true) {
	// Prompt user a question
	// And save there answer in a variable
	var question = prompt('What\'s your question');

	// if question is null, run break
	

	// Output there question to the console
	

	// Output a reply to the console
	// Use randomReply() to generate the response
	
}