# TypeScript type-challenges 刷题清单

## 第一批：Warm-up + Easy（全刷，14题）

- [ ] 13 · Hello World
- [ ] 4 · Pick
- [ ] 7 · Readonly
- [ ] 11 · Tuple to Object
- [ ] 14 · First of Array
- [ ] 18 · Length of Tuple
- [ ] 43 · Exclude
- [ ] 189 · Awaited
- [ ] 268 · If
- [ ] 533 · Concat
- [ ] 898 · Includes
- [ ] 3057 · Push
- [ ] 3060 · Unshift
- [ ] 3312 · Parameters

## 第二批：Medium 核心条件类型/映射类型

- [ ] 2 · Get Return Type
- [ ] 3 · Omit
- [ ] 8 · Readonly 2
- [ ] 9 · Deep Readonly
- [ ] 12 · Chainable Options
- [ ] 191 · Append Argument
- [ ] 459 · Flatten（做1道代表性的递归数组处理就够）
- [ ] 527 · Append to object
- [ ] 599 · Merge

## 第三批：Promise / 异步相关

- [ ] 20 · Promise.all

## 第四批：模板字面量类型（字符串处理）

- [ ] 106 · Trim Left
- [ ] 108 · Trim
- [ ] 110 · Capitalize
- [ ] 116 · Replace
- [ ] 119 · ReplaceAll
- [ ] 612 · KebabCase

## 第五批：联合类型的行为特性（面试常问"分布式条件类型"）

- [ ] 1042 · IsNever
- [ ] 1097 · IsUnion

## 第六批：按字段类型筛选/改造（对应真实工程场景，比如QueryConfig类型）

- [ ] 2595 · PickByType
- [ ] 2852 · OmitByType
- [ ] 2757 · PartialByKeys
- [ ] 2759 · RequiredByKeys
- [ ] 2793 · Mutable
- [ ] 1130 · ReplaceKeys

## 第七批：类型查找

- [ ] 62 · Type Lookup

---

## 统计

Warm-up + Easy 14道 + Medium精选 22道 = **共36道**，按每天2-3道，大概3周内能扎实过一遍。

## 刷题方法建议

- 每天做的时候，先自己写5-10分钟，写不出来再看答案——这比直接看答案背下来有效得多，因为面试是让你现场推导，不是让你默写
- 做完对照社区高赞题解（type-challenges的GitHub仓库每道题下面都有讨论区），重点看有没有比自己想的更简洁的写法，积累"套路"
- 每周留一天不学新题，回头把这周做过的题目不看答案重新写一遍，检验是不是真的记住了
- 目标是对`infer`、条件类型`T extends U ? X : Y`、映射类型`[P in K]`、模板字面量类型这几个基本工具形成肌肉记忆，能现场推导新题目，而不是背下某一道题的具体答案

## 跳过建议（除非时间充裕当兴趣挑战）

- **算法题伪装成类型题**：Fibonacci Sequence、Tower of Hanoi、Pascal's triangle、Permutation、Combination、Subsequence、CartesianProduct 等——本质是用类型系统实现算法，面试不会考，投入产出比低
- **lodash方法批量重实现**：Chunk、Zip、Flatten(已做1道)、Reverse、Trunc、Without、IndexOf、Join、LastIndexOf、Unique 等——做过Flatten有递归处理数组类型的手感就够，没必要每个都做
- **偏工具/小众场景题**：BEM style string、InorderTraversal、JSON Schema to TypeScript、CheckRepeatedChars、Parse URL Params、GetMiddleElement 等——不是通用可迁移的模式，优先级低
