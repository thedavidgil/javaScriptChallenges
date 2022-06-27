function findLongestWordLength(str) {
  let arr = [];
  let count = 0;
 
  for (let i = 0; i <= str.length; i++){
   if (str[i] === " " || i === str.length) {
     arr.push(count);
     count = 0;
   } else {
     count++
   }
  }
  console.log(arr)
  return arr.reduce((valorAnterio,valorActual) => valorAnterio >= valorActual ? valorAnterio:valorActual,0)
  
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
