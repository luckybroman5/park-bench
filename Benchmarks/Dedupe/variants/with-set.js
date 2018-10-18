module.exports = function() {
  const set = new Set();
  const reducedToUnique = arr.reduce((unique, currentFavorite) => {
    const favoriteID = currentFavorite.favoriteID && currentFavorite.favoriteID.toLowerCase();
    const isNew = !set.has(favoriteID);
    if (isNew) {
      set.add(favoriteID);
      unique.push({ favoriteID, favoriteType: currentFavorite.favoriteType });
    }
    return unique;
  }, []);
  
  // console.log(reducedToUnique);
  // return reducedToUnique;
}   