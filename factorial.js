function factorialize(num) {
  const n = num
  for(let i = 1; i < n; i++){
    num = num * i;
  }
  return num;
}

console.log(factorialize(5));