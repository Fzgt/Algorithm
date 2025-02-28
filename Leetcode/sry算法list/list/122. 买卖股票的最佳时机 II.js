/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0;
    for (let i = 0; i + 1 < prices.length; i++) {
        res += Math.max(0, prices[i + 1] - prices[i]);
    }
    return res;
};