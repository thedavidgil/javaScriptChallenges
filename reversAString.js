function reverseString(str) {

  let arr = [];
  let length = str.length - 1
  
  for (let i = 0; i <= length; i++){
    arr[i] = str[length - i]
  }
 
  return arr.toString().replaceAll(",","");


  }
  
  console.log(reverseString("hello"));
