const { comparator } = require('../../Comparator/comparator');



// ============ Stacks ============== //



class StackNode {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.comparatorHelperStack = null;
    }

    push(val) {
        try {
            if (val == 0 || val == false || val) {
                let newNode = new StackNode(val);
                if (this.head == null) {
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if (this.head != null) {
                    newNode.next = this.head;
                    this.head = newNode;
                    this.size++;
                    return val;
                }
            }
            else {
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    pop() {
        try {
            if (this.head == null) {
                return null;
            }
            else {
                if (this.head == this.tail) {
                    let toPop = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return toPop;
                }
                else {
                    let toPop = this.head.value;
                    let newHead = this.head.next;
                    this.head = newHead;
                    this.size--;
                    return toPop;
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    top() {
        try {
            if (this.head == null) {
                return null;
            }
            else {
                return this.head.value;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    isEmpty() {
        try {
            if (this.head == null) {
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

    toArray() {
        try {
            let toReturn = [];
            if (!this.isEmpty()) {
                let traverse = this.head;
                toReturn.push(traverse.value);
                while (traverse.next != null) {
                    traverse = traverse.next;
                    toReturn.push(traverse.value);
                }
                return toReturn;
            }
            else {
                return toReturn;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    search(val) {
        try {
            if (val == 0 || val == false || val) {
                if (!this.isEmpty()) {
                    if ((typeof (val) === 'object') || (typeof (val) === 'function')) {
                        let traverse = this.head;
                        if (comparator(traverse.value, val)) {
                            return traverse;
                        }
                        while (traverse.next != null) {
                            traverse = traverse.next;
                            if (comparator(traverse.value, val)) {
                                return traverse;
                            }
                        }
                        return null;
                    }
                    else {
                        let traverse = this.head;
                        if (traverse.value === val) {
                            return traverse;
                        }
                        while (traverse.next != null) {
                            traverse = traverse.next;
                            if (traverse.value === val) {
                                return traverse;
                            }
                        }
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
            else {
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}





// ======================= //

module.exports.Stack = Stack;