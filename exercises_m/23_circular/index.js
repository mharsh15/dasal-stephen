// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true
const L = require('./linkedlist');
const List = L.LinkedList;
const Node = L.Node;

function circular(list) {
	let slow = list.getFirst().next
	let fast = list.getFirst().next.next
	let shouldIterate = true

	while (shouldIterate || fast) {
		if (slow === fast) {
			shouldIterate = false
			return true
		}

		//fast = fast.next
		if (fast && fast.next && fast.next.next) {
			slow = slow.next
			fast = fast.next.next
		}
		else {
			//shouldIterate = false
			return false
		}
	}

	return false


}

function test() {
	const l = new List();
	const a = new Node('a');
	const b = new Node('b');
	const c = new Node('c');
	const d = new Node('d');
	const e = new Node('e');
	const f = new Node('f');
	const g = new Node('g');
	const h = new Node('h');
	l.head = a;
	a.next = b;
	b.next = c;
	c.next = d;
	d.next = e;
	e.next = f;
	f.next = g;
	g.next = h;
	//h.next = b;
	console.log(circular(l))
}
test()

module.exports = circular;
