function sumAll(arr) {

  let a = arr[0];
  let b = arr[1];

  let total = 0;

  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    
    total += i;
  }

  return total;
}

console.log(sumAll([5, 10]));
console.log(sumAll([1, 10]));
console.log(sumAll([3, 12]));
