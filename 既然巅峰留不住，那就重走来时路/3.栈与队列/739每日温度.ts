// 739. 每日温度
function dailyTemperatures(temperatures: number[]): number[] {
    const ans = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = 0; i < temperatures.length; i++) {
        // 处理栈顶元素直到没有比当前元素小的元素
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop();
            ans[idx] = i - idx;
        }
        stack.push(i);
    }
    return ans;
};