module.exports = function() {

  const servicesSet = new Set(services.map(platform => platform.name));
  const profileSet = new Set(profile.map(platform => platform.name));

  const missing = services.reduce((prev, curr) => {
    if (!profileSet.has(curr.name)) {
      prev.push(curr);
    }
    return prev;
  }, [])
  
  console.log('-------------------------------')
  console.log(missing);
  console.log('-------------------------------')
  // console.log(reducedToUnique);
  // return reducedToUnique;
}   