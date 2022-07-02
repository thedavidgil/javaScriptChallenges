function titleCase(str) {
  
  let word = str.toLowerCase().split(" ");
  let newString = ""
  for (let i = 0; i < word.length; i++) {
    newString = newString + " " + word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  return newString.trim()
}




console.log(titleCase("sHoRt AnD sToUt"));