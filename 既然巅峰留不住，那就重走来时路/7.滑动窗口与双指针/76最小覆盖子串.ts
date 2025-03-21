// 76. 最小覆盖子串
function minWindow(s: string, t: string): string {
    if (!s || !t || s.length < t.length) return '';

    const needs = new Map(); // 存储 t 中所有字符及其个数
    const window = new Map();

    for (let x of t) {
        needs.set(x, (needs.get(x) || 0) + 1);
    }

    let l = 0, r = 0, valid = 0, start = 0; // window每有一个字符符合needs的要求，valid++
    let minLen = Infinity;

    while (r < s.length) {
        const cur = s[r];

        if (needs.has(cur)) { // t中有该字符，加入window
            window.set(cur, (window.get(cur) || 0) + 1);
            if (window.get(cur) === needs.get(cur)) valid++;
        }

        while (valid === needs.size) { // window中已经包含所有t中的字符
            if (r - l + 1 < minLen) { // 更新最小覆盖子串
                start = l;
                minLen = r - l + 1;
            }

            const del = s[l];
            l++; // 只在满足最小覆盖子串时，才开始收缩左指针，否则window依然包含所有t中的字符

            if (needs.has(del)) { // 移动左指针，缩小window时，更新window和valid
                if (window.get(del) === needs.get(del)) {
                    valid--;
                }
                window.set(del, window.get(del) - 1);
            }
        }

        r++;
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};