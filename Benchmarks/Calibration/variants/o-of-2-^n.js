module.exports = function() {
  const n = arr.length;
  // console.log('N:', n);
  // const fibchi = (num) => {
  //   calls++;
  //   if (num <= 1) return 1;  
  //   return fibchi(num - 2) + fibchi(num - 1);
  // };
  let calls = 0;
  console.log(n)
  function fibchi(num) {
    ++calls;
    if (num <= 1) {
      return 1;  
    }
    return fibchi(num - 2) + fibchi(num - 1);
  };
  // @TODO what exactly is the complexity?
  // console.log('res: ', fibchi(n, 0));
  // console.log('calls: ', calls);
  return fibchi(n);
}