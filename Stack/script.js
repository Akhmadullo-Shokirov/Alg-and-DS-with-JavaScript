// The Stack data structure with methods "push" and "pop".
// 'push' adds element to stack.
// 'pop' removes top most element in the stack and return it.
class Stack {
	constructor() {
		this.data = [];
	}

	push(val) {
		this.data.push(val);
	}

	pop() {
		return this.data.pop();
	}
}
