// 发布订阅模式
const handlers = {};
const e = {
	on: (type, foo) => {
		if (handlers[type]) {
			handlers[type].push(foo);
		} else {
			handlers[type] = [foo];
		}
	},
	emit: (type) => {
		if (!handlers[type]) {
			throw new Error(`No exist event type ${type}`);
		} else {
			handlers[type].forEach((fn) => {
				fn();
			});
		}
	},
};
e.on("huxiao", () => {
	console.log("i love you");
});
e.on("huxiao");


