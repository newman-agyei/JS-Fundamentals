const argumentCount = process.argv.length - 2;

// Check the number of arguments and print appropriate message
if (argumentCount === 0) {
  console.log("No argument");
} else if (argumentCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
