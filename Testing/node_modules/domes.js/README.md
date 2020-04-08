# Domes.js 🚀
---

## Introduction

If you want to give boost to your javascript code or always afraid of implementing complex data structures then this is the perfect library for you to use. Domes has implementations of many useful extended data structures like Singly Linked List, Doubly Liked List, Stacks, Queues, Binary Search Trees and many more which if smartly used can give your javascript code an edge in terms of performance and time complexity. We have also implemented many possible methods for these data structures that might be helpful in doing your daily tasks. So rest assured and use efficiently to get best results out of it. These implementations are based on basic fundamentals of these data structures.

Currently we have implementations of below data structures which you can use.
* Singly Linked List
* Doubly Linked List
* Stacks
* Queues
* Binary Search Tree
* Binary Heaps
    * Max Binary Heap
    * Min Binary Heap
* Priority Queues
    * Max Priority Queue
    * Min Priority Queue
* Graphs
    * Unweighted Undirected Graph (UWUD)
    * Unweighted Directed Graph (UWD)
    * Weighted Undirected Graph (WUD)
    * Weighted Directed Graph (WD)


We have implemented these data structures as classes.

*IF Built in methods don't suffice the needs then you are free to dive in and create your own extended methods for these classes.*

*Suggestions are always welcomed for improvements.*

---

## Installation

You can install this normally using below npm command.
```
npm install --save domes.js
```
---
## How to use
You can use this in node.js by simply importing it using require().
```javascript
const domes = require('domes.js');
```
---

## Singly Linked List

You can simply create a Singly Linked List object using new keyword as shown below.

```javascript
    const my_Singly_Linked_List = new domes.SinglyLinkedList();
```

> ***Keep in mind - All values are accepted apart from Undefined/null.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

> SLL - Singly Linked List.

> Index is always starting from 0.

Now you can run the following methods on this object and start using your singly linked list.

* **insertAtStart()** - Adds an element at the start of SLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **insertAtEnd()** - Adds an element at the end of SLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **lookStart()** - Returns value of start node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Value present at the start if SLL is not empty.

* **lookEnd()** - Returns value of end node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Value present at the end if SLL is not empty.

* **deleteFromStart()** -  Deletes a node from start.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Deleted node value i.e. the start node if SLL is not empty.

* **deleteFromEnd()** - Deletes a node from end.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Deleted node value i.e. the end node if SLL is not empty.

* **isEmpty()** - Checks if the SLL is empty or not.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - Means SLL is empty.
        * Boolean false - Means SLL is not empty.

* **toArray()** - Returns an array of your SLL.
    * **Parameter/s** - None.
    * **Returns**
        * An Array.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The SLL node object if found.
        * null if not found.
    
* **delete()** - Deletes a node, This deleted the first found node that get matched with the input value if there are multiple with that same value.
    * **Parameter/s**
        1. The Value of the node that needs to be deleted.
    * **Returns**
        * null - If node not found with that value.
        * The same passed value if successful.

* **reverse()** - Reverses the SLL.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - if successful.
        * Boolean false - if unsuccessful.

* **get()** - Gets a node object using index, Keep in mind index start from 0 like an Array.
    * **Parameter/s**
        1. Index (number).
    * **Returns**
        * A node object present at that index.

* **set()** - Inserts a value at a particular index.
    * **Parameter/s**
        1. Value that is to be inserted.
        2. Index (number).
    * **Returns**
        * The same passed value if successful.

* **remove()** - Deletes a node at a particular index.
    * **Parameter/s**
        1. Index(number).
    * **Returns**
        * Deleted node value that is present at that index.

* **searchAll()** - Search a particular value in SLL and returns all ocuurences in an object.
    * **Parameters**
        1. Value that is to be searched.
    * **Returns**
        * An Object with 2 properties
            1. **count** - Number of occurence of that value.
            2. **positions** - This contains all the indexes of the node that contains that value.

