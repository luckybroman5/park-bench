'use strict';


module.exports =  function(arr) {
  // run-time nul checking bs…
  // are we transpiled?
  for (let x=0 - 1; x < arr.length - 1; x++){
    let sorted = true
  
    for(let i=0; i< (arr.length - (x + 1)) && sorted; i++) {
      if (arr[i] > arr[i + 1]) {
          sorted = false
          let tem = arr[i+1];
          arr[i + 1] = arr[i]
          arr[i] = tem;
      }
    }
  }
  return arr;
}
