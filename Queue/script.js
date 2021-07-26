// The Queue data structure has methods 'enqueue' and 'dequeue' 
// which adds / removes elements from the queue AND
// also maintain "first-in-firt-out"
class Queue {
	constructor() {
		this.data = [];
	}

	enqueue(val) {
		this.data.unshift(val);
	}

	dequeue() {
		return this.data.pop();
	}
}