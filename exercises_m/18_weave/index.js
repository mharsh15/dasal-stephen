// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
	const q = new Queue()

	while (sourceOne.peek() !== undefined || sourceTwo.peek() !== undefined) {
		if (sourceOne.peek() !== undefined) {
			q.add(sourceOne.remove())
		}

		if (sourceTwo.peek() !== undefined) {
			q.add(sourceTwo.remove())

		}
	}

	return q

}

///test q
function testWeave() {
	const q1 = new Queue()
	q1.add(1)
	q1.add(2)

	const q2 = new Queue()
	q2.add('h')
	q2.add('i')

	const respQ = weave(q1, q2)
	console.log(respQ)

	const q3 = new Queue()
	q3.add(1)
	q3.add(2)
	q3.add(3)
	q3.add(4)
	q3.add(5)
	const q4 = new Queue()
	q4.add('h')
	q4.add('a')
	q4.add('r')

	console.log(weave(q3, q4))

}

testWeave()
module.exports = weave;
