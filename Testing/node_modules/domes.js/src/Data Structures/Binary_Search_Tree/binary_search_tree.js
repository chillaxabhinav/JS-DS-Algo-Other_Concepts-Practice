const { Stack } = require('../Stacks/stack');
const { Queue } = require('../Queues/queue');


// ===== Binary Search Trees ===== //


/*

=>  Types of Binary Search Trees 
    1. number
    2. string

=>  Comparison Methods of Binray Search Trees
    1. number
        1. Normal comparison (<,>,=)
    2. string
        1. Normal ASCII Comparing
        2. Based on Length 

*/


const typesMap = {
    1: 'number',
    2: 'string'
}


const typesAndMethods = {
    1: [1],
    2: [1, 2]
}




function insertNumberAndStringAscii(val) {
    let newNode = new BinarySearchTreeNode(val, this.noOfNodes);
    let traverse = this.root;
    while (true) {
        if (newNode.value <= traverse.value) {
            if (traverse.left != null) {
                traverse = traverse.left;
            }
            else {
                traverse.left = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
        else if (newNode.value > traverse.value) {
            if (traverse.right != null) {
                traverse = traverse.right;
            }
            else {
                traverse.right = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
    }
}

function insertStringLength(val) {
    let newNode = new BinarySearchTreeNode(val, this.noOfNodes);
    let traverse = this.root;
    while (true) {
        if (newNode.value.length <= traverse.value.length) {
            if (traverse.left != null) {
                traverse = traverse.left;
            }
            else {
                traverse.left = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
        else if (newNode.value.length > traverse.value.length) {
            if (traverse.right != null) {
                traverse = traverse.right;
            }
            else {
                traverse.right = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
    }
}

function inOrder(current, visited) {
    if (current == null) {
        return;
    }
    inOrder(current.left, visited);
    visited.push({ value: current.value, id: current.id });
    inOrder(current.right, visited);
}

function preOrder(current, visited) {
    if (current == null) {
        return;
    }
    visited.push({ value: current.value, id: current.id });
    inOrder(current.left, visited);
    inOrder(current.right, visited);
}

function postOrder(current, visited) {
    if (current == null) {
        return;
    }
    inOrder(current.left, visited);
    inOrder(current.right, visited);
    visited.push({ value: current.value, id: current.id });
}

function getIdFromValue(current, mynodes, val) {
    if (current == null) {
        return;
    }
    if (current.value === val) {
        mynodes.push({ value: current.value, id: current.id });
    }
    getIdFromValue(current.left, mynodes, val);
    getIdFromValue(current.right, mynodes, val);
}

function leaveNodes(current, leaves) {
    if (current == null) {
        return;
    }
    if (current.left == null && current.right == null) {
        leaves.push({ value: current.value, id: current.id });
    }
    leaveNodes(current.left, leaves);
    leaveNodes(current.right, leaves);
}

function findHeight(current) {
    if (current == null) {
        return 0;
    }
    else {
        let l = findHeight(current.left);
        let r = findHeight(current.right);
        return Math.max(l, r) + 1;
    }
}

function childs(current, id) {
    if (current == null) {
        return null;
    }
    else if (current.id === id) {
        let toReturn = {
            count: 0
        };
        if (current.left != null) {
            toReturn['left'] = {
                value: current.left.value,
                id: current.left.id
            };
            toReturn['count']++;
        }
        else {
            toReturn['left'] = null;
        }
        if (current.right != null) {
            toReturn['right'] = {
                value: current.right.value,
                id: current.right.id
            };
            toReturn['count']++;
        }
        else {
            toReturn['right'] = null;
        }
        return toReturn;
    }
    else {
        childs(current.left);
        childs(current.right);
    }
}

function fixingID() {
    let myroot = this.root;
    let queue = new Queue();
    let count = 1;
    queue.enqueue(myroot);
    while (queue.size > 0) {
        let toChange = queue.dequeue();
        toChange.id = count;
        this.nodeIDMap[count] = toChange;
        count++;
        if (toChange.left != null) {
            queue.enqueue(toChange.left);
        }
        if (toChange.right != null) {
            queue.enqueue(toChange.right);
        }
    }
}

function deleteHelperBFS(myroot) {
    let queue = new Queue();
    queue.enqueue(myroot);
    let myarr = [];
    while (queue.size > 0) {
        let my = queue.dequeue();
        if (myarr.length === 0) {
            myarr.push({ value: my.value, id: my.id });
        }
        if (myarr.length > 0) {
            if (my.value <= myarr[0].value) {
                myarr.pop();
                myarr.push({ value: my.value, id: my.id });
            }
        }
        if (my.left != null) {
            queue.enqueue(my.left);
        }
        if (my.right != null) {
            queue.enqueue(my.right);
        }
    }
    return myarr;
}

function treeTraverse(myroot, id) {
    let queue = new Queue();
    queue.enqueue(myroot);
    while (queue.size > 0) {
        let my = queue.dequeue();
        if (my.id === id) {
            return my;
        }
        if (my.left != null) {
            queue.enqueue(my.left);
        }
        if (my.right != null) {
            queue.enqueue(my.right);
        }
    }
}

function returnNodeUsingValue(myroot, val) {
    let queue = new Queue();
    queue.enqueue(myroot);
    while (queue.size > 0) {
        let my = queue.dequeue();
        if (my.value === val) {
            return my;
        }
        if (my.left != null) {
            queue.enqueue(my.left);
        }
        if (my.right != null) {
            queue.enqueue(my.right);
        }
    }
    return null;
}








class BinarySearchTreeNode {

    constructor(data, id) {
        this.value = data;
        this.left = null;
        this.right = null;
        this.id = id;
    }

}



class BinarySearchTree {

    constructor(type, method) {
        this.root = null;
        this.type = type;
        this.method = method;
        this.noOfNodes = 0;
        this.nodeIDMap = {}
        this.comparatorHelperBST = null;
    }

    insert(val) {
        try {
            const myCurrentType = typesMap[this.type];
            if (arguments.length > 0) {
                if (typeof (val) === myCurrentType) {
                    const supportedMethods = typesAndMethods[parseInt(this.type)];
                    if (supportedMethods.find(ele => parseInt(ele) === parseInt(this.method))) {
                        if (this.root == null) {
                            this.noOfNodes++;
                            let newNode = new BinarySearchTreeNode(val, this.noOfNodes);
                            this.nodeIDMap[this.noOfNodes] = newNode;
                            this.root = newNode;
                            return val;
                        }
                        else if (this.type === 1 && this.method === 1) {
                            this.noOfNodes++;
                            insertNumberAndStringAscii.call(this, val);
                            return val;
                        }
                        else if (this.type === 2 && this.method === 1) {
                            this.noOfNodes++;
                            insertNumberAndStringAscii.call(this, val);
                            return val;
                        }
                        else if (this.type === 2 && this.method === 2) {
                            this.noOfNodes++;
                            insertStringLength.call(this, val);
                            return val;
                        }
                    }
                    else {
                        throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods')
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    search(val) {
        try {
            const myCurrentType = typesMap[this.type];
            if (arguments.length > 0) {
                if (typeof (val) === myCurrentType) {
                    if (this.root != null) {
                        let traverse = this.root;
                        while (true) {
                            if (traverse.value === val) {
                                return { value: traverse.value, id: traverse.id };
                                break;
                            }
                            else if (val <= traverse.value && traverse.left != null) {
                                traverse = traverse.left;
                            }
                            else if (val > traverse.value && traverse.right != null) {
                                traverse = traverse.right;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                    else {
                        return null;
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    isEmpty() {
        try {
            if (this.root == null) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    BFS(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let queue = new Queue();
                        let visited = [];
                        queue.enqueue(myroot);
                        while (queue.size > 0) {
                            let toBeChecked = queue.dequeue();
                            visited.push({ value: toBeChecked.value, id: toBeChecked.id });
                            if (toBeChecked.left != null) {
                                queue.enqueue(toBeChecked.left);
                            }
                            if (toBeChecked.right != null) {
                                queue.enqueue(toBeChecked.right);
                            }
                        }
                        return visited;
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number')
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    DFSInOrder(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let visited = [];
                        inOrder.call(this, myroot, visited);
                        return visited;
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    DFSPreOrder(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let visited = [];
                        preOrder.call(this, myroot, visited);
                        return visited;
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    DFSPostOrder(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let visited = [];
                        postOrder.call(this, myroot, visited);
                        return visited;
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    height(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.nodeIDMap[id];
                        return findHeight.call(this, myroot);
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    rootNodeID() {
        try {
            if (this.root != null) {
                return parseInt(this.root.id);
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getIdsOfValue(val, id) {
        try {
            if (arguments.length > 0) {
                const myCurrentType = typesMap[this.type];
                if (typeof (val) === myCurrentType) {
                    if (arguments.length > 1) {
                        if (typeof (id) === 'number') {
                            if (id >= 1 && id <= this.noOfNodes) {
                                let myroot = this.nodeIDMap[id];
                                let mynodes = [];
                                getIdFromValue.call(this, myroot, mynodes, val);
                                return mynodes;
                            }
                            else {
                                throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                            }
                        }
                        else {
                            throw new Error('ID passed is not of type number');
                        }
                    }
                    else {
                        if (!this.isEmpty()) {
                            let myroot = this.nodeIDMap[this.rootNodeID()];
                            let mynodes = [];
                            getIdFromValue.call(this, myroot, mynodes, val);
                            return mynodes;
                        }
                        else {
                            return null;
                        }
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else {
                throw new Error('Argument/s not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    leafNodes(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.nodeIDMap[id];
                        let leaves = [];
                        leaveNodes.call(this, myroot, leaves);
                        return leaves;
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    childNodes(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.nodeIDMap[id];
                        return childs.call(this, myroot, id);
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    delete(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.root;
                        let node, parentNode;
                        let mystack = new Stack();
                        mystack.push(myroot);
                        while (mystack.size > 0) {
                            let current = mystack.pop();
                            if (current.id === id) {
                                node = current;
                                parentNode = null;
                                break;
                            }
                            if (current.left != null) {
                                if (current.left.id === id) {
                                    parentNode = current;
                                    node = current.left;
                                    break;
                                }
                            }
                            if (current.right != null) {
                                if (current.right.id === id) {
                                    parentNode = current;
                                    node = current.right;
                                    break;
                                }
                            }
                            if (current.left != null) {
                                mystack.push(current.left);
                            }
                            if (current.right != null) {
                                mystack.push(current.right);
                            }
                        }
                        let noOfChilds = this.childNodes(id);
                        let deletedNode = {
                            value: node.value,
                            id: node.id
                        };
                        if (node.id === myroot.id) {
                            if (noOfChilds.count === 0) {
                                this.root = null;
                                this.noOfNodes--;
                                this.nodeIDMap = {};
                                return deletedNode;
                            }
                            else if (noOfChilds.count === 1) {
                                if (node.left != null) {
                                    this.root = node.left;
                                    this.noOfNodes--;
                                    this.nodeIDMap = {};
                                    fixingID.call(this);
                                    return deletedNode;
                                }
                                if (node.right != null) {
                                    this.root = node.right;
                                    this.noOfNodes--;
                                    this.nodeIDMap = {};
                                    fixingID.call(this);
                                    return deletedNode;
                                }
                            }
                            else if (noOfChilds.count === 2) {
                                let minLeftObj = deleteHelperBFS.call(this, node.right);
                                let myNextNode = treeTraverse.call(this, this.root, minLeftObj[0].id);
                                let temp = this.root.value;
                                this.root.value = myNextNode.value;
                                myNextNode.value = temp;
                                this.delete(parseInt(myNextNode.id));
                                return deletedNode;
                            }
                        }
                        else {
                            if (noOfChilds.count === 0) {
                                if (parentNode.left != null) {
                                    if (parentNode.left.id === node.id) {
                                        parentNode.left = null;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                                if (parentNode.right != null) {
                                    if (parentNode.right.id === node.id) {
                                        parentNode.right = null;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                            }
                            else if (noOfChilds.count === 1) {
                                if (node.left != null) {
                                    if (parentNode.left.id === node.id) {
                                        parentNode.left = node.left;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                    if (parentNode.right.id === node.id) {
                                        parentNode.right = node.left;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                                if (node.right != null) {
                                    if (parentNode.left.id === node.id) {
                                        parentNode.left = node.right;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                    if (parentNode.right.id === node.id) {
                                        parentNode.right = node.right;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                            }
                            else if (noOfChilds.count === 2) {
                                if (parentNode.left != null) {
                                    if (parentNode.left.id === node.id) {
                                        let minLeftObj = deleteHelperBFS.call(this, node.right);
                                        let myNextNode = treeTraverse.call(this, this.root, minLeftObj[0].id);
                                        let temp = node.value;
                                        node.value = myNextNode.value;
                                        myNextNode.value = temp;
                                        this.delete(parseInt(myNextNode.id));
                                        return deletedNode;
                                    }
                                }
                                if (parentNode.right != null) {
                                    if (parentNode.right.id === node.id) {
                                        let minLeftObj = deleteHelperBFS.call(this, node.right);
                                        let myNextNode = treeTraverse.call(this, this.root, minLeftObj[0].id);
                                        let temp = node.value;
                                        node.value = myNextNode.value;
                                        myNextNode.value = temp;
                                        this.delete(parseInt(myNextNode.id));
                                        return deletedNode;
                                    }
                                }
                            }
                        }
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateWithValue(val, updatedVal) {
        try {
            if (arguments.length > 0) {
                const myCurrentType = typesMap[this.type];
                if (typeof (val) === myCurrentType && typeof (updatedVal) === myCurrentType) {
                    let toUpdate = returnNodeUsingValue.call(this, this.root, val);
                    if (toUpdate != null) {
                        this.delete(toUpdate.id);
                        this.insert(updatedVal);
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateWithID(id, updatedVal) {
        try {
            if (arguments.length > 0) {
                const myCurrentType = typesMap[this.type];
                if (typeof (id) === 'number' && typeof (updatedVal) === myCurrentType) {
                    if (id >= 1 && id <= this.noOfNodes) {
                        this.delete(id);
                        this.insert(updatedVal);
                        return true;
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('Passed updated value does not match the type of Binary Search Tree or id is not number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getNodeValueWithId(id) {
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.nodeIDMap[id];
                        let node = treeTraverse.call(this, myroot, id);
                        return { value: node.value, id: node.id };
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}





// =================================== //




module.exports.BinarySearchTree = BinarySearchTree;