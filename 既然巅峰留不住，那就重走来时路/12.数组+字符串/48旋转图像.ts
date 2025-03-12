// 48. 旋转图像
function rotate(matrix: number[][]): void {
    const len = matrix.length;

    const temp_matrix = new Array(len).fill(0).map(ele => new Array(len).fill(0));

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            temp_matrix[j][len - i - 1] = matrix[i][j]; // 顺时针旋转90度的坐标变换，(i,j) -> (j,len-i-1)，这个公式可以自己比对几个点推导出来，如果忘了
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            matrix[i][j] = temp_matrix[i][j];
        }
    }
};