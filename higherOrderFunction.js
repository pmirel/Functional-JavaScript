function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (let i = num; i > 0; i--) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat;
