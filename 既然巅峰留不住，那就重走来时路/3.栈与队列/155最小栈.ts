// 155. 最小栈
class MinStack {
    private stack;
    private minStack;

    constructor() {
        this.stack = [];
        this.minStack = [Infinity];
    }

    push(val: number): void {
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], val)); 
        // 不比最小栈的栈顶元素小，就将最小栈的栈顶元素压入
        // 保持minStack 的长度和 stack 始终一致
        // 这样之后pop的时候stack和minStack必须同时弹出，才能保持对应关系
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}