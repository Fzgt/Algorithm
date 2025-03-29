// promise.all
// 合并两个有序数组
// 求变量的最大深度
// 防抖节流函数
// 事件派发接收器EventEmitter
// 六位数随机生成
// sleep函数
const foo = async (wait) => {
    console.log('begin')
    await sleep(wait)
    console.log('end')
}
const sleep = (ms) => new Promise(resolve => { setTimeout(resolve, ms) })
sleep(1000)

// 柯里化curry函数
// 字符串反转
// bind实现
// 洗牌算法
// listToTree算法
// 实现批量请求函数，最大同时发送请求数max
// 数组扁平化
// 实现reduce
// 串行promise