// 可以使用循环遍历输入数组，同时使用一个对象来辅助构建树形结构。具体思路如下：
// 遍历输入数组，如果parentId为0，则将该项添加到树形结构的第一层，并将其存储到辅助对象中。
// 如果parentId不为0，则将该项添加到其父节点的children数组中，并将其存储到辅助对象中。
// 遍历完输入数组后，输出树形结构的第一层即可。

function toTree(list) {
    const tree = [];
    const map = {}; // 存所有节点的引用，方便 O(1) 查找父节点

    for (const item of list) {
        const { id, parentId, ...rest } = item;

        // 如果当前节点不存在，先占位
        if (!map[id]) {
            map[id] = { id, children: [] };
        }

        // 补充当前节点的数据（避免覆盖 children）
        Object.assign(map[id], rest);

        const node = map[id];

        if (parentId === 0) {
            // 根节点
            tree.push(node);
        } else {
            // 父节点不存在则先占位
            if (!map[parentId]) {
                map[parentId] = { id: parentId, children: [] };
            }
            map[parentId].children.push(node);
        }
    }

    return tree;
}
