function debounce(fn, wait, immediate) {
	let timer = null; // 用闭包存一个变量
	function debounced(...args) {
		clearTimeout(timer); // 每次进来 都要重置定时器，防抖机制

		const callNow = immediate && !timer; 
		// immediate = 需要立即执行，!timer = 无定时器在等待中，满足这两点就立刻调用
		// timer存在的话，说明之前进来过，那么即便immediate是true，之前也立即执行过了，不需要我们担心，所以这次就不用执行了
		if (callNow) fn.apply(this, args);

		timer = setTimeout(() => {
			timer = null; // 重置定时器变量，为了下次防抖还能用
			if (!immediate) fn.apply(this, args); // 不是立即执行版，就时间到了执行
		}, wait);
	}

	debounced.cancel = function() {
		clearTimeout(timer); // 清除时间还未到的定时器(未进入宏任务队列)，用来反悔
		timer = null; // 重置定时器变量，为了下次防抖还能用
	}

	return debounced;
}


// const vm = {
// 	tag: "div",
// 	attrs: {
// 		className: "root",
// 		id: "appRoot",
// 	},
// 	children: [
// 		{
// 			tag: "h1",
// 			attrs: {
// 				className: "title",
// 			},
// 			children: ["hello react.js"],
// 		},
// 		{
// 			tag: "div",
// 			attrs: {
// 				className: "hello",
// 			},
// 			children: ["do something"],
// 		},
// 	],
// };
