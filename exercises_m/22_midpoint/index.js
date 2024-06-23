// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

function midpoint(list) {

	let slow = list.getFirst()
	let fast = list.getFirst()

	while (fast) {


		fast = fast.next
		if (fast) {
			if (fast.next) {
				fast = fast.next
				slow = slow.next
			}
		}
	}

	return slow
}

function testOdd() {
	const l = new LinkedList();
	l.insertLast('a');
	l.insertLast('b');
	//l.insertLast('c');
	//l.insertLast('d');
	//l.insertLast('e');
	console.log(`midpoint: ${midpoint(l).data}`)
}
testOdd()
module.exports = midpoint;
