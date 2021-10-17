function howManyHundreds(num) {
  const x100 = num / 100;
  return Math.floor(x100);
}

console.log(howManyHundreds(894));
console.log(howManyHundreds(323));