// 763. 划分字母区间
function partitionLabels(s: string): number[] {
    const maxPos = {};
    for (let i = 0; i < s.length; i++) {
        maxPos[s[i]] = i;
    }

    let ans = [], start = 0, scannedMaxPos = 0;

    for (let i = 0; i < s.length; i++) {
        const curMaxPos = maxPos[s[i]]; // 当前字符的最远出现位置
        scannedMaxPos = Math.max(curMaxPos, scannedMaxPos); // 记录当前扫描到的最远位置
        if (scannedMaxPos === i) { // 没有出现更远的元素，截取start-i这一段是合法的
            ans.push(i - start + 1);
            start = i + 1;
        }
    }

    return ans;
};