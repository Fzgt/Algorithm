
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let curIndex = parseInt(arr.length / 2);
    let cur = arr.splice(curIndex, 1)[0];
    let left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < cur) {
            left.push(arr[i])
        } else if (arr[i] > cur) {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(cur, quickSort(right))
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

let head = new ListNode();


function reverseList(head) {
    let [prev, cur] = [null, head];
    while (cur) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        prev.next = temp;
    }
    return prev;
}




// 如何实现一个限制最大并发数的程序，比如说最大并发数为5，
// 当发5个请求后（请求未完成），就无法继续发请求，当前5个请求有完成的时候，再继续发送后续的请求，



// div(容器)： display: flex; width: 1000px;
//   - p1(子元素)：width: 200px； flex: auto;    
//   - p2(子元素): width: 300px; flex: 1 1 200px;   
//   - p3(子元素): width: 400px; flex: none;  
//   p1, p2, p3的宽度分别是多少？

// {
//     key1: DynamicsCompressorNode,

// }


// const foo = () => {
//     fn(1000).then(() => {
//         fn(2000).then(() => {
//             fn(3000)
//         })
//     })
// }

// 实现一个串行执行Promise函数，接受一个Promise数组

// const control = (promises) => {
//     let count = 0;

//     for (let i)
// }

