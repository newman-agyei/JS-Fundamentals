// Get the first command line argument
const sizeArg = process.argv[2];

// Try to convert to integer
const size = parseInt(sizeArg);

// Check if conversion was successful
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Print the square using nested loops
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += "X";
    }
    console.log(row);
  }
}
