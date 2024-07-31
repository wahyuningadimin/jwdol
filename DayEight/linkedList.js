class Node{
    constructor(element){
        this.elemet= element;
        this.next= null
    }
}

class LinkedList {
    constructor() {
        this.head= null;
        this.size= 0 
    }

    add(Element){
        let node= new Node(element);
        let current;
        if (this.head == null){
            this.head=node;
        } else {
            current= this.head;
            while (current.next){
                current= current.next;
            }
            current.next=node;
        }
        this.size += 1;
    }
}

printList() {
    const curr=this.head;
    while (curr){
        console.log(curr.element);
        curr=curr.next;
    }
}