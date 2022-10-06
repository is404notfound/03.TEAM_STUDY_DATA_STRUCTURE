const MAX = 3_0;

function processData(input) {
    var n = parseInt(input);
    console.log('f:' + fibonacci(n));
    console.log('fr:' + fibonacciRecursion(n));
}

// input int n
// output [1, 1, 2, 3, 5 ...]
function fibonacci(n) {
    const res = [];

    for (let i = 0; i <= n; i++) {
        if (res.length < 2) {
            res[i] = 1;
            continue;
        }
        res.push(res[i - 1] + res[i - 2]);
    }
    return res[n - 1]
}

function fibonacciRecursion(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

processData(MAX);
// output
// f : 832040
// fr : 832040