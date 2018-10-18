module.exports = function() {
  const set = {};
  const reducedToUnique = arr.reduce((unique, currentFavorite) => {
    const favoriteID = currentFavorite.favoriteID && currentFavorite.favoriteID.toLowerCase();
    if (!set[favoriteID]) {
      set[favoriteID] = true;
      unique.push({ favoriteID, favoriteType: currentFavorite.favoriteType });
    }
    return unique;
  }, []);

  // console.log(reducedToUnique);
  
  // return reducedToUnique;
}   