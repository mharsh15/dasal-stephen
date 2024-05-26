// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
	constructor() {
		this.array = []
	}

	push(element) {
		if (!element) {
			throw new Error("Please pass the element")
		}

		this.array.push(element)
	}


	pop() {
		return this.array.pop()
	}

	peek() {
		return this.array[this.array.length - 1]

	}
}

function testStack() {
	const stc = new Stack()
	stc.push(1)
	stc.push('a')
	console.log(stc.array)
	console.log(stc.pop())
	console.log(stc.pop())

}
testStack()
module.exports = Stack;
