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