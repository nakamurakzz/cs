const factorial = (n: number): number => {
  let product = 1;
  while (n > 1) {
    product *= n;
    n -= 1;
  }
  return product;
};

const factorial2 = (n: number): number => {
  if (n == 0) return 1;
  return n * factorial2(n - 1);
};

const factorial1_10 = (n: number): void => {
  console.log(n);
  if (n == 10) return;
  factorial1_10(n + 1);
};

// factorial(30);
// factorial2(30);
factorial1_10(1);
