module.exports = function() {
  const reducedToUnique = arr.reduce((unique, currentFavorite) => {
    // console.log('I am doing stuff')
    const favoriteID = currentFavorite.favoriteID && currentFavorite.favoriteID.toLowerCase();
    // console.log(unique)
    const isDuplicate = unique.find(f => {
      // console.log(f.favoriteID);
      return f.favoriteID === favoriteID
    })
    if (!isDuplicate) {
      unique.push({ favoriteID, favoriteType: currentFavorite.favoriteType });
    }
    return unique;
  }, []);

  // console.log(reducedToUnique);
  
  // return reducedToUnique;
}   