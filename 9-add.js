// Define the add function
function add(a, b) {
  return a + b;
}

// Get command line arguments
const firstArg = process.argv[2];
const secondArg = process.argv[3];

// Convert to integers
const firstInt = parseInt(firstArg);
const secondInt = parseInt(secondArg);

// Calculate and print the result
const result = add(firstInt, secondInt);
console.log(result);
