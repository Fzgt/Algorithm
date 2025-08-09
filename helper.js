// 数组转树
function toTree(list) {
    const tree = [];
    const map = {};

    for (const item of list) {
        const {id, parentId, ...rest} = item;

        if (!map[id]) {
            map[id] = {id, children: []};
        }

        Object.assign(map[id], rest);

        const node = map[id];
        
        if (parentId === 0) {
            tree.push(node);
        } else {
            if (!map[parentId]) {
                map[parentId] = {id: parentId, children: []}
            }
            map[parentId].children.push(node);
        }
    }

    return tree;
}