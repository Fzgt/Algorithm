function debounce(fn, wait, immediate) {
	let timer = null;
	//  返回一个函数
	return function (...args) {
		// 每次触发事件时都取消之前的定时器
		clearTimeout(timer);
		// 判断是否要立即执行一次

		if (immediate && !timer) {
			fn.apply(this, args);
		}
		// setTimeout中使用箭头函数，就是让 this指向 返回的该闭包函数，而不是 debounce函数的调用者
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, wait);
	};
}


const debounce = (fn, wait, immediate) => {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);

		if (immediate && !timer) {
			fn.apply(this, args)
		}

		timer = setTimeout(() => {
			fn.apply(this, args)
		}, wait)
	}

}






const debounce = (fn, wait, immediate) => {
	let timer = null;

	return function (...args) {
		clearTimeout(timer);

		if (immediate && !timer) {
			fn.apply(this, args)
		}

		timer = setTimeout(() => {
			fn.apply(this, args);
		}, wait);
	}
}

const debounce = (fn, wait, immediate) => {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);

		if (immediate && !timer) {
			fn.apply(this, args)
		}

		timer = setTimeout(() => {
			fn.apply(this, args)
		}, wait)
	}
}








const fn = () => {
	console.log('hello huxiao')
}
const debounceFoo = debounce(fn, 3000, true);
debounceFoo()
debounceFoo()
debounceFoo()








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
