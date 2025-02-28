// const os = require('os');
// console.log(os.cpus())

const UglifyJS = require("uglify-js");
const code = "var a = 1;"
const toplevel = UglifyJS.parse(code); //toplevel 就是语法树
console.log(toplevel)
const transformer = new UglifyJS.TreeTransformer(function (node){
    if (node instanceof UglifyJS.AST_Number) {
        node.value = 'Ox' + Number(node.value).toString(16);
        return node;
    }
});
toplevel.transform(transformer);
var ncode = toplevel.print_to_string();
// console.log(ncode);