* **deleteAll()** - This does not delete all arguments but instead returns a new SLL which does not have this value.
    * **Parameter/s**
        1. Value that is needed to be removed.
    * **Returns**
        * A new SLL with same elements present apart from the passed value.

* **updateWithValue()** - This updates a value of a node, If multiple present updates the first encountered from start.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.


* **updateAllWithValue()** - This updates a value to a updated value of all nodes with that value.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Booleans false - If Successful.

* **updateWithIndex()** - This updates a value of a node present at a particular index.
    * **Parameter/s**
        1. Index (number).
        2. Updated Value
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.

* **size** - This is a property that returns number of nodes present.

---

## Doubly Linked List

You can simply create a Doubly Linked List object using new keyword as shown below.

```javascript
    const my_Doubly_Linked_List = new domes.DoublyLinkedList();
```

> ***Keep in mind - All values are accepted apart from Undefined/null.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

> DLL - Doubly Linked List.

> Index is always starting from 0.

Now you can run the following methods on this object and start using your doubly linked list.

* **insertAtStart()** - Adds an element at the start of DLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **insertAtEnd()** - Adds an element at the end of DLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **lookStart()** - Returns value of start node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Value present at the start if SLL is not empty.

* **lookEnd()** - Returns value of end node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Value present at the end if DLL is not empty.

* **deleteFromStart()** -  Deletes a node from start.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Deleted node value i.e. the start node if SLL is not empty.

* **deleteFromEnd()** - Deletes a node from end.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Deleted node value i.e. the end node if DLL is not empty.

* **isEmpty()** - Checks if the DLL is empty or not.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - Means DLL is empty.
        * Boolean false - Means DLL is not empty.

* **toArray()** - Returns an array of your DLL.
    * **Parameter/s** - None.
    * **Returns**
        * An Array.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The DLL node object if found.
        * null if not found.
    
* **delete()** - Deletes a node, This deleted the first found node that get matched with the input value if there are multiple with that same value.
    * **Parameter/s**
        1. The Value contained in the node to be deleted.
    * **Returns**
        * null - If node not found with that value.
        * The same passed value if successful.

* **reverse()** - Reverses the DLL.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - if successful.
        * Boolean false - if unsuccessful.

* **get()** - Gets a node object using index, Keep in mind index start from 0 like an Array.
    * **Parameter/s**
        1. Index (number).
    * **Returns**
        * A node object present at that index.

* **set()** - Inserts a value at a particular index.
    * **Parameter/s**
        1. Value that is to be inserted.
        2. Index (number).
    * **Returns**
        * The same passed value if successful.

* **remove()** - Deletes an element at a particular index.
    * **Parameter/s**
        1. Index(number).
    * **Returns**
        * Deleted node value that is present at that index.

* **searchAll()** - Search a particular value in SLL and returns all ocuurences in an object.
    * **Parameters**
        1. Value that is to be searched.
    * **Returns**
        * An Object with 2 properties
            1. **count** - Number of occurence of that value.
            2. **positions** - This contains all the indexes of the node that contains that value.

* **deleteAll()** - This does not delete all arguments but instead returns a new DLL which does not have this value.
    * **Parameter/s**
        1. Value that needed to be removed.
    * **Returns**
        * A new DLL with same elements present apart from the passed value.

* **updateWithValue()** - This updates a value of a node, If multiple present updates the first encountered from start.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.


* **updateAllWithValue()** - This updates a value to a updated value of all nodes with that value.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Booleans false - If Successful.

* **updateWithIndex()** - This updates a value of a node present at a particular index.
    * **Parameter/s**
        1. Index (number).
        2. Updated Value
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.

* **size** - This is a property that returns number of node present.



---

## Stacks

You can simply create a Stack object using the new keyword as shown below.

```javascript
    const my_Stack = new domes.Stack();
```

> ***Keep in mind - All values are accepted apart from Undefined/null.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your stack.

* **push()** - This pushes an element on the top of stack.
    * **Parameter/s**
        1. Value that is needed to be pushed.
    * **Returns**
        * The same passed value.

* **pop()** - This pops out the top element from the stack.
    * **Parameter/s** - None.
    * **Returns**
        * The popped out value.
        * null if stack is empty.

* **top()**
    * **Parameter/s** - None.
    * **Returns**
        * The top value if stack is not empty.
        * null if stack is empty.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of elements from top to bottom of stack, means top will be the starting element of the Array and bottom will be last element of the Array.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The Stack node if found.
        * null if not found.

---

## Queues

You can simply create a Queue object using the new keyword as shown below.

```javascript
    const my_Queue = new domes.Queue();
```

> ***Keep in mind - All values are accepted apart from Undefined/null.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your queue.

* **enqueue()** - This enqueues an element in the back of queue.
    * **Parameter/s**
        1. Value that is needed to be enqueued.
    * **Returns**
        * The same passed value.

* **dequeue()** - This dequeues the front element from the queue.
    * **Parameter/s** - None.
    * **Returns**
        * The dequeued value.
        * null if queue is empty.

* **peek()**
    * **Parameter/s** - None.
    * **Returns**
        * The front element if queue is not empty.
        * null if queue is empty.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of elements from front to back of queue, means front element will be the starting element of the Array and back element will be last element of the Array.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The Queue node if found.
        * null if not found.

---
## Binary Search Tree

As Binary Search Tree work on the fundamental of values greater or less than a value in terms of storing data, So in our implementation currently you can store data either in number or string format as of now and there are 2 comparison methods also. So when making a Binary Search Tree object you have to pass the configuration in the constructor.

**Available types of data that can be stored.**

    1. Number
    2. String

**Comparison methods.**

    1. Normal Comparion (>,<)
        1. In Number config it simply compares whether the number is greater or small.
        2. In String config it compares according to the ASCII value to check which string is greater or small.
    2. Length Comparsion
        1. Not present in Number config.
        2. In String config it compares according to the length of String to check which string is greater or small.

* **Available Configurations.**
    * 1 , 1 - It means you can store only number format and comparsion will be normal comparsion.
    * 2 , 1 - It means you can store only string format and comparsion will be normal comparison.
    * 2 , 2 - It means you can store only string format and comparsion will be based on length of string.

> You have to pass these configuration in Binary Search Tree constructor while making its object.

Now you can make different types of Binary Search Trees using new keyword as shown below.

*   ```javascript
    const my_Binary_Search_Tree = new domes.BinarySearchTree(1,1);
    ```
*   ```javascript
    const my_Binary_Search_Tree = new domes.BinarySearchTree(2,1);
    ```
*   ```javascript
    const my_Binary_Search_Tree = new domes.BinarySearchTree(2,2);
    ```

In addition we are using the concept of ID in these as values can be redundant so in order to specify which node we are targeting we have to specify its unique ID.

> **How these IDs are allocated ?**
* When you are normally inserting values IDs are automatically given. For e.g, inserting the first node i.e. the root node will have ID=1 and second node will have ID=2 and so on.
* But when we delete a node these IDs are automatically reshuffled in order as per the BFS order of the resultant tree build after deletion of node. For e.g, if after deletion your BFS order of nodes is ['This','is','my','BFS'] this array (this is array of node values in BST in BFS order) then the IDs will be 1 for 'This', 2 for 'is', 3 for 'my', 4 for 'BFS'. So as you can see it reshuffled the IDs for the nodes. So you can clearly figure out that our root node will always have ID=1.

> **IMPORTANT**
* As you will see in many of our methods it will ask you to provide ID as a parameter and if the method involves a task that will be performed on the whole tree e.g. BFS or DFS etc, these tasks are performed on whole tree and you are just asked to provide the root node, So in these type of methods you can provide any valid ID and the node with that ID will be treated as root node even if it is not of the main tree, Hence these type of methods can also work on ***Sub Trees*** as well.

> ***Keep in mind - Values are accepted as per the configuration.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

> BST - Binary Search Tree.

Now you can run the following methods on this object and start using your BST.

* **insert()**
    * **Parameter/s**
        1. Value that is to be inserted.
    * **Returns**
        * The same passed value.
        
* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * An object with **value** and **id** if found.
        * null if not found.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **BFS()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in BFS order.

* **DFSInOrder()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS InOrder.

* **DFSPreOrder()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS PreOrder.

* **DFSPostOrder()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS PostOrder.

* **height()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * A Number which is the max height.

* **rootNodeID()**
    * **Parameter/s** - None.
    * **Returns**
        * ID of the root node of Main BST.
        * null if BST is empty.

* **getIdsOfValue()**
    * **Parameter/s**
        1. Value of node of which you want to know the ID.
    * **Returns**
        * An Array of objects with **value** and **id** property specifying all nodes with that value.

* **leafNodes()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property specifying all leaf nodes.

* **childNodes()**
    * **Parameter/s**
        1. ID of the parent node of which you want the childs.
    * **Returns**
        * An object with **count**, **left** and **right** property, count gives us the number of childs, left and right are objects with **value** and **id** property to give info about the left and right nodes. If left or right child nodes if not present they will be null.

* **delete()**
    * **Parameter/s**
        1. ID of the node that you want to delete.
    * **Returns**
        * An object with **value** and **id** property of the deleted node. Keep in mind after deleting the node IDs are reshuffled as per BFS order. Please read **How IDs are allocated section above.**

* **updateWithValue()**
    * **Parameter/s**
        1. Value that needed to be updated (Does not work with multiple if multiple exist update the first encountered node with that value).
        2. Updated value.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (Means no node is present with that value).
    * **Keep in Mind (Behind the scenes)**
        * Behind the scenes this operation is doing 2 operations.
            1. Deleting the node with that value
            2. Inserting a new node with the updated value, Hence IDs will reshuffle in this operation in order to keep the property of BST.

* **updateWithID()**
    * **Parameter/s**
        1. ID of the node that is needed to be updated.
        2. Updated value.
    * **Returns**
        * Boolean true.
    * **Keep in Mind (Behind the scenes)**
        * Behind the scenes this operation is doing 2 operations.
            1. Deleting the node with that ID.
            2. Inserting a new node with the updated value, Hence IDs will reshuffle in this operation in order to keep the property of BST.

* **getNodeValueWithID()**
    * **Parameter/s**
        1. ID of the node of which you want the value.
    * **Returns**
        * An Object with **value** and **id** property.

* **noOfNodes** - This is a property which gives us the number of nodes we currently have.

---

## Binary Heaps

As Binary Heaps work on the fundamental of values greater or less than a value in terms of storing data, So in our implementation currently you can store data either in number or string format as of now and there are 2 comparison methods also. So when making a Binary Heap (Max or Min) object you have to pass the configuration in the constructor.

> We have implemented the Array implementation of Binary Heaps.

**Available types of data that can be stored.**

    1. Number
    2. String

**Comparison methods.**

    1. Normal Comparion (>,<)
        1. In Number config it simply compares whether the number is greater or small.
        2. In String config it compares according to the ASCII value to check which string is greater or small.
    2. Length Comparsion
        1. Not present in Number config.
        2. In String config it compares according to the length of String to check which string is greater or small.

* **Available Configurations.**
    * 1 , 1 - It means you can store only number format and comparsion will be normal comparsion.
    * 2 , 1 - It means you can store only string format and comparsion will be normal comparison.
    * 2 , 2 - It means you can store only string format and comparsion will be based on length of string.

> You have to pass these configuration in Binary Heaps (Max or Min) constructor while making its object.

### **Max Binary Heap**

You can make Max Binary Heap object using new keyword as shown below.

*   ```javascript
    const my_Max_Binary_Heap = new domes.MaxBinaryHeap(1,1);
    ```
*   ```javascript
    const my_Max_Binary_Heap = new domes.MaxBinaryHeap(2,1);
    ```
*   ```javascript
    const my_Max_Binary_Heap = new domes.MaxBinaryHeap(2,2);
    ```

> ***Keep in mind - Values are accepted as per the configuration.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your Max Binary Heap.

* **insert()**
    * **Parameter/s**
        1. Value that is needed to be inserted. It automatically max heapify behind the scene.
    * **Returns**
        * The same passed value.

* **extractMax()**
    * **Parameter/s** - None.
    * **Returns**
        * The Maximum element as per the configuration(The Root Element).
        * null if empty

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of all the elements present as per BFS Order.

* **toEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in heap.

### **Min Binary Heap**

You can make Min Binary Heap using new keyword as shown below.

*   ```javascript
    const my_Min_Binary_Heap = new domes.MinBinaryHeap(1,1);
    ```
*   ```javascript
    const my_Min_Binary_Heap = new domes.MinBinaryHeap(2,1);
    ```
*   ```javascript
    const my_Min_Binary_Heap = new domes.MinBinaryHeap(2,2);
    ```

> ***Keep in mind - Values are accepted as per the configuration.***

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your Min Binary Heap.

* **insert()**
    * **Parameter/s**
        1. Value that is needed to be inserted. It automatically max heapify behind the scene.
    * **Returns**
        * The same passed value.

* **extractMin()**
    * **Parameter/s** - None.
    * **Returns**
        * The Minimum element as per the configuration (The Root Element).
        * null if empty.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of all the elements present as per BFS Order.

* **toEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in heap.

---

## Priority Queues

> We have used our own Max/Min Binary Heap in implementing the Max/Min Priority Queue which is in turn an Array impelmentation of Heap.

> ***Keep in mind while using this, you can only give priority only in number format apart from Infinity/-Infinity***

> ***All values are accepted to store apart from undefined/null.***

> *If Priority are same for two or more elements then they can come in any order for that priority, it doesn't depend on their value.*

### **Max Priority Queue**

You can make Max Priority Queue object using new keyword as shown below.

```javascript
    const my_Max_Priority_Queue = new domes.MaxPriorityQueue();
```

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your Max Priority Queue.

* **enqueue()**
    * **Parameter/s**
        1. Value that is needed to be enqueued.
        2. Priority in number format apart from Infinity/-Infinity.
    * **Returns**
        * The same passed value.

* **dequeue()**
    * **Parameter/s** - None.
    * **Returns**
        * Value of element with maximun priority.
        * null if priority queue is empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in priority queue.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of objects with **value** and **priority** property in BFS Order.

* **getNodeInfo()**
    * **Parameter/s**
        1. Index of the node.
    * **Returns**
        * An object with **value** and **priority** property of that node.
    
* **updateValue()**
    * **Parameter/s**
        1. Index of the node.
        2. Updated value.
    * **Returns**
        * Boolean true.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

### **Min Priority Queue**

You can make Min Priority Queue object using new keyword as follows.

```javascript
    const my_Min_Priority_Queue = new domes.MinPriorityQueue();
```

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your Min Priority Queue.

* **enqueue()**
    * **Parameter/s**
        1. Value that is needed to be enqueued.
        2. Priority in number format apart from Infinity/-Infinity.
    * **Returns**
        * The same passed value.

* **dequeue()**
    * **Parameter/s** - None.
    * **Returns**
        * Value of element with minimum priority.
        * null if priority queue is empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in priority queue.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of objects with **value** and **priority** property in BFS Order.

* **getNodeInfo()**
    * **Parameter/s**
        1. Index of the node.
    * **Returns**
        * An object with **value** and **priority** property of that node.
    
* **updateValue()**
    * **Parameter/s**
        1. Index of the node.
        2. Updated value.
    * **Returns**
        * Boolean true.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

---

# Graphs

We have divided graphs into four categories :-

* UWUD Graph (Unweighted Undirected Graph).
* UWD Graph (Unweighted Directed Graph).
* WUD Graph (Weighted Undirected Graph).
* WD Graph (Weighted Directed Graph).

We are storing two things in our Graph Node.

* **Value** - This can be anything apart from undefined.
* **ID** - This is what we are using to identify nodes uniquely. In graphs we are giving these IDs by ourself unlike in Binary Search Tree where these are automatically handled.

***Important -*** **You can derive these ID as vertex in the graph.**

We have two formats of storing these IDs

1. Number
2. String

So while making any type of graph we have to specify the format of ID by passing an argument in the constructor of graph in order to configure i.e. 1 for ID in number format, 2 for ID in string format.


### Unweighted Undirected Graph

You can make Unweighted Undirected Graph object using new keyword as shown below.

```javascript
    const my_UWUDGraph = new domes.UWUDGraph(1);
```
```javascript
    const my_UWUDGraph = new domes.UWUDGraph(2);
```

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your UWUDGraph.


* **addVertex()**
    * **Parameter/s**
        1. Value of the node.
        2. ID of the node according to the type of graph.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means ID already exist).

* **addEdge()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if successful.

* **removeVertex()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node does not exist).

* **removeEdge()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means edge does not exist).

* **updateValue()**
    * **Parameter/s**
        1. ID of the node of which we want to update the value.
        2. Updated Value.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node with that ID does not exist).

* **getValue()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Value associated with that node.
        * undefined if node does not exist.

* **BFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in BFS order. 

* **DFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS order.

* **neighbours()**
    * **Parameter/s**
        1. ID of the node of which you want the neighbours.
    * **Returns**
        * An Array of objects with **value** and **id** property of all neighbouring nodes. 

* **hasEdge()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if edge exist.
        * Boolean false if edge does not exist.

* **shortestPath()**
    * **Parameter/s**
        1. ID of start node.
        2. ID of end node.
    * **Returns**
        * An Object with two properties.
            * **steps** - Shows number of edges between start and end node.
            * **nodes** - This is an array which contains all nodes in that path from start node to end node both inclusive.

* **noOfNodes()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of nodes present in the graph.



### Unweighted Directed Graph

You can make Unweighted Undirected Graph object using new keyword as shown below.

```javascript
    const my_UWDGraph = new domes.UWDGraph(1);
```
```javascript
    const my_UWDGraph = new domes.UWDGraph(2);
```

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your UWDGraph.


* **addVertex()**
    * **Parameter/s**
        1. Value of the node.
        2. ID of the node according to the type of graph.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means ID already exist).

* **addEdge()** - **Edge will be directed from first node to second node.**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if successful.

* **removeVertex()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node does not exist).

* **removeEdge()** - **Edge is directed from first node to second node.**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means edge does not exist).

* **updateValue()**
    * **Parameter/s**
        1. ID of the node of which we want to update the value.
        2. Updated Value.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node with that ID does not exist).

* **getValue()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Value associated with that node.
        * undefined if node does not exist.

* **BFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in BFS order. 

* **DFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS order.

* **neighbours()**
    * **Parameter/s**
        1. ID of the node of which you want the neighbours.
    * **Returns**
        * An Array of objects with **value** and **id** property of all neighbouring nodes. 

* **hasEdge()** - **Edge is directed from first node to second node.**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if edge exist.
        * Boolean false if edge does not exist.

* **shortestPath()**
    * **Parameter/s**
        1. ID of start node.
        2. ID of end node.
    * **Returns**
        * An Object with two properties.
            * **steps** - Shows number of edges between start and end node.
            * **nodes** - This is an array which contains all nodes in that path from start node to end node both inclusive.

* **noOfNodes()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of nodes present in the graph.


### Weighted Undirected Graph

You can make Unweighted Undirected Graph object using new keyword as shown below.

```javascript
    const my_WUDGraph = new domes.WUDGraph(1);
```
```javascript
    const my_WUDGraph = new domes.WUDGraph(2);
```

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object and start using your WUDGraph.


* **addVertex()**
    * **Parameter/s**
        1. Value of the node.
        2. ID of the node according to the type of graph.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means ID already exist).

* **addEdge()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
        3. weight in number format **(Should be greater than or equal to 0 and finite).**
    * **Returns**
        * Boolean true if successful.

* **removeVertex()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node does not exist).

* **removeEdge()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means edge does not exist).

* **updateValue()**
    * **Parameter/s**
        1. ID of the node of which we want to update the value.
        2. Updated Value.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node with that ID does not exist).

* **getValue()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Value associated with that node.
        * undefined if node does not exist.

* **BFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in BFS order. 

* **DFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS order.

* **neighbours()**
    * **Parameter/s**
        1. ID of the node of which you want the neighbours.
    * **Returns**
        * An Array of objects with **value**,**id** and **weight** property of all neighbouring nodes. Weight property shows the weight of edge between them.

* **hasEdge()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if edge exist.
        * Boolean false if edge does not exist.

* **getWeight()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Weight between first node and second node.
        * undefined if edge does not exist.

* **updateWeight()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
        3. Updated Weight.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (edge does not exist).

* **shortestPath()** - **Uses Dijkstra Algorithm**
    * **Parameter/s**
        1. ID of start node.
        2. ID of end node.
    * **Returns**
        * An Object with two properties.
            * **distance** - Shows overall distance i.e. sum of all weight of edges in path between start and end node.
            * **nodes** - This is an array which contains ID of all nodes in that path from start to end node both inclusive.

* **noOfNodes()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of nodes present in the graph.


### Weighted Directed Graph

You can make Weighted Directed Graph object using new keyword as shown below.

```javascript
    const my_WDGraph = new domes.WDGraph(1);
```
```javascript
    const my_WDGraph = new domes.WDGraph(2);
```

> Parameter number/alphabet can be derived as argument number. E.g. 1/a means first argument, 2/b means 2nd argument... etc.

Now you can run the following methods on this object.


* **addVertex()**
    * **Parameter/s**
        1. Value of the node.
        2. ID of the node according to the type of graph.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means ID already exist).

* **addEdge()** - **Edge will be directed from first node to second node.**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
        3. weight in number format **(Should be greater than or equal to 0 and finite).**
    * **Returns**
        * Boolean true if successful.

* **removeVertex()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node does not exist).

* **removeEdge()** - **Edge is directed from first node to second node.**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means edge does not exist).

* **updateValue()**
    * **Parameter/s**
        1. ID of the node of which we want to update the value.
        2. Updated Value.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (means node with that ID does not exist).

* **getValue()**
    * **Parameter/s**
        1. ID of the node.
    * **Returns**
        * Value associated with that node.
        * undefined if node does not exist.

* **BFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in BFS order. 

* **DFS()**
    * **Parameter/s**
        1. ID of starting node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS order.

* **neighbours()**
    * **Parameter/s**
        1. ID of the node of which you want the neighbours.
    * **Returns**
        * An Array of objects with **value**,**id** and **weight** property of all neighbouring nodes. Weight property shows the weight of edge between them.

* **hasEdge()** - **Edge is directed from first node to second node.**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Boolean true if edge exist.
        * Boolean false if edge does not exist.

* **getWeight()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
    * **Returns**
        * Weight between first node and second node.
        * undefined if edge does not exist.

* **updateWeight()**
    * **Parameter/s**
        1. ID of first node.
        2. ID of second node.
        3. Updated Weight.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (edge does not exist).

* **shortestPath()** - **Uses Dijkstra Algorithm**
    * **Parameter/s**
        1. ID of start node.
        2. ID of end node.
    * **Returns**
        * An Object with two properties.
            * **distance** - Shows overall distance i.e. sum of all weight of edges in path between start and end node.
            * **nodes** - This is an array which contains ID of all nodes in that path from start to end node both inclusive.

* **noOfNodes()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of nodes present in the graph.


---

## Yayy you did it 🎉!!..., Now its time to show off your coding skills with these awesome Data Structures..🚀