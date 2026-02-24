const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }

    const midIndex = Math.floor(arr.length / 2);
    const cur = arr.splice(midIndex, 1)[0];

    let left = [], right = [],
    for (let i = 0; i < arr.length; i++) {
        if (nums[i] < cur) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return quickSort(left).concat(cur, quickSort(right));
}