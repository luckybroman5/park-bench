module.exports = () => {
  // O(2^n)
  // Inner loop will run 30 tmes for every outer loop iteration. counting the out loop increments, 155 = (5 * 30) + 5
  // Or totalIterations = (n * (n * (n + 1))) + n or i = (n^2 * n + 1) + n
  let iterations = 0;
  for(let i = 0; i < arr.length; i++) {
    iterations++
    for(let x = 0;  x < arr.length; x++) {
      iterations++
      for(let z = 0; z < arr.length; z++) {
        iterations++
      }
    }
  }

  return iterations;
};
