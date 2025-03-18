// 74. 搜索二维矩阵 左侧二分+坐标转换
function searchMatrix(matrix: number[][], target: number): boolean {
    if (!matrix.length || !matrix[0].length) return false;

    const n = matrix.length;
    const m = matrix[0].length; // 二维坐标转换只用到了m

    let l = 0, r = n * m - 1;
    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);

        // 这里>=是左侧二分，寻找第一个大于等于 target 的元素
        // 找到等于target的值，设置r=mid，重新进来更新mid，继续寻找左侧, 直到l++到l=r
        if (matrix[Math.floor(mid / m)][mid % m] >= target) r = mid;
        else l = mid + 1;
    }

    return matrix[Math.floor(r / m)][r % m] === target;
};