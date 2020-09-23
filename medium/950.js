class LL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    reveal() {
       if (this.head) {
            let revealed = this.head;
            // console.log(revealed.next.val)
            this.head = this.head.next;
            return revealed;
       } else {
           return null;
       }
    }

    toBottom() {
        if (this.head) {
            let bot = this.head;
            this.head = this.head.next;
            this.tail.next = bot;
            this.tail = bot;
        } else {
            return null;
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        // this.prev = null;
    }
}

// let nodea = new Node(1);
// let nodeb = new Node(2);
// let nodec = new Node(3);
// let noded = new Node(4);
// let ll = new LL();
// ll.append(nodea);
// ll.append(nodeb);
// ll.append(nodec);
// ll.append(noded);

// console.log(ll.head, ll.tail)

var deckRevealedIncreasing = function(deck) {
    let a = [];
    let h = {};
    let sorteddeck = [...deck].sort((a,b) => a-b);
    let ll = new LL();
    for (let i = 0; i < sorteddeck.length; i++) {
        h[i] = sorteddeck[i];
        // key = pos, value = val
        ll.append(new Node(i));
    }
    let revealed = [];
    for (let i = 0; i < deck.length; i++) {
        // console.log(ll)
        revealed.push(ll.reveal().val);
        ll.toBottom();
    }
    console.log(ll.head)
    let node = ll.head;
    while (a.length < deck.length) {
        a.push(h[node.val]);
        node = node.next;
    }
    // return a;
    
};

console.log(deckRevealedIncreasing([17,13,11,2,3,5,7]))