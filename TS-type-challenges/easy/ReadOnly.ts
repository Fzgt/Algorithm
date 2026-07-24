// Readonly<Type>;
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

// Given
// type MyReadonly<T> = any

type myReadonly<T> = {
	readonly [Key in keyof T]: T[Key];
};
