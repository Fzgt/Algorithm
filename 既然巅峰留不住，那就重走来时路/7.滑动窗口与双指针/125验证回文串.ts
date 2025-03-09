// 125. 验证回文串
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, "").trim().toLowerCase();
    return s === [...s].reverse().join("");
};