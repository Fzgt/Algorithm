// 49. 字母异位词分组
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>;

    for (const str of strs) {
        let temp = Array.from(str);
        temp.sort();
        let word = temp.join('');

        if (map.has(word)) {
            map.get(word)!.push(str)
        } else {
            map.set(word, [str]);
        }
    }

    const ans = [];
    for (const val of map.values()) {
        ans.push(val);
    }

    return ans;
};