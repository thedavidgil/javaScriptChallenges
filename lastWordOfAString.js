
function confirmEnding(str, target) {

  let newStr = "" ;

  for (let i = (str.length-1); i >= 0; i--){

    if (str[i] == " " || i == 0) {
   
     if (newStr === target) {
      return true
     } else {
       return false
    }
   } else {
    newStr = str[i] + newStr
   }
   
  }
}

console.log(confirmEnding("He has to give me a new name", "name"));


