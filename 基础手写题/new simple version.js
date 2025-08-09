        // 要从 new 干了什么入手：

        // 创建一个新的空对象 obj
        // 将新对象的的原型指向当前函数的原型
        // 新创建的对象绑定到当前this上
        // 如果没有返回其他对象，就返回 obj，否则返回其他对象

        function _new(Fn, ...arg) {
            // ① 创建一个新的空对象 obj
            const obj = {};
            // ② 将新对象的的原型指向当前函数的原型
            obj.__proto__ = Fn.prototype;
            // ③ 新创建的对象绑定到当前this上
            const newObj = Fn.apply(obj, arg);
            // ④ 如果没有返回其他对象，就返回 obj，否则返回其他对象
            return typeof newObj === 'object' ? newObj : obj;
        }

        function Foo(name,fn) {
            this.name = name;
            this.fn = fn
        }
        var luckyStar = _new(Foo, 'luckyStar',function fn(){console.log("pad")});
        luckyStar.fn()
        luckyStar.name; //luckyStar