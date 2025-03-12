// 默认执行文件 使用node来执行、它会把这个文件当成一个模块 默认把this给修改了。
// 所以在node中很少提this
// 在前端中访问变量是通过window对象，但是在后端中 想访问全局需要通过global
// 注意 这里的this 不等于 global
// console.log(this);
// function foo () {
//     console.log(this)
// }
// foo()
// (function () {
//     console.dir(this, {
//         showHidden: true
//     });  // IIFE的this是global
// }
// )()

// queueMicrotask  clearImmediate setImmediate

// 掌握一些node新增的能通过global直接访问的属性 全局属性
// Buffer node中的二进制对象（最早的时候 浏览器不能直接读文件）node作为服务端存文件的时候 不能把
// 文件存成字符串 只能存成二进制， Buffer就解决了文件读写。

// __dirname目录绝对路径   __filename文件绝对路径
// console.log(__dirname, __filename);
console.log(process.cwd());
// process
// 1.platform(win32) mac -> darwin
// 2.chdir  change directory
// 3.cwd current working directory 当前工作目录 可以改变， webpack会自动查找 运行webpack的目录下
//   查找webpack.config.js
// 4.env 执行代码时传入环境
// 5.argv 执行代码时传入参数
// 6.nextTick

// console.log(process.cwd());
// console.log(process.env);

// process.argv 打印的结果如下面三部分：
// 【执行node所在的exe文件， 当前执行的文件， ..其他参数】
// node 9.6.js --port 8085 --method kill 来设置其他参数
console.log(process.argv);

// let env = process.argv.slice(2).reduce((memo, current, index, arr) => {
//     if (current.startsWith('--')) {
//         memo[current.slice(2)] = arr[index+1];
//     }
//     return memo;
// },{})
// console.log(env);

// // cli => 交互式需要用户传入参数
// // 解析命令行参数的一个包 commander  写工具用的比较多 TJ写的
// // 具体用法去npm官网看
// // const program = require('commander');
// program.option('-p,--port <n>', 'set user port');
// program.parse(process.env);
// const options = program.opts();
// if (options.port) {
//     // 开启个本地服务
// }

// Promise.resolve().then(() => {
//     console.log('promise');
// })
// process.nextTick(() => {
//     console.log('nextTick');
// })

setTimeout(() => {
	console.log("setTimeout");
}, 3);
setImmediate(() => {
	console.log("setImmediate");
});

// global 上有属性直接访问的叫全局属性
// require exports module 也可以直接访问 他们不在global上
// 每个文件都是一个模块, 模块化的实现借助的是 函数
// node内部做的也是这样一件事，相当于给每个文件包裹了一个函数。
// 函数中有参数 参数里面有五个属性 _dirname _filename require exports module，函数就是IIFE
// console.log(require);

// 模块化规范 ~ common.js规范 amd cmd esm 模块， umd system.js
// 为什么要有模块化
// 最早是为了解决命名冲突问题 （“单例模式” 不能完全解决这些问题）
// var a = {aa(){}};  var b = {aa(){}};
// 用文件拆分的方式 配合 IIFE 自执行函数来解决
// 前端里会有 请求的问题 依赖问题 （amd cmd）依赖前置 就近依赖 ，不靠谱 还要去维护依赖关系

// umd 可以兼容 amd cmd commonjs ， 但是不支持es6

//  commonjs规范（基于文件读写的 如果依赖了某个文件我就会进行文件读取）动态的：
// 一个文件就是一个模块，我想使用这个模块就require， 想给别人用就 module.exports导出

// esModule规范（每次你引用一个模块，发请求）静态的，靠webpack编译后 就变成require就不会发请求了。
// 正常的esModule都是每引入一个文件 发一个请求
// vite就是靠发请求 对请求来劫持 进行转义实现的
// es6 -> 一个文件就是一个模块，我想使用就import ， 想给别人用就 export

// 因为require是动态的，写在代码里边，所以不知道它用没用到，因此commonjs不支持tree-shaking
console.log(__dirname);
