// 47. 全排列 II
function permuteUnique(nums: number[]): number[][] {
    const ans = [];
    const used = new Array(nums.length);
    nums.sort((a, b) => a - b);

    const dfs = path => {
        if (path.length === nums.length) {
            ans.push(path.slice());
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i - 1 >= 0 && nums[i - 1] === nums[i] && used[i - 1]) continue; // 避免产生重复的排列
            path.push(nums[i]);
            used[i] = true;
            dfs(path);
            path.pop();
            used[i] = false;
        }
    }

    dfs([]);
    return ans;
};

// used[i - 1] 和 !used[i - 1] 都可以通过  为什么两种都可以？
// 两种方法的本质都是确保相同的数字按照固定顺序被选择，只是实现方式不同：

// 第一种：允许使用当前元素的条件是"如果有相同元素，前一个相同的元素还在使用中"
// 第二种：允许使用当前元素的条件是"如果有相同元素，前一个相同的元素已经用过"

// 关键点是，两种方法都能确保相同数字的选择顺序一致，从而避免重复排列。
// 以数组 [1,1,2] 为例：

// 第一种方法避免了回溯到第一个1后再选第二个1的情况
// 第二种方法则要求必须先选第一个1再选第二个1

// 尽管实现细节不同，但结果都能正确去除重复排列。