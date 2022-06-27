
//solo funciona con numeros positivos

function largestOfFour(arr) {

  let newArr = [];

    for (let i = 0; i < arr.length; i++)
    {
     newArr[i] = arr[i].reduce((valorAnterio, valorActual) => valorAnterio >= valorActual ? valorAnterio : valorActual,0)
  }

 return newArr
    
  }
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

