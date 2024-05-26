// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {


	constructor() {
		this.array = []
	}



	add(element) {
		if (element === undefined) {
			throw new Error("element should not be empty")
		}
		this.array.unshift(element)
		console.log(`element: ${element} added. current queue:${this.array}`)
	}

	remove() {
		if (this.array.length <= 0) {
			//throw new Error("There is nothing to remove")
			console.log(`element removed current queue after pop:${this.array}`)
			return undefined
		}

		const elementRemoved = this.array.pop()
		console.log(`element ${elementRemoved} removed current queue after pop:${this.array}`)
		return elementRemoved
	}


}

const queue = new Queue()
//queue.add(1)
//queue.add(2)
//queue.remove()
//queue.remove()
//queue.remove()

module.exports = Queue;
