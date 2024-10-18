function program() {
    // Ask for the user's name
    let name = requestInput("What's your name?");
    
    // Define lists of verbs, adjectives, and nouns to randomly choose from
    let verbs = ['sing', 'run', 'dance', 'eat', 'look', 'talk', 'behave', 'waddle', 'hug'];
    let adjectives = ['wet', 'clumsy', 'squashed', 'sweaty', 'fancy', 'ugly', 'bitter', 'dense'];
    let nouns = ['squirrel', 'fish', 'manatee', 'toad', 'snail', 'juniper berry', 'bear', 'rhododendron', 'hole in one', 'donald trump'];
  
    // Randomly select an item from each list
    let verb = getItemFromList(verbs);
    let adj = getItemFromList(adjectives);
    let noun = getItemFromList(nouns);
    
    // Construct the sentence
    let sentence = `Hi ${name}, you ${verb} like a ${adj} ${noun}.`;
    
    // Output the sentence to the web page
    showOutput(sentence);
}

// Return a random item from a list
function getItemFromList(list) {
    return list[Math.floor(Math.random() * list.length)];
}

/* ---- DON'T EDIT BELOW THIS LINE ---- */
/* This function asks the user to type something in.
   You can use the value entered in your program */
function requestInput(question) {
    let input = prompt(question);
    showInput(input);
    return input;
}

/* This function displays the input value on the page */
function showInput(value) {
    document.getElementById("input").innerHTML = value;
}

/* This function displays the result on the page */
function showOutput(value) {
    document.getElementById("output").innerHTML = value;
}

/* This makes the program function run when the button is clicked */
document.getElementById("run").onclick = program;