const { comparator } = require('../../Comparator/comparator');


// ====== Doubly Linked List ====== //



class DoublyLinkedListNode {

    constructor(data) {
        this.prev = null;
        this.value = data;
        this.next = null;
    }

}


class DoublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.comparatorHelperDLL = null;
    }

    insertAtStart(val) {
        try {
            if (val == 0 || val == false || val) {
                let newNode = new DoublyLinkedListNode(val);
                if (this.head == null) {
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if (this.head != null) {
                    newNode.next = this.head;
                    this.head.prev = newNode;
                    this.head = newNode;
                    this.size++;
                    return val;
                }
            }
            else {
                throw new Error('Cannot find passed value or passed value is undefined/null')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    insertAtEnd(val) {
        try {
            if (val == 0 || val == false || val) {
                let newNode = new DoublyLinkedListNode(val);
                if (this.head == null) {
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if (this.head != null) {
                    this.tail.next = newNode;
                    newNode.prev = this.tail;
                    this.tail = newNode;
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

    deleteFromStart() {
        try {
            if (this.head == null) {
                return null;
            }
            else if (this.head != null) {
                if (this.head == this.tail) {
                    let deletedNodeValue = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return deletedNodeValue;
                }
                else {
                    let deletedNodeValue = this.head.value;
                    let newHead = this.head.next;
                    this.head = newHead;
                    newHead.prev = null;
                    this.size--;
                    return deletedNodeValue;
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    deleteFromEnd() {
        try {
            if (this.head == null) {
                return null;
            }
            else if (this.head != null) {
                if (this.head == this.tail) {
                    let deletedNodeValue = this.tail.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return deletedNodeValue;
                }
                else {
                    let frontNode = this.head.next;
                    let backNode = this.head;
                    while (frontNode.next != null) {
                        backNode = frontNode;
                        frontNode = frontNode.next;
                    }
                    let deletedNodeValue = frontNode.value;
                    this.tail = backNode;
                    backNode.next = null;
                    frontNode.prev = null;
                    this.size--;
                    return deletedNodeValue;
                }
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
            else if (this.head != null) {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    lookStart() {
        try {
            if (this.isEmpty()) {
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

    lookEnd() {
        try {
            if (this.isEmpty()) {
                return null;
            }
            else {
                return this.tail.value;
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
                while (traverse.next != null) {
                    toReturn.push(traverse.value);
                    traverse = traverse.next;
                }
                toReturn.push(traverse.value);
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
                        while (traverse.next != null) {
                            if (comparator(traverse.value, val)) {
                                return traverse;
                            }
                            traverse = traverse.next;
                        }
                        if (comparator(traverse.value, val)) {
                            return traverse;
                        }
                        return null;
                    }
                    else {
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (traverse.value === val) {
                                return traverse;
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value === val) {
                            return traverse;
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

    get(index) {
        try {
            if (index == 0 || index == false || index) {
                if (typeof (index) === 'number') {
                    if ((index >= 0) && (index < (this.size))) {
                        let traverse = this.head;
                        for (let i = 0; i < index; i++) {
                            traverse = traverse.next;
                        }
                        return traverse;
                    }
                    else {
                        throw new Error('Index out of range')
                    }
                }
                else {
                    throw new Error('Index is not a number');
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

    set(val, index) {
        try {
            if ((index == 0 || index == false || index) && (val == 0 || val == false || val)) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index <= this.size) {
                        if (index == 0) {
                            return this.insertAtStart(val);
                        }
                        else if (index == this.size) {
                            return this.insertAtEnd(val);
                        }
                        else {
                            let newNode = new DoublyLinkedListNode(val);
                            let backNode = this.head;
                            let frontNode = this.head.next;
                            for (let i = 0; i < (index - 1); i++) {
                                backNode = frontNode;
                                frontNode = frontNode.next;
                            }
                            newNode.next = frontNode;
                            newNode.prev = backNode;
                            backNode.next = newNode;
                            frontNode.prev = newNode;
                            this.size++;
                            return val;
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not a number');
                }
            }
            else {
                throw new Error('Cannot find passed value or passed values are undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    delete(val) {
        try {
            if (val == 0 || val == false || val) {
                if (!this.isEmpty()) {
                    if (this.search(val)) {
                        if ((typeof (val) === 'object') || (typeof (val) === 'function')) {
                            if (comparator(this.head.value, val)) {
                                return this.deleteFromStart(val);
                            }
                            else if (comparator(this.tail.value, val)) {
                                return this.deleteFromEnd(val);
                            }
                            else {
                                let backNode = this.head;
                                let currentNode = this.head.next;
                                let frontNode = this.head.next.next;
                                while (frontNode.next != null) {
                                    if (comparator(currentNode.value, val)) {
                                        let deletedNodeValue = currentNode.value;
                                        backNode.next = frontNode;
                                        frontNode.prev = backNode;
                                        currentNode.next = null;
                                        currentNode.prev = null;
                                        this.size--;
                                        return deletedNodeValue;
                                    }
                                    backNode = currentNode;
                                    currentNode = frontNode;
                                    frontNode = frontNode.next;
                                }
                                if (comparator(currentNode.value, val)) {
                                    let deletedNodeValue = currentNode.value;
                                    backNode.next = frontNode;
                                    frontNode.prev = backNode;
                                    currentNode.next = null;
                                    currentNode.prev = null;
                                    this.size--;
                                    return deletedNodeValue;
                                }
                            }
                        }
                        else {
                            if (this.head.value === val) {
                                return this.deleteFromStart(val);
                            }
                            else if (this.tail.value === val) {
                                return this.deleteFromEnd(val);
                            }
                            else {
                                let backNode = this.head;
                                let currentNode = this.head.next;
                                let frontNode = this.head.next.next;
                                while (frontNode.next != null) {
                                    if (currentNode.value === val) {
                                        let deletedNodeValue = currentNode.value;
                                        backNode.next = frontNode;
                                        frontNode.prev = backNode;
                                        currentNode.next = null;
                                        currentNode.prev = null;
                                        this.size--;
                                        return deletedNodeValue;
                                    }
                                    backNode = currentNode;
                                    currentNode = frontNode;
                                    frontNode = frontNode.next;
                                }
                                if (currentNode.value === val) {
                                    let deletedNodeValue = currentNode.value;
                                    backNode.next = frontNode;
                                    frontNode.prev = backNode;
                                    currentNode.next = null;
                                    currentNode.prev = null;
                                    this.size--;
                                    return deletedNodeValue;
                                }
                            }
                        }
                    }
                    else {
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

    reverse() {
        try {
            if (!this.isEmpty()) {
                if (this.size == 1) {
                    return true;
                }
                else {
                    let traverse = this.head;
                    let temp;
                    for (let i = 0; i < this.size; i++) {
                        temp = traverse.next;
                        traverse.next = traverse.prev;
                        traverse.prev = temp;
                        traverse = traverse.prev;
                    }
                    temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    return true;
                }
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    searchAll(val) {
        try {
            if (val == 0 || val == false || val) {
                let toReturn = {
                    count: 0,
                    positions: []
                };
                if (!this.isEmpty()) {
                    if ((typeof (val) === 'object') || (typeof (val) === 'function')) {
                        let traverse = this.head;
                        let i;
                        for (i = 0; i < (this.size - 1); i++) {
                            if (comparator(traverse.value, val)) {
                                toReturn.count++;
                                toReturn.positions.push(i);
                            }
                            traverse = traverse.next;
                        }
                        if (comparator(traverse.value, val)) {
                            toReturn.count++;
                            toReturn.positions.push(i);
                        }
                        return toReturn;
                    }
                    else {
                        let traverse = this.head;
                        let i;
                        for (i = 0; i < (this.size - 1); i++) {
                            if (traverse.value === val) {
                                toReturn.count++;
                                toReturn.positions.push(i);
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value === val) {
                            toReturn.count++;
                            toReturn.positions.push(i);
                        }
                        return toReturn;
                    }
                }
                else {
                    return toReturn;
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

    deleteAll(val) {
        try {
            if (val == 0 || val == false || val) {
                let newDoubly = new DoublyLinkedList();
                if (!this.isEmpty()) {
                    if ((typeof (val) === 'object') || (typeof (val) === 'function')) {
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (!comparator(traverse.value, val)) {
                                newDoubly.insertAtEnd(traverse.value);
                            }
                            traverse = traverse.next;
                        }
                        if (!comparator(traverse.value, val)) {
                            newDoubly.insertAtEnd(traverse.value);
                        }
                        return newDoubly;
                    }
                    else {
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (traverse.value !== val) {
                                newDoubly.insertAtEnd(traverse.value);
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value !== val) {
                            newDoubly.insertAtEnd(traverse.value);
                        }
                        return newDoubly;
                    }
                }
                else {
                    return newDoubly;
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

    remove(index) {
        try {
            if (index == 0 || index == false || index) {
                if (typeof (index) === 'number') {
                    if (index < this.size && index >= 0) {
                        if (index === 0) {
                            return this.deleteFromStart();
                        }
                        else if (index === (this.size - 1)) {
                            return this.deleteFromEnd();
                        }
                        else {
                            let traverse = this.head.next;
                            for (let i = 1; i < index; i++) {
                                traverse = traverse.next;
                            }
                            return this.delete(traverse.value);
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not a number');
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

    updateWithValue(val, updatedVal) {
        try {
            if ((val == 0 || val == false || val) && (updatedVal == 0 || updatedVal == false || updatedVal)) {
                if (!this.isEmpty()) {
                    let node = this.search(val);
                    if (node != null) {
                        node.value = updatedVal;
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
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

    updateWithIndex(index, updatedVal) {
        try {
            if ((updatedVal == 0 || updatedVal == false || updatedVal) && (index == 0 || index == false || index)) {
                if (typeof (index) === 'number') {
                    if (index < this.size && index >= 0) {
                        let node = this.get(index);
                        node.value = updatedVal;
                        return true;
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not a number');
                }
            }
            else {
                throw new Error('Cannot find passed values or passed value is undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateAllWithValue(val, updatedVal) {
        try {
            if ((val == 0 || val == false || val) && (updatedVal == 0 || updatedVal == false || updatedVal)) {
                if (!this.isEmpty()) {
                    if ((typeof (val) === 'object') || (typeof (val) === 'function')) {
                        let traverse = this.head;
                        let count = 0;
                        while (traverse.next != null) {
                            if (comparator(traverse.value, val)) {
                                traverse.value = updatedVal;
                                count++;
                            }
                            traverse = traverse.next;
                        }
                        if (comparator(traverse.value, val)) {
                            traverse.value = updatedVal;
                            count++;
                        }
                        if (count > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        let traverse = this.head;
                        let count = 0;
                        while (traverse.next != null) {
                            if (traverse.value === val) {
                                traverse.value = updatedVal;
                                count++;
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value === val) {
                            traverse.value = updatedVal;
                            count++;
                        }
                        if (count > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    return false;
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





// ================================== //


module.exports.DoublyLinkedList = DoublyLinkedList;