// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
    
    size() {
        let i = 0
        let head = this.head
        while (head) {
            head = head.next
            i++
        }
        return i
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let head = this.head
        while (head && head.next) {
            head = head.next
        }
        return head
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        if (!this.head) {
            return
        } else {
            this.head = this.head.next
        }
    }

    removeLast() {
        const linkedSize = this.size()
        if (linkedSize === 0) {
            return
        } else if (linkedSize === 1) {
            this.head = null
        } else {
            let head = this.head
            let i = 1
            while (i <= linkedSize -2) {
                head = head.next
                i++
            }
            head.next = null
        }
    }

    insertLast(data) {
        const linkedSize = this.size()
        if (linkedSize === 0) {
            this.head = new Node(data)
        } else if (linkedSize === 1) {
            this.head.next = new Node(data)
        } else {
            let head = this.head
            let i = 1
            while (i <= linkedSize -1) {
                head = head.next
                i++
            }
            head.next = new Node(data)
        }
    }

    getAt(index) {
        const linkedSize = this.size()
        if (index === 0) {
            return this.head
        } else if (index < 0 || !index) {
            return 'Invaild Number'
        } else if (index >= linkedSize) {
            return null
        } else {
            let num = index
            let head = this.head
            while (num > 0) {
                head = head.next
                num = num -1
            }
            return head
        }
    }

    removeAt(index) {
        // best use getAt(index -1)
        // below are hard coded before watching answer
        const linkedSize = this.size()
        if (index === 0) {
            this.removeFirst()
        } else if (index >= linkedSize) {
            return
        } else if (index < 0 || !index) {
            return 'Invaild Number'
        } else if (index === 1) {
            let head = this.head
            head.next = head.next.next
        } else if (index === linkedSize -1) {
            this.removeLast()
        } else {
            let num = index
            let head = this.head
            let i = 0
            while (i < num - 1) {
                head = head.next
                head.next = head.next.next
                i++
            }
        }
    }

    insertAt(data, index) {
        const linkedSize = this.size()
        if (index === 0) {
            const head = this.head
            const newHead = new Node(data)
            newHead.next = head.next
            head = newHead            
        } else if (!data || !index) {
            return
        } else if (index >= linkedSize -1) {
            this.getLast().next = new Node(data)
        } else {
            let before = this.getAt(index -1)
            let after = this.getAt(index +1)
            before.next = new Node(data)
            before.next.next = after
        }
    }

}

module.exports = { Node, LinkedList };