// 208. 实现Trie（前缀树）
class Trie {
    private children: Record<string, any>;

    constructor() {
        this.children = {};
    }

    insert(word: string): void {
        let node = this.children;
        for (const ch of word) {
            if (!node[ch]) {
                node[ch] = {};
            }
            node = node[ch];
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        const node = this.searchPrefix(word);
        return node !== false && node.isEnd === true;
    }

    startsWith(prefix: string): boolean {
        return this.searchPrefix(prefix) !== false;
    }

    private searchPrefix(prefix: string): any {
        let node = this.children;
        for (const ch of prefix) {
            if (!node[ch]) {
                return false;
            }
            node = node[ch];
        }
        return node;
    }
}

// 如果我们插入了"cat"和"car"，Trie结构会是：
// root
//   └── c
//       └── a
//           ├── t (isEnd: true)
//           └── r (isEnd: true)

// insert方法就是在构建这个Trie结构。
// searchPrefix方法深入到Trie的每一层，检查是否存在对应的字符。
// search方法在找到对应的节点后，还要检查isEnd属性，确保这个节点是一个完整的单词。
// startsWith方法只需要检查到前缀的最后一个字符即可，不需要检查isEnd属性。
// 这个Trie实现的时间复杂度是O(m)