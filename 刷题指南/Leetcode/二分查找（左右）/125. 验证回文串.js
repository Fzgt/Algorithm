/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "").toLowerCase();
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};


// const isPalindrome = (s) => {
//     s = s.replace(/[^a-zA-Z0-9])/g, "").replace(/s/g, "").toLowerCase();
//     let left = 0, right = s.length - 1;
//     while (left < right) {
//         if (s.charAt(left) !== s.charAt(right)) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return false;
// }