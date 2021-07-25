class ListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    unshift(data) {
        let newHead = new ListNode(data, this.head);
        this.head = newHead;
        this.length++;
    }

    getFirst() {
        return this.head;
    }
    
    getLast() {
    
        let currentNode = this.head;

        while(currentNode && currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    clear() {
        this.head = null;
        this.length = 0;
    }

    shift() {
        if(!this.head) {
            return;
        }

        let oldHead = this.head;
        this.head = oldHead.next;
        this.length--;

        return oldHead;
    }

    pop() {
        if(!this.head) {
            return;
        }

        if(this.length === 1) {
            return this.shift();
        }

        let last = this.getLast();
        let current = this.head;

        while(current !== last) {
            current = current.next;
        }

        current.next = null;
        this.length--;
        return last;
    }

    push(data) {
        if(!this.head) {
            return this.unshift(data);
        }

        let last = this.getLast();
        last.next = new ListNode(data);
        this.length++;
    }

    get(index) {

        if(index >= this.length || index < 0) {
            return null;
        }

        let count = 0;
        let current = this.head;

        while(count < index) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(index, data) {
        if(!this.get(index)) {
            return false;
        }

        let prevData = this.get(index);
        prevData.data = data;
        return true;
    }

    remove(index) {
        if(!this.get(index)) {
            return false;
        }

        if(this.length === 1) {
            return this.shift();
        }

        const removeData = this.get(index);
        const prevData = this.get(index - 1);
        prevData.next = removeData.next;
        this.length--;
        return removeData;
    }

    insert(index, data) {
        if(index > this.length || index < 0) {
            return false;
        }

        if(this.length === 1) {
            this.unshift(data);
            return true;
        }

        const nextNode = this.get(index);
        const prevNode = this.get(index - 1);
        prevNode.next = new ListNode(data, nextNode);
        this.length++;
        return true;
    }
}
