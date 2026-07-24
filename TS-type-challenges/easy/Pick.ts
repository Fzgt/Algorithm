// Pick<Type, Keys>;
// Constructs a type by picking the set of properties Keys(string literal or union of string literals) from Type.

// Given:
// type MyPick<T, K> = any

type myPick<T, K extends keyof T> = {
	[Key in K]: T[Key];
};
