function findAnagrams(s: string, p: string): number[] {
    const map = new Map();
    const window = new Map();
    for (const x of p) {
        map.set(x, (map.get(x) || 0) + 1);
    }

    let ans = [];
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        let cur = s[r];
        window.set(cur, (window.get(cur) || 0) + 1);

        if (r - l + 1 > p.length) {
            let leftChar = s[l];
            window.set(leftChar, window.get(leftChar) - 1);
            if (window.get(leftChar) <= 0) window.delete(leftChar);
            l++;
        }
        
        if (r - l + 1 === p.length) {
            if (mapEqual(map, window)) {
                ans.push(l);
            }
        }

    }

    return ans;
};