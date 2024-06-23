// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;


function fromLast(list, n) {

	let slow = list.getFirst();
	let fast = list.getFirst();

	//first hop
	while ((n + 1) != 0) {
		fast = fast.next
		n -= 1
	}
	//slow first hop
	slow = slow.next

	while (fast && fast.next) {
		fast = fast.next
		slow = slow.next
	}

	return slow

}

function slowTest() {
	const l = new List();

	l.insertLast('a');
	l.insertLast('b');
	l.insertLast('c');
	l.insertLast('d');
	l.insertLast('e');

	console.log(`${fromLast(l, 3)}`)
}

slowTest()
module.exports = fromLast;
