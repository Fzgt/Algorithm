// function _instanceOf (instance, target) {
//     let proto = Object.getPrototypeOf(instance);
//     let prototype = target.prototype;

//     while (true) {
//         if (proto === prototype) {
//             return true;
//         }
//         if (!proto) {
//             return false;
//         } else {
//             proto = Object.getPrototypeOf(proto);
//         }
//     }
// };

// function Fn () {};
// const fn = new Fn();
// const result = _instanceOf(fn, Fn);
// console.log(result);

const _instanceOf = (instance, constructor) => {
	let proto = Object.getPrototypeOf(instance);
	let prototype = constructor.prototype;
	while (true) {
		if (proto === prototype) {
			return true;
		}
		if (!proto) {
			return false;
		} else {
			proto = Object.getPrototypeOf(proto);
		}
	}
};

const __instanceOf = (instance, constructor) => {
	let proto = Object.getPrototypeOf(instance);
	let prototype = constructor.prototype;
	while (true) {
		if (proto === prototype) {
			return true;
		}
		if (!proto) {
			return false;
		} else {
			proto = Object.getPrototypeOf(proto);
		}
	}
}
