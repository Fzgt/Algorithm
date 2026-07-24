// Given an array, transform it into an object type and the key/value must be in the provided array.
// for example
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// Given:
// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly string[]> = {
	[Key in T[number]]: Key;
};

// 想遍历数组里的值，用in配合 T[number]——T[number]是"索引访问类型"，表示"用数字去索引这个数组/元组类型，
// 能拿到的是所有元素的类型联合"，比如T是readonly ['tesla', 'model 3']，那T[number]就是
// 'tesla' | 'model 3'
// 之前学的T[Key]是"用具体的key去取某个字段的类型"，T[number]是它的变体，专门用在数组/元组上，表示"取出所有元素类型的联合"。
