const { Stack } = require('../Stacks/stack');
const { Queue } = require('../Queues/queue');





// =========================== Graphs ================================ //



// Below is type of Graph Node ID Accepted

const typeID = {
    1: 'number',
    2: 'string'
};



function GraphBFSHelper(myans, myqueue, visited) {
    while (myqueue.size > 0) {
        let myvertex = myqueue.dequeue();
        if (!visited[myvertex]) {
            myans.push({ value: this.allVertex[myvertex].value, id: this.allVertex[myvertex].id });
            visited[myvertex] = true;
            for (let i of this.adjacencyList[myvertex]) {
                myqueue.enqueue(i.id);
            }
        }
    }
}

function GraphDFSHelper(myans, mystack, visited) {
    while (mystack.size > 0) {
        let myvertex = mystack.pop();
        if (!visited[myvertex]) {
            myans.push({ value: this.allVertex[myvertex].value, id: this.allVertex[myvertex].id });
            visited[myvertex] = true;
            for (let i of this.adjacencyList[myvertex]) {
                mystack.push(i.id);
            }
        }
    }
}

function WeightedGraphBFSHelper(myans, myqueue, visited) {
    while (myqueue.size > 0) {
        let myvertex = myqueue.dequeue();
        if (!visited[myvertex]) {
            myans.push({ value: this.allVertex[myvertex].value, id: this.allVertex[myvertex].id });
            visited[myvertex] = true;
            for (let i of this.adjacencyList[myvertex]) {
                myqueue.enqueue(i.node.id);
            }
        }
    }
}

function WeightedGraphDFSHelper(myans, mystack, visited) {
    while (mystack.size > 0) {
        let myvertex = mystack.pop();
        if (!visited[myvertex]) {
            myans.push({ value: this.allVertex[myvertex].value, id: this.allVertex[myvertex].id });
            visited[myvertex] = true;
            for (let i of this.adjacencyList[myvertex]) {
                mystack.push(i.node.id);
            }
        }
    }
}




class MinGraphPriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        try {
            if (arguments.length > 0) {
                if (val === 0 || val === false || val) {
                    if (typeof (priority) === 'number') {
                        const newNode = new PriorityQueueNode(val, priority);
                        this.values.push(newNode);
                        let newNodeIndex = (this.values.length) - 1;
                        let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
                        while (parentIndex >= 0 && this.values[parentIndex].priority > this.values[newNodeIndex].priority) {
                            let temp = this.values[parentIndex];
                            this.values[parentIndex] = this.values[newNodeIndex];
                            this.values[newNodeIndex] = temp;
                            newNodeIndex = parentIndex;
                            parentIndex = Math.floor((newNodeIndex - 1) / 2);
                        }
                        return val;
                    }
                    else {
                        throw new Error('Priority is not of type number apart from Infinity/-Infinity or not passed');
                    }
                }
                else {
                    throw new Error('Passed value is undefined/null');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    dequeue() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    let myValue = this.values.pop();
                    return myValue.value;
                }
                else if (this.values.length === 2) {
                    let myValue;
                    if (this.values[0].priority < this.values[1].priority) {
                        myValue = this.values.shift();
                    }
                    else {
                        myValue = this.values.pop();
                    }
                    return myValue.value;
                }
                else if (this.values.length === 3) {
                    let myValue = this.values.shift();
                    if (this.values[0].priority > this.values[1].priority) {
                        let temp = this.values[0];
                        this.values[0] = this.values[1];
                        this.values[1] = temp;
                    }
                    return myValue.value;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const myValue = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    while (this.values[index].priority > left.priority || this.values[index].priority > right.priority) {
                        if (right.priority > left.priority) {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 1];
                            this.values[2 * index + 1] = temp2;
                            index = 2 * index + 1;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                        else {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 2];
                            this.values[2 * index + 2] = temp2;
                            index = 2 * index + 2;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                    }
                    this.values = this.values.filter(ele => ele.value !== undefined);
                    return myValue.value;
                }
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }
}









class GraphNode {

    constructor(data, id) {
        this.value = data;
        this.id = id;
    }

}



class UWUDGraph {

    constructor(type) {
        this.adjacencyList = {};
        this.type = type;
        this.allVertex = {};
        this.comparatorHelperUWUD = null;
    }

    addVertex(val, ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (val === 0 || val === false || val === null || val) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    return false;
                                }
                                else {
                                    let newNode = new GraphNode(val, ID);
                                    this.allVertex[ID] = newNode;
                                    this.adjacencyList[ID] = [];
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (val === 0 || val === false || val === null || val) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                return false;
                            }
                            else {
                                let newNode = new GraphNode(val, ID);
                                this.allVertex[ID] = newNode;
                                this.adjacencyList[ID] = [];
                                return true;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of Graph');
                }
            }
            else {
                throw new Error('Arguments not passed')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    addEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                                if (found) {
                                    return true;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                                this.addVertex(null, ID1);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                            else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID1);
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                            if (found) {
                                return true;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                        else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                            this.addVertex(null, ID1);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                        else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID1);
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                        else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(ID, updatedValue) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    this.allVertex[ID].value = updatedValue;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                this.allVertex[ID].value = updatedValue;
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getValue(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                return this.allVertex[ID].value;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            return this.allVertex[ID].value;
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    removeEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                                this.adjacencyList[ID2] = this.adjacencyList[ID2].filter(ele => ele.id !== ID1);
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                            this.adjacencyList[ID2] = this.adjacencyList[ID2].filter(ele => ele.id !== ID1);
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeVertex(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                delete this.allVertex[ID];
                                delete this.adjacencyList[ID];
                                for (let i in this.adjacencyList) {
                                    this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                                }
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            delete this.allVertex[ID];
                            delete this.adjacencyList[ID];
                            for (let i in this.adjacencyList) {
                                this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    BFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let myqueue = new Queue();
                                let visited = {};
                                myqueue.enqueue(ID);
                                GraphBFSHelper.call(this, myans, myqueue, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let myqueue = new Queue();
                            let visited = {};
                            myqueue.enqueue(ID);
                            GraphBFSHelper.call(this, myans, myqueue, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    DFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let visited = {};
                                let mystack = new Stack();
                                mystack.push(ID);
                                GraphDFSHelper.call(this, myans, mystack, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let visited = {};
                            let mystack = new Stack();
                            mystack.push(ID);
                            GraphDFSHelper.call(this, myans, mystack, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    neighbours(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                for (let i of this.adjacencyList[ID]) {
                                    myans.push({ value: i.value, id: i.id });
                                }
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            for (let i of this.adjacencyList[ID]) {
                                myans.push({ value: i.value, id: i.id });
                            }
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    shortestPath(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID1) && currentType === typeof (ID2)) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            let path = {
                                steps: 0,
                                nodes: []
                            };
                            if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                                let levelMap = {};
                                let visited = {};
                                let helperVisited = {};
                                if (ID1 === ID2) {
                                    path.nodes.push(ID1);
                                    return path;
                                }
                                else {
                                    let found = 0;
                                    let myqueue = new Queue();
                                    myqueue.enqueue(ID1);
                                    levelMap[ID1] = { parent: null, level: 0 };
                                    while (myqueue.size > 0) {
                                        let current = myqueue.dequeue();
                                        if (!visited[current]) {
                                            visited[current] = true;
                                            helperVisited[current] = true;
                                            for (let i of this.adjacencyList[current]) {
                                                if (!helperVisited[i.id]) {
                                                    myqueue.enqueue(i.id);
                                                    levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                    helperVisited[i.id] = true;
                                                }
                                                if (i.id === ID2) {
                                                    found = 1;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (found === 1) {
                                        path.steps = levelMap[ID2].level;
                                        let my = levelMap[ID2];
                                        path.nodes.push(ID2);
                                        while (my.parent != null) {
                                            path.nodes.push(my.parent);
                                            my = levelMap[my.parent];
                                        }
                                        path.nodes.reverse();
                                        return path;
                                    }
                                    else {
                                        return path;
                                    }
                                }
                            }
                            else {
                                return path;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let path = {
                            steps: 0,
                            nodes: []
                        };
                        if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                            let levelMap = {};
                            let visited = {};
                            let helperVisited = {};
                            if (ID1 === ID2) {
                                path.nodes.push(ID1);
                                return path;
                            }
                            else {
                                let found = 0;
                                let myqueue = new Queue();
                                myqueue.enqueue(ID1);
                                levelMap[ID1] = { parent: null, level: 0 };
                                while (myqueue.size > 0) {
                                    let current = myqueue.dequeue();
                                    if (!visited[current]) {
                                        visited[current] = true;
                                        helperVisited[current] = true;
                                        for (let i of this.adjacencyList[current]) {
                                            if (!helperVisited[i.id]) {
                                                myqueue.enqueue(i.id);
                                                levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                helperVisited[i.id] = true;
                                            }
                                            if (i.id === ID2) {
                                                found = 1;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (found === 1) {
                                    path.steps = levelMap[ID2].level;
                                    let my = levelMap[ID2];
                                    path.nodes.push(ID2);
                                    while (my.parent != null) {
                                        path.nodes.push(my.parent);
                                        my = levelMap[my.parent];
                                    }
                                    path.nodes.reverse();
                                    return path;
                                }
                                else {
                                    return path;
                                }
                            }
                        }
                        else {
                            return path;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of the graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    noOfNodes() {
        try {
            return Object.keys(this.allVertex).length;
        }
        catch (e) {
            console.log(e);
        }
    }

    hasEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}










class UWDGraph {

    constructor(type) {
        this.adjacencyList = {};
        this.type = type;
        this.allVertex = {};
        this.comparatorHelperUWD = null;
    }

    noOfNodes() {
        try {
            return Object.keys(this.allVertex).length;
        }
        catch (e) {
            console.log(e);
        }
    }

    addVertex(val, ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (val === 0 || val === false || val === null || val) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    return false;
                                }
                                else {
                                    let newNode = new GraphNode(val, ID);
                                    this.allVertex[ID] = newNode;
                                    this.adjacencyList[ID] = [];
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (val === 0 || val === false || val === null || val) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                return false;
                            }
                            else {
                                let newNode = new GraphNode(val, ID);
                                this.allVertex[ID] = newNode;
                                this.adjacencyList[ID] = [];
                                return true;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of Graph');
                }
            }
            else {
                throw new Error('Arguments not passed')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    addEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                                if (found) {
                                    return true;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                return true;
                            }
                            else if (!this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID1);
                                this.adjacencyList[ID1].push(this.addVertex[ID2]);
                                return true;
                            }
                            else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID1);
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                return true;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                            if (found) {
                                return true;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            return true;
                        }
                        else if (!this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID1);
                            this.adjacencyList[ID1].push(this.addVertex[ID2]);
                            return true;
                        }
                        else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID1);
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            return true;
                        }
                        else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            return true;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of the graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(ID, updatedValue) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    this.allVertex[ID].value = updatedValue;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                this.allVertex[ID].value = updatedValue;
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getValue(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                return this.allVertex[ID].value;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            return this.allVertex[ID].value;
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    neighbours(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                for (let i of this.adjacencyList[ID]) {
                                    myans.push({ value: i.value, id: i.id });
                                }
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            for (let i of this.adjacencyList[ID]) {
                                myans.push({ value: i.value, id: i.id });
                            }
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    removeEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    hasEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeVertex(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                delete this.allVertex[ID];
                                delete this.adjacencyList[ID];
                                for (let i in this.adjacencyList) {
                                    this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                                }
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            delete this.allVertex[ID];
                            delete this.adjacencyList[ID];
                            for (let i in this.adjacencyList) {
                                this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    BFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let myqueue = new Queue();
                                let visited = {};
                                myqueue.enqueue(ID);
                                GraphBFSHelper.call(this, myans, myqueue, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let myqueue = new Queue();
                            let visited = {};
                            myqueue.enqueue(ID);
                            GraphBFSHelper.call(this, myans, myqueue, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    DFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let visited = {};
                                let mystack = new Stack();
                                mystack.push(ID);
                                GraphDFSHelper.call(this, myans, mystack, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let visited = {};
                            let mystack = new Stack();
                            mystack.push(ID);
                            GraphDFSHelper.call(this, myans, mystack, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    shortestPath(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID1) && currentType === typeof (ID2)) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            let path = {
                                steps: 0,
                                nodes: []
                            };
                            if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                                let levelMap = {};
                                let visited = {};
                                let helperVisited = {};
                                if (ID1 === ID2) {
                                    path.nodes.push(ID1);
                                    return path;
                                }
                                else {
                                    let found = 0;
                                    let myqueue = new Queue();
                                    myqueue.enqueue(ID1);
                                    levelMap[ID1] = { parent: null, level: 0 };
                                    while (myqueue.size > 0) {
                                        let current = myqueue.dequeue();
                                        if (!visited[current]) {
                                            visited[current] = true;
                                            helperVisited[current] = true;
                                            for (let i of this.adjacencyList[current]) {
                                                if (!helperVisited[i.id]) {
                                                    myqueue.enqueue(i.id);
                                                    levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                    helperVisited[i.id] = true;
                                                }
                                                if (i.id === ID2) {
                                                    found = 1;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (found === 1) {
                                        path.steps = levelMap[ID2].level;
                                        let my = levelMap[ID2];
                                        path.nodes.push(ID2);
                                        while (my.parent != null) {
                                            path.nodes.push(my.parent);
                                            my = levelMap[my.parent];
                                        }
                                        path.nodes.reverse();
                                        return path;
                                    }
                                    else {
                                        return path;
                                    }
                                }
                            }
                            else {
                                return path;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let path = {
                            steps: 0,
                            nodes: []
                        };
                        if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                            let levelMap = {};
                            let visited = {};
                            let helperVisited = {};
                            if (ID1 === ID2) {
                                path.nodes.push(ID1);
                                return path;
                            }
                            else {
                                let found = 0;
                                let myqueue = new Queue();
                                myqueue.enqueue(ID1);
                                levelMap[ID1] = { parent: null, level: 0 };
                                while (myqueue.size > 0) {
                                    let current = myqueue.dequeue();
                                    if (!visited[current]) {
                                        visited[current] = true;
                                        helperVisited[current] = true;
                                        for (let i of this.adjacencyList[current]) {
                                            if (!helperVisited[i.id]) {
                                                myqueue.enqueue(i.id);
                                                levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                helperVisited[i.id] = true;
                                            }
                                            if (i.id === ID2) {
                                                found = 1;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (found === 1) {
                                    path.steps = levelMap[ID2].level;
                                    let my = levelMap[ID2];
                                    path.nodes.push(ID2);
                                    while (my.parent != null) {
                                        path.nodes.push(my.parent);
                                        my = levelMap[my.parent];
                                    }
                                    path.nodes.reverse();
                                    return path;
                                }
                                else {
                                    return path;
                                }
                            }
                        }
                        else {
                            return path;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of the graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

}








class WUDGraph {

    constructor(type) {
        this.adjacencyList = {};
        this.type = type;
        this.allVertex = {};
        this.comparatorHelperWUD = null;
    }

    noOfNodes() {
        try {
            return Object.keys(this.allVertex).length;
        }
        catch (e) {
            console.log(e);
        }
    }

    addVertex(val, ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (val === 0 || val === false || val === null || val) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    return false;
                                }
                                else {
                                    let newNode = new GraphNode(val, ID);
                                    this.allVertex[ID] = newNode;
                                    this.adjacencyList[ID] = [];
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (val === 0 || val === false || val === null || val) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                return false;
                            }
                            else {
                                let newNode = new GraphNode(val, ID);
                                this.allVertex[ID] = newNode;
                                this.adjacencyList[ID] = [];
                                return true;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of Graph');
                }
            }
            else {
                throw new Error('Arguments not passed')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    addEdge(ID1, ID2, weight) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (weight >= 0 && typeof (weight) === 'number' && isFinite(weight)) {
                                if (this.adjacencyList.hasOwnProperty(ID1)) {
                                    let found = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                    if (found) {
                                        return true;
                                    }
                                }
                                if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                    this.addVertex(null, ID2);
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                    return true;
                                }
                                else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                                    this.addVertex(null, ID1);
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                    return true;
                                }
                                else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                    this.addVertex(null, ID1);
                                    this.addVertex(null, ID2);
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                    return true;
                                }
                                else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (weight >= 0 && typeof (weight) === 'number' && isFinite(weight)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                if (found) {
                                    return true;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                                this.addVertex(null, ID1);
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                return true;
                            }
                            else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID1);
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                this.adjacencyList[ID2].push({ weight: weight, node: this.allVertex[ID1] });
                                return true;
                            }
                        }
                        else {
                            throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(ID, updatedValue) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    this.allVertex[ID].value = updatedValue;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                this.allVertex[ID].value = updatedValue;
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getValue(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                return this.allVertex[ID].value;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            return this.allVertex[ID].value;
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    removeEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.node.id !== ID2);
                                this.adjacencyList[ID2] = this.adjacencyList[ID2].filter(ele => ele.node.id !== ID1);
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.node.id !== ID2);
                            this.adjacencyList[ID2] = this.adjacencyList[ID2].filter(ele => ele.node.id !== ID1);
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeVertex(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                delete this.allVertex[ID];
                                delete this.adjacencyList[ID];
                                for (let i in this.adjacencyList) {
                                    this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.node.id !== ID);
                                }
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            delete this.allVertex[ID];
                            delete this.adjacencyList[ID];
                            for (let i in this.adjacencyList) {
                                this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.node.id !== ID);
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    BFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let myqueue = new Queue();
                                let visited = {};
                                myqueue.enqueue(ID);
                                WeightedGraphBFSHelper.call(this, myans, myqueue, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let myqueue = new Queue();
                            let visited = {};
                            myqueue.enqueue(ID);
                            WeightedGraphBFSHelper.call(this, myans, myqueue, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    DFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let visited = {};
                                let mystack = new Stack();
                                mystack.push(ID);
                                WeightedGraphDFSHelper.call(this, myans, mystack, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let visited = {};
                            let mystack = new Stack();
                            mystack.push(ID);
                            WeightedGraphDFSHelper.call(this, myans, mystack, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    neighbours(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                for (let i of this.adjacencyList[ID]) {
                                    myans.push({ value: i.node.value, id: i.node.id, weight: i.weight });
                                }
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            for (let i of this.adjacencyList[ID]) {
                                myans.push({ value: i.node.value, id: i.node.id, weight: i.weight });
                            }
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    hasEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateWeight(ID1, ID2, updatedWeight) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (updatedWeight >= 0 && typeof (updatedWeight) === 'number' && isFinite(updatedWeight)) {
                                if (this.adjacencyList.hasOwnProperty(ID1)) {
                                    let toFind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                    if (toFind1) {
                                        let toFind2 = this.adjacencyList[ID2].find(ele => ele.node.id === ID1);
                                        toFind1.weight = updatedWeight;
                                        toFind2.weight = updatedWeight;
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
                                throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedWeight >= 0 && typeof (updatedWeight) === 'number' && isFinite(updatedWeight)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let toFind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                if (toFind1) {
                                    let toFind2 = this.adjacencyList[ID2].find(ele => ele.node.id === ID1);
                                    toFind1.weight = updatedWeight;
                                    toFind2.weight = updatedWeight;
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
                            throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getWeight(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let tofind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                if (tofind1) {
                                    return tofind1.weight;
                                }
                                else {
                                    return undefined;
                                }
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let tofind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                            if (tofind1) {
                                return tofind1.weight;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    shortestPath(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            let path = {
                                distance: 0,
                                nodes: []
                            };
                            if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                                let optimumDistance = 0;
                                let visited = {};
                                let previous = {};
                                let myDistanceQueue = new MinGraphPriorityQueue();
                                for (let i in this.adjacencyList) {
                                    if (i == ID1) {
                                        myDistanceQueue.enqueue(i, 0);
                                    }
                                    else {
                                        myDistanceQueue.enqueue(i, Infinity);
                                    }
                                }
                                for (let i in this.adjacencyList) {
                                    previous[i] = null;
                                }
                                let visiting = myDistanceQueue.values[0];
                                while (myDistanceQueue.size() > 0) {
                                    for (let j of this.adjacencyList[visiting.value]) {
                                        if (!visited[j.node.id]) {
                                            let updatedDistance = visiting.priority + j.weight;
                                            let myDistanceNode = myDistanceQueue.values.find(ele => parseInt(ele.value) === parseInt(j.node.id));
                                            if (updatedDistance < myDistanceNode.priority) {
                                                myDistanceNode.priority = updatedDistance;
                                                previous[j.node.id] = visiting.value;
                                            }
                                        }
                                    }
                                    visited[visiting.value] = true;
                                    myDistanceQueue.dequeue();
                                    visiting = myDistanceQueue.values[0];
                                }
                                path.nodes.push(ID2);
                                while (previous[ID2]) {
                                    path.nodes.push(parseInt(previous[ID2]));
                                    ID2 = previous[ID2];
                                }
                                path.nodes = path.nodes.reverse();
                                for (let i in path.nodes) {
                                    if (parseInt(i) + 1 === path.nodes.length) {
                                        break;
                                    }
                                    let myWeight = this.adjacencyList[path.nodes[i]].find(ele => ele.node.id === path.nodes[parseInt(i) + 1]);
                                    optimumDistance = optimumDistance + myWeight.weight;
                                }
                                path.distance = optimumDistance;
                                return path;
                            }
                            else {
                                return path;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let path = {
                            distance: 0,
                            nodes: []
                        };
                        if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                            let optimumDistance = 0;
                            let visited = {};
                            let previous = {};
                            let myDistanceQueue = new MinGraphPriorityQueue();
                            for (let i in this.adjacencyList) {
                                if (i == ID1) {
                                    myDistanceQueue.enqueue(i, 0);
                                }
                                else {
                                    myDistanceQueue.enqueue(i, Infinity);
                                }
                            }
                            for (let i in this.adjacencyList) {
                                previous[i] = null;
                            }
                            let visiting = myDistanceQueue.values[0];
                            while (myDistanceQueue.size() > 0) {
                                for (let j of this.adjacencyList[visiting.value]) {
                                    if (!visited[j.node.id]) {
                                        let updatedDistance = visiting.priority + j.weight;
                                        let myDistanceNode = myDistanceQueue.values.find(ele => String(ele.value) === String(j.node.id));
                                        if (updatedDistance < myDistanceNode.priority) {
                                            myDistanceNode.priority = updatedDistance;
                                            previous[j.node.id] = visiting.value;
                                        }
                                    }
                                }
                                visited[visiting.value] = true;
                                myDistanceQueue.dequeue();
                                visiting = myDistanceQueue.values[0];
                            }
                            path.nodes.push(ID2);
                            while (previous[ID2]) {
                                path.nodes.push(previous[ID2]);
                                ID2 = previous[ID2];
                            }
                            path.nodes = path.nodes.reverse();
                            for (let i in path.nodes) {
                                if (parseInt(i) + 1 === path.nodes.length) {
                                    break;
                                }
                                let myWeight = this.adjacencyList[path.nodes[i]].find(ele => ele.node.id === path.nodes[parseInt(i) + 1]);
                                optimumDistance = optimumDistance + myWeight.weight;
                            }
                            path.distance = optimumDistance;
                            return path;
                        }
                        else {
                            return path;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}









class WDGraph {

    constructor(type) {
        this.adjacencyList = {};
        this.type = type;
        this.allVertex = {};
        this.comparatorHelperWD = null;
    }

    noOfNodes() {
        try {
            return Object.keys(this.allVertex).length;
        }
        catch (e) {
            console.log(e);
        }
    }

    addVertex(val, ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (val === 0 || val === false || val === null || val) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    return false;
                                }
                                else {
                                    let newNode = new GraphNode(val, ID);
                                    this.allVertex[ID] = newNode;
                                    this.adjacencyList[ID] = [];
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (val === 0 || val === false || val === null || val) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                return false;
                            }
                            else {
                                let newNode = new GraphNode(val, ID);
                                this.allVertex[ID] = newNode;
                                this.adjacencyList[ID] = [];
                                return true;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of Graph');
                }
            }
            else {
                throw new Error('Arguments not passed')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    addEdge(ID1, ID2, weight) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (weight >= 0 && typeof (weight) === 'number' && isFinite(weight)) {
                                if (this.adjacencyList.hasOwnProperty(ID1)) {
                                    let found = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                    if (found) {
                                        return true;
                                    }
                                }
                                if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                    this.addVertex(null, ID2);
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    return true;
                                }
                                else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                                    this.addVertex(null, ID1);
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    return true;
                                }
                                else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                    this.addVertex(null, ID1);
                                    this.addVertex(null, ID2);
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    return true;
                                }
                                else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                    this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (weight >= 0 && typeof (weight) === 'number' && isFinite(weight)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                if (found) {
                                    return true;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                                this.addVertex(null, ID1);
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                return true;
                            }
                            else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                                this.addVertex(null, ID1);
                                this.addVertex(null, ID2);
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                return true;
                            }
                            else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1].push({ weight: weight, node: this.allVertex[ID2] });
                                return true;
                            }
                        }
                        else {
                            throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(ID, updatedValue) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    this.allVertex[ID].value = updatedValue;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                this.allVertex[ID].value = updatedValue;
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getValue(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                return this.allVertex[ID].value;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            return this.allVertex[ID].value;
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    removeEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.node.id !== ID2);
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.node.id !== ID2);
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeVertex(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                delete this.allVertex[ID];
                                delete this.adjacencyList[ID];
                                for (let i in this.adjacencyList) {
                                    this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.node.id !== ID);
                                }
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            delete this.allVertex[ID];
                            delete this.adjacencyList[ID];
                            for (let i in this.adjacencyList) {
                                this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.node.id !== ID);
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    BFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let myqueue = new Queue();
                                let visited = {};
                                myqueue.enqueue(ID);
                                WeightedGraphBFSHelper.call(this, myans, myqueue, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let myqueue = new Queue();
                            let visited = {};
                            myqueue.enqueue(ID);
                            WeightedGraphBFSHelper.call(this, myans, myqueue, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    DFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let visited = {};
                                let mystack = new Stack();
                                mystack.push(ID);
                                WeightedGraphDFSHelper.call(this, myans, mystack, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let visited = {};
                            let mystack = new Stack();
                            mystack.push(ID);
                            WeightedGraphDFSHelper.call(this, myans, mystack, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    neighbours(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                for (let i of this.adjacencyList[ID]) {
                                    myans.push({ value: i.node.value, id: i.node.id, weight: i.weight });
                                }
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            for (let i of this.adjacencyList[ID]) {
                                myans.push({ value: i.node.value, id: i.node.id, weight: i.weight });
                            }
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
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

    hasEdge(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                                else {
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.node.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                            else {
                                return true;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateWeight(ID1, ID2, updatedWeight) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (updatedWeight >= 0 && typeof (updatedWeight) === 'number' && isFinite(updatedWeight)) {
                                if (this.adjacencyList.hasOwnProperty(ID1)) {
                                    let toFind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                    if (toFind1) {
                                        toFind1.weight = updatedWeight;
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
                                throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedWeight >= 0 && typeof (updatedWeight) === 'number' && isFinite(updatedWeight)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let toFind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                if (toFind1) {
                                    toFind1.weight = updatedWeight;
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
                            throw new Error('Weight should be of number format and should be greater than or equal to 0 and finite');
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getWeight(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let tofind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                                if (tofind1) {
                                    return tofind1.weight;
                                }
                                else {
                                    return undefined;
                                }
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let tofind1 = this.adjacencyList[ID1].find(ele => ele.node.id === ID2);
                            if (tofind1) {
                                return tofind1.weight;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    shortestPath(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            let path = {
                                distance: 0,
                                nodes: []
                            };
                            if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                                let optimumDistance = 0;
                                let visited = {};
                                let previous = {};
                                let myDistanceQueue = new MinGraphPriorityQueue();
                                for (let i in this.adjacencyList) {
                                    if (i == ID1) {
                                        myDistanceQueue.enqueue(i, 0);
                                    }
                                    else {
                                        myDistanceQueue.enqueue(i, Infinity);
                                    }
                                }
                                for (let i in this.adjacencyList) {
                                    previous[i] = null;
                                }
                                let visiting = myDistanceQueue.values[0];
                                let updatedDistance;
                                while (myDistanceQueue.size() > 0) {
                                    for (let j of this.adjacencyList[visiting.value]) {
                                        if (!visited[j.node.id]) {
                                            updatedDistance = visiting.priority + j.weight;
                                            let myDistanceNode = myDistanceQueue.values.find(ele => parseInt(ele.value) === parseInt(j.node.id));
                                            if (updatedDistance === Infinity) {
                                                break;
                                            }
                                            if (updatedDistance < myDistanceNode.priority) {
                                                myDistanceNode.priority = updatedDistance;
                                                previous[j.node.id] = visiting.value;
                                            }
                                        }
                                    }
                                    visited[visiting.value] = true;
                                    myDistanceQueue.dequeue();
                                    visiting = myDistanceQueue.values[0];
                                }
                                if (updatedDistance !== Infinity) {
                                    path.nodes.push(ID2);
                                }
                                while (previous[ID2]) {
                                    path.nodes.push(parseInt(previous[ID2]));
                                    ID2 = previous[ID2];
                                }
                                path.nodes = path.nodes.reverse();
                                for (let i in path.nodes) {
                                    if (parseInt(i) + 1 === path.nodes.length) {
                                        break;
                                    }
                                    let myWeight = this.adjacencyList[path.nodes[i]].find(ele => ele.node.id === path.nodes[parseInt(i) + 1]);
                                    optimumDistance = optimumDistance + myWeight.weight;
                                }
                                path.distance = optimumDistance;
                                return path;
                            }
                            else {
                                return path;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let path = {
                            distance: 0,
                            nodes: []
                        };
                        if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                            let optimumDistance = 0;
                            let visited = {};
                            let previous = {};
                            let myDistanceQueue = new MinGraphPriorityQueue();
                            for (let i in this.adjacencyList) {
                                if (i == ID1) {
                                    myDistanceQueue.enqueue(i, 0);
                                }
                                else {
                                    myDistanceQueue.enqueue(i, Infinity);
                                }
                            }
                            for (let i in this.adjacencyList) {
                                previous[i] = null;
                            }
                            let visiting = myDistanceQueue.values[0];
                            let updatedDistance;
                            while (myDistanceQueue.size() > 0) {
                                for (let j of this.adjacencyList[visiting.value]) {
                                    if (!visited[j.node.id]) {
                                        updatedDistance = visiting.priority + j.weight;
                                        let myDistanceNode = myDistanceQueue.values.find(ele => String(ele.value) === String(j.node.id));
                                        if (updatedDistance === Infinity) {
                                            break;
                                        }
                                        if (updatedDistance < myDistanceNode.priority) {
                                            myDistanceNode.priority = updatedDistance;
                                            previous[j.node.id] = visiting.value;
                                        }
                                    }
                                }
                                visited[visiting.value] = true;
                                myDistanceQueue.dequeue();
                                visiting = myDistanceQueue.values[0];
                            }
                            if (updatedDistance !== Infinity) {
                                path.nodes.push(ID2);
                            }
                            while (previous[ID2]) {
                                path.nodes.push(previous[ID2]);
                                ID2 = previous[ID2];
                            }
                            path.nodes = path.nodes.reverse();
                            for (let i in path.nodes) {
                                if (parseInt(i) + 1 === path.nodes.length) {
                                    break;
                                }
                                let myWeight = this.adjacencyList[path.nodes[i]].find(ele => ele.node.id === path.nodes[parseInt(i) + 1]);
                                optimumDistance = optimumDistance + myWeight.weight;
                            }
                            path.distance = optimumDistance;
                            return path;
                        }
                        else {
                            return path;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}






// ======================================================== //



module.exports = {
    UWUDGraph : UWUDGraph,
    UWDGraph : UWDGraph,
    WDGraph : WDGraph,
    WUDGraph :WUDGraph
}