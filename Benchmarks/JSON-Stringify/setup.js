module.exports = () => {
  // console.log('SETUP RUNNING'); 
  // const arr = [1,2,3,4,53,2346,4357,37,456,4,34,53,45,345,34,54,3456,4535,743,57,45,64355,64356,43,57,4357,4357,4357,6,344,2,24,534567,8,679,789,8,54,75,74,635,2342,8];
  // const fastJson = fastjsonfirst;
  const fastjsonfirst = require('fast-json-stringify');
  const mockObj = { favoriteID: 'GHOSTED', favoriteType: 'series' };

  const arr = [];

  // Power user amount of favorites
  for(let i = 0; i < 200; i++) {
    arr.push(Object.assign({}, mockObj))
  };
}