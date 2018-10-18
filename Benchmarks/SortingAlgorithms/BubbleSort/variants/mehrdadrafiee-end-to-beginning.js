/**
 * Taken from: https://gist.github.com/mehrdadrafiee/49c5f855eb08b245614996596c79c731 on sept 21 2018
 * 
 * The shebang removal, console statements, and user input have also been replaced to fit the tests.
 * tldr; the file is original to fit your environment
 */

"use strict";

module.exports = function () {
  var m = 0;

  // @FROM Kade - keeping this function here but disabling console.log to avoid changing the algo and simulating as if it were doing something else significant.
  function sort(disks) {
  //  console.log("m is " + m + ". Here is the list after the iteration > " + disks);
  }

  function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
    m++;
  }

  // x = arr.length;
  // var disks = [];
  // for (var i = 0; i < x; i++) {
  //   disks[2*i] = 1;
  //   disks[2*i+1] = 0;
  //   var randomDisks = disks;
  // }
  var randomDisks = arr.slice();
  // console.log("List before sorting: " + arr);
  //console.log("Created an array of " + x*2 + " alternate disks: " + randomDisks);

  var len = randomDisks.length,
            i, j, stop;

  for (var k=0; k < len; k++) {
    for (var j=0, stop=len-k; j < stop; j++) {
      if (randomDisks[j] > randomDisks[j+1]) {
        swap(randomDisks, j, j+1);
        sort(randomDisks);
      }
    }
    // rl.close();
  }
  // console.log("List after sorting : " + randomDisks);
  return randomDisks;
}