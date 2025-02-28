// 可以使用循环遍历输入数组，同时使用一个对象来辅助构建树形结构。具体思路如下：

// 遍历输入数组，如果parentId为0，则将该项添加到树形结构的第一层，并将其存储到辅助对象中。
// 如果parentId不为0，则将该项添加到其父节点的children数组中，并将其存储到辅助对象中。
// 遍历完输入数组后，输出树形结构的第一层即可。

function toTree(arr) {
    // const tree = [];
    // const map = {};

    // for (const item of arr) {
    //     const { id, parentId, ...rest } = item;
    //     const node = { id, children: [], ...rest };

    //     if (parentId === 0) {
    //         tree.push(node);
    //     } else {
    //         if (!map[parentId]) {
    //             map[parentId] = { children: [] };
    //         }
    //         map[parentId].children.push(node);
    //     }

    //     map[id] = node;
    // }

    // return tree;

    const tree = [];
    const map = {}

    for (const item of arr) {
        const { id, parentId, ...rest } = item;
        const node = { id, children: [], ...rest };

        if (parentId === 0) {
            tree.push(node)
        } else {
            if (!map[parentId]) {

            }
        }
    }
}