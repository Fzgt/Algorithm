/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//     let priceMin = prices[0];
//     let profitMax = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < priceMin) {
//             priceMin = prices[i];
//         } else if (prices[i] - priceMin > profitMax) {
//             profitMax = prices[i] - priceMin;
//         }
//     }
//     return profitMax
// };

var maxProfit = function (prices) {
    let res = 0;
    for (let i = 0, minp = prices[0]; i < prices.length; i++) {
        res = Math.max(res, prices[i] - minp);
        minp = Math.min(prices[i], minp);
    }
    return res;
};