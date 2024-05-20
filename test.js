const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n < 2) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
};

// Calculate the 10th Fibonacci number (0-indexed)
const result = fib(20);
console.log(result); 
