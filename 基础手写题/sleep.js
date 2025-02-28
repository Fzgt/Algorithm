// 实现一个sleep：
async function foo() {
    console.log('start')
    await sleep(1000)
    console.log('end')
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
foo();
