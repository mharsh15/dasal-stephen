// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.stackMain = new Stack()
		this.stackBackup = new Stack()
		this.firstElement
	}


	add(element) {
		if (!this.stackMain.peek()) {
			this.firstElement = element
		}

		this.stackMain.push(element)

	}

	remove() {
		console.log("into remove")
		if (!this.stackMain.peek()) {
			this.firstElement = undefined
			return undefined
		}
		let lastElement;
		let counter = 0;
		while (this.stackMain.peek()) {
			console.log("into pop elements from original stack")
			lastElement = this.stackMain.pop()
			this.stackBackup.push(lastElement)
		}
		console.log(`backup:${this.stackBackup.data}, main:${this.stackMain.data}`)
		while (this.stackBackup.peek()) {
			let newElement = this.stackBackup.pop()
			console.log("into push elements from backup stack")

			if (counter === 1) {
				this.firstElement = newElement
				counter++
			}
			if (newElement !== lastElement) {
				this.stackMain.push(newElement)
			}
			else {
				counter = 1;
			}
		}

		return lastElement;

	}

	peek() {
		return this.firstElement
	}

}
function testQ() {
	const q = new Queue();
	q.add(1)
	console.log(q.peek())
	q.add(2)
	q.add("hi")
	q.add("jujima")
	console.log(q.peek())
	console.log(q.remove())
	console.log(q.remove())
	console.log(q.remove())
	console.log(q.peek())
}

testQ()
module.exports = Queue;
