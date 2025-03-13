// 45. 跳跃游戏 II
function jump(nums: number[]): number {
    let pos = nums.length - 1;
    let step = 0;

    while (pos > 0) {
        // 从后往前找第一个能到达pos的位置，然后更新pos，这样就能保证每次都是最优解
        for (let i = 0; i <= pos; i++) {
            if (i + nums[i] >= pos) {
                pos = i;
                step++;
                break;
            }
        }
    }

    return step;
};