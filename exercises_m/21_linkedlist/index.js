// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}


}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		//this.head = new Node(data, this.head)
		this.insertAt(data, 0)
	}

	size() {
		let node = this.head
		let count = 0;

		//MH Implemetation
		// 	if (node !== null) {
		// 		count++
		// 	}
		// 	else {

		// 		return count
		// 	}
		// 	while (node.next !== null) {
		// 		count++
		// 		node = node.next
		// 	}
		// 	return count
		while (node) {
			count++;
			node = node.next
		}
		return count
	}

	getFirst() {

		return this.head
	}
	//get last node of linked list
	getLast() {
		let node = this.head
		let lastNode = this.head
		while (node) {
			//console.log("getLast", node)
			if (node.next == null) {
				lastNode = node
				//console.log("setLastNode", lastNode)
			}
			node = node.next
		}
		return lastNode
	}
	//clears entire linked list
	clear() {
		this.head = null
	}
	//remove first element, first means this.head is pointing to
	removeFirst() {
		const firstNode = this.getFirst()
		if (firstNode) {
			this.head = firstNode.next
		}

	}
	//removes last element. here last means last element from head pointer
	removeLast() {
		let currentNode = this.head
		let previousNode = null

		if (this.size() == 1) {
			this.head = null
			return
		}
		while (currentNode) {

			if (!currentNode.next) {
				previousNode.next = null
			}
			previousNode = currentNode
			currentNode = currentNode.next

		}
	}
	// insert data at last aka from head point
	insertLast(data) {
		let node = this.head
		const newNode = new Node(data)
		if (!node) {
			this.head = newNode
			return
		}
		//sol 1
		// while (node) {
		// 	if (!node.next) {
		// 		node.next = newNode
		// 		return
		// 	}
		// 	node = node.next
		// }
		//much preferred sol
		const lastNode = this.getLast()
		lastNode.next = newNode

	}
	//gets an linkedList at that position
	getAt(position) {
		let curLocation = -1;
		let node = this.head
		let returnNode = null

		while (node) {

			curLocation += 1

			if (curLocation === position) {
				returnNode = node
				console.log("return node", curLocation, position)
				return node

			}

			node = node.next
		}
		return returnNode
	}
	//removes linked list from that position
	removeAt(position) {
		let curLocation = 0;
		let node = this.head
		let previousNode = null

		while (node) {

			if (curLocation === position) {
				if (previousNode === null) {
					this.head = node.next
					return
				}
				previousNode.next = node.next
				return

			}
			curLocation += 1
			previousNode = node
			node = node.next
		}
	}

	insertAt(data, pos) {
		const newNode = new Node(data)
		const node = this.head

		if (pos === 0) {
			newNode.next = node
			this.head = newNode
			return
		}

		if (pos > this.size()) {
			pos = this.size()
		}

		const oldNode = this.getAt(pos - 1)
		newNode.next = oldNode.next
		oldNode.next = newNode
	}

	forEach(fn) {
		let counter = 0
		while (counter != this.size()) {
			fn(this.getAt(counter), counter)
			counter += 1
		}
	}

	//for of
	*[Symbol.iterator]() {
		let node = this.head
		while (node) {
			yield node
			node = node.next
		}
	}
}

/**
 * all test functions *****************************
 */
/**
 * to test creation of node
 */
function testNode() {
	const n = new Node("hi")
	console.log(n.data, n.next)
	const n2 = new Node("hello", n)
	console.log(`n2: ${n2.data}, ${n2.next}`)
	const n3 = new Node("are you there?", n2)
	console.log(`n3: ${n3.data}, ${n3.next}`)
	console.log(`n: ${n}}`)
}
/**
*checks creation of linked list, insertFirst Function, size function of linked list
 */
function addNewLinkedList() {
	let linkedList = new LinkedList()
	linkedList.insertFirst("a")
	linkedList.insertFirst("b")
	linkedList.insertFirst("c")
	console.log(linkedList.head)
	console.log(`size: ${linkedList.size()}`)
	const ll = new LinkedList()
	console.log(`size: ${ll.size()}`)
	console.log(`lastNode: ${ll.getLast()}`)
	ll.insertFirst("apfel")
	console.log(`size: ${ll.size()}`)
	console.log(`lastNode: ${linkedList.getLast()}`)
}


function testClear() {
	const l = new LinkedList()
	l.insertFirst("test")
	console.log(`size of l: ${l.size()}`)
	l.insertFirst("next")
	console.log(`size of l: ${l.size()}`)
	l.clear()
	console.log(`size of l: ${l.size()}`)
}

function testRemoveFirst() {
	const l = new LinkedList()
	l.insertFirst("test")
	console.log(`size of l: ${l.getFirst().data} `)
	l.insertFirst("next")
	console.log(`size of l: ${l.getFirst().data} `)
	l.removeFirst()
	console.log(`first node after function of l: ${l.getFirst().data} `)
	l.removeFirst()
	l.removeFirst()
}

function testRemoveLast() {
	const l = new LinkedList()
	l.insertFirst('c');
	l.insertFirst('b');
	l.insertFirst('a');
	l.removeLast()
	console.log(`get last: ${l.getLast().data}`)

	l2 = new LinkedList()
	l2.removeLast()
}
/**add at the end of list */
function testInsertLast() {
	const l = new LinkedList()
	l.insertFirst("first")
	l.insertFirst("second")
	l.insertLast("third")
	console.log(`last insert:${l.getLast().data}`)

}

/**add at the end of list */
function testGetAt() {
	const l = new LinkedList()
	console.log(`getAt:${l.getAt(3)}`)
	l.insertFirst("first") //2
	l.insertFirst("second") //1
	l.insertFirst("third") //0
	console.log(`getAt:${l.getAt(0).data}`)
	console.log(`getAt:${l.getAt(2)?.data}`)
}
/**
 */
/**remove node at the end of list */
function testRemoveAt() {
	const l = new LinkedList()
	console.log(`getAt:${l.getAt(3)}`)
	l.insertFirst("first") //2
	l.insertFirst("second") //1
	l.insertFirst("third") //0
	console.log(`removeAt:${l.removeAt(1)}`)
	console.log(`getAt:${l.getAt(1)?.data}`)
	console.log(`removeAt:${l.removeAt(0)}`)
	console.log(`getAt:${l.getAt(0)?.data}`)
	console.log(`removeAt:${l.removeAt(3)}`) ///this should not work
	console.log(`getAt:${l.getAt(0)?.data}`) //should return third
	console.log(`removeAt:${l.removeAt(0)}`)
	console.log(`getAt:${l.getAt(0)?.data}`)


}
/**
 */
/**insert new node at any pos of list */
function testInsertAt() {
	const l = new LinkedList()
	console.log(`getAt:${l.getAt(3)}`)
	l.insertFirst("first") //2
	l.insertFirst("second") //1
	l.insertFirst("third") //0
	console.log(`insertAt:${l.insertAt("new_one", 0)}`)
	console.log(`getAt:${l.getAt(0)?.data}`)
	console.log(`insertAt:${l.insertAt("new_two", 2)}`)
	console.log(`getAt:${l.getAt(2)?.data}`)
	console.log(`removeAt:${l.insertAt("should_not_go", 10)}`) ///this should not work
	console.log(`getAt:${l.getAt(10)?.data}`) //should return third
	console.log(`removeAt:${l.removeAt(0)}`)
	console.log(`getAt:${l.getAt(0)?.data}`)


}

function testForEach() {
	const l = new LinkedList()
	console.log(`getAt:${l.getAt(3)}`)
	l.insertFirst(10) //2
	l.insertFirst(20) //1
	l.insertFirst(30) //0
	l.forEach((node, index) => {
		console.log(node)
		if (node.data > 20) {
			node.data = node.data * 10
		}


	})

	console.log(`getAt:${l.getAt(0)?.data}`)
	console.log(`getAt:${l.getAt(1)?.data}`)
	console.log(`getAt:${l.getAt(2)?.data}`)


}

/**
* test function invocation
 */
//testNode()
//addNewLinkedList()
//testClear()
//testRemoveFirst()
//testRemoveLast()
//testInsertLast()
//testGetAt()
//testRemoveAt()
//testInsertAt()
//testForEach()

module.exports = { Node, LinkedList };
