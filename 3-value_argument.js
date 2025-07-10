// Get the first argument (process.argv[2])
const firstArgument = process.argv[2];

// Check if first argument exists and print accordingly
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  console.log(firstArgument);
}
