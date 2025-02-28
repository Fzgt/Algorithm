// 1.实现 Promise.all 方法，具体点说就是定义 Promise.all = Promise.all || function(promises) { /* Todo */ } 实现函数体；
Promise.prototype.all = (promises) => {
    let results = [];
    let count = 0;
    let len = promises.length;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < len; i++) {
            Promise.resolve(promises[i]).then((res) => {
                results[i] = res
                count++
                if (count === len) {
                    resolve(result)
                }
            }, (err) => {
                reject(err)
            })
        }
    })
}
// 2. 实现斐波那契数列的计算（如果这个数列不了解的话可以问我），期望可以看到多种方法，最好是考虑时间、空间复杂度的；
// 递归实现 时间复杂度2的n次方
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// 迭代实现  时间复杂度为O(n)，空间复杂度为O(1)
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    var prev1 = 1, prev2 = 0, result;
    for (var i = 2; i <= n; i++) {
        result = prev1 + prev2;
        prev2 = prev1;
        prev1 = result;
    }
    return result;
}
// 动态规划实现  时间复杂度为O(n)，空间复杂度为O(n)
function fibonacci(n) {
    var dp = [0, 1];
    for (var i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// 矩阵快速幂实现 O(logn)
function multiply(A, B) {
    var C = [[0, 0], [0, 0]];
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            for (var k = 0; k < 2; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}
function matrixPower(A, n) {
    var result = [[1, 0], [0, 1]];
    while (n > 0) {
        if (n & 1) {
            result = multiply(result, A);
        }
        A = multiply(A, A);
        n >>= 1;
    }
    return result;
}
function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    var A = [[1, 1], [1, 0]];
    var result = matrixPower(A, n - 1);
    return result[0][0];
}