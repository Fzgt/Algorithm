// 老袁讲义版quickSort
var quickSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let curIndex = Math.floor(arr.length / 2);
    let cur = arr.splice(curIndex, 1)[0];
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < cur) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(cur, quickSort(right))
};
// 双指针版
var sortArray = function (arr, left = 0, right = arr.length - 1) {
    if (left >= right) { //左边比右边大说明区间里没有数据了
        return arr;
    }

    const pivot = arr[left];
    let i = left + 1;
    let j = right;

    while (i <= j) { // 判断条件全包含 i<=j，四次
        while (i <= j && arr[i] < pivot) { //左边要找比pivot大的，所以只要小于pivot就一直i++
            i++;
        }
        while (i <= j && arr[j] > pivot) { //右边要找比pivot小的，所以只要小于pivot就一直j--
            j--;
        }
        if (i <= j) { //和顶部条件保持一致 这里没特别意义，只是防止i j超出条件，因为上边两个while也会操作i j
            [arr[i], arr[j]] = [arr[j], arr[i]];
            //能通过上边两个while循环走到这里，说明是满足要求的两个数 可以互换一下 然后继续比较
            i++;
            j--;
        }
    }

    [arr[left], arr[j]] = [arr[j], arr[left]]; //新找到的pivot和旧的pivot要置换一下

    sortArray(arr, left, j - 1);//处理j-1左边的
    sortArray(arr, j + 1, right)//处理j+1右边的
    return arr;
};



let arr = [12, 3, 4, 11, 57, 112, 13];
console.log(quickSort(arr));
