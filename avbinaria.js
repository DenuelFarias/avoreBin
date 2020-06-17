const Tree = {}
function insert(tree, value) {
    if (tree.value) {
        if (value > tree.value) {
            insert(tree.right, value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
    }
}
function search(tree, value) {
    if (!tree.value || tree.value === value) {
        return tree.value

    } else if (value < tree.value) {
        return search(tree.left, value)

    } else {
        return search(tree.right, value)
    }
}

insert(Tree, 25)
console.log(Tree)
insert(Tree, 30)
console.log(Tree)
insert(Tree, 40)
console.log(Tree)
insert(Tree, 5)
console.log(Tree)
 
console.log('busca')
console.log(search(Tree, 30))


