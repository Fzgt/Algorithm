const isComplexDataType = function(obj){
    return (typeof obj === 'object' || typeof obj === 'function')&&(obj !== null)
}

const deepClone = function(obj,hash = new WeakMap()){
    if(hash.has(obj)) return hash.get(obj)
    let type = [ Date,RegExp,Set,Map,WeakMap,WeakSet]
    if(type.includes(obj.constructor))return new obj.constructor(obj)
    //如果成环了，参数obj=obj.loop = 最初的obj ， 会在WeakMap中找到第一次放入的obj
    // 提前返回第一次放入WeakMap的cloneObj

    let allDesc = Object.getOwnPropertyDescriptor(obj)//遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj,allDesc))//继承原型
    hash.set(obj,cloneObj)

    for(let key of Reflect.ownKeys(obj)){ //Reflect.ownKeys(obj)可以拷贝不可以枚举属性和符号类型
        // 如果值是引用类型（非函数）则递归调用deepClone
        cloneObj[key]=
        (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
            deepClone(obj[key],hash) : obj[key]
    }
    return cloneObj
}





// deepClone knowledge point:
// 1 WeakMap 及 WeakMap get方法 has方法 set方法
//     has：判断是否包含某元素，包含返回true，不包含返回false
//     get：通过键从WeakMap对象中返回指定元素，不存在返回false
//     set：weakmapObj.set(key, value)向WeakMap对象添加新元素
// 2 数组的 includes方法
//     includes：判断一个数组是否包含一个指定值，包含返回true，否则返回false
// 3 对象的constructor属性
//     obj.constructor  的方式查看某对象的类型
// 4 Object.getOwnPropertyDescriptor
//     返回指定对象上一个自有属性对应的属性描述符
// 5 Object.create()
//     Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
// 6 Object.getPrototypeOf（）
// 返回指定对象的原型（内部[[Prototype]]属性的值）
// 7 Reflect.ownKeys()
// 静态方法 Reflect.ownKeys() 返回一个由目标对象自身的属性键组成的数组。


