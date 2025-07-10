// Get the first argument and convert to integer
const firstArgument = process.argv[2];
const x = parseInt(firstArgument);

// Check if conversion was successful
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  // Use a for loop to print "C is fun" x times
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
