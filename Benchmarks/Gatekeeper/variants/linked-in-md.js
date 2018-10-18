module.exports = function() {
  let sum = 0;
  const rep = {};
  Object
      .entries(obj)
      .forEach( (a,b,c) => {
        sum += a[0]+a[1];
        const str = sum.toString();
        rep[str] = str.replace('2', '');
      });

  // console.log(sum);
  // console.log(rep);

}