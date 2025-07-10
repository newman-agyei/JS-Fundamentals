// Get the first argument
const firstArgument = process.argv[2];

// Convert to integer
const convertedNumber = parseInt(firstArgument);

// Check if conversion was successful
if (isNaN(convertedNumber)) {
  console.log("Not a number");
} else {
  console.log("My number: " + convertedNumber);
}
