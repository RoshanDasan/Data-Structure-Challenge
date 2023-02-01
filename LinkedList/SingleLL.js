const { log } = require("console");

class main {
    constructor() {
        let head = 0;
        let length = 0;

        class Node {
            constructor(element) {

                this.element = element;
                this.next = null;

            }
        }


        this.length = function () {

            return length;
        };


        this.head = function () {

            return head;
        };

        this.add = function (element) {
            let node = new Node(element);

            if (head == 0) {
                head = node;
            }

            else {
                let currentNode = head;

                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = node;
            }
            length++;
        };

        this.display = function () {
            let temp = head;

            let arr = "";
            while (temp != null) {
                if (length != 0) {
                    arr += `${temp.element} -> `
                    temp = temp.next;
                }

                else {
                    console.log('No list');
                    return;
                }
            }
            console.log(arr);

        };



        this.removeElement = function (element) {
            var currentNode = head;
            var previousNode;

            if (currentNode.element == element) {
                head = currentNode.next;
            }
            else {
                console.log(currentNode);
                while (currentNode.element != element) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
                previousNode.next = currentNode.next;
            }
            length--;
        };



        this.removeIndex = function (index) {
            let currentNode = head;
            let count = 0;
            let previousNode;
            if (index > length) {
                console.log('Not find');
            }

            else {
                while (count < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    count++;
                }
                previousNode.next = currentNode.next;

            }
            length--;

        };

        this.delete = function () {
            head = 0;
            length = 0;
        };


        this.findIndex = function (element) {
            let index = 0;
            let currentNode = head;

            while (currentNode) {
                if (currentNode.element == element) {
                    return index;
                }
                index++;
                currentNode = currentNode.next;
            }
            return 'No element';
        };

        this.findElemAt = function (index) {
            let currentNode = head;
            let count = 0;
            while (count != index) {
                currentNode = currentNode.next;
                count++;
            }
            return currentNode;
        };

        this.insert = function (element, index) {
            let node = new Node(element);
            let currentNode = head;
            let count = 0;
            let previousNode;

            if (index > length) {
                return 'Wrong index';
            }

            if (index == 0) {
                node.next = currentNode;
                head = node;
            }

            else {
                while (index != count) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    count++;
                }
                node.next = currentNode;
                previousNode.next = node;
            }
            length++;
        };

        //Questions.............


        // remove duplicate
        this.removeDuplicate = function () {
            let currentNode = head;

            while (currentNode.next != null) {
                if (currentNode.element == currentNode.next.element) {
                    console.log(currentNode.element);
                    currentNode.next = currentNode.next.next;

                    length--;
                }
                else {
                    currentNode = currentNode.next;
                }
                
            }
            return head


        };

        //remove duplicate II

        this.deleteDuplicates = function() {

            let currentNode = head

            if(currentNode.element == currentNode.next.element)
            {
                currentNode = currentNode.next.next
                currentNode = head
            }
          
            while(currentNode.next.next != null)
            {
                if(currentNode.next.element == currentNode.next.next.element)
                {
                    currentNode.next = currentNode.next.next.next
                }
                else
                {
                    currentNode = currentNode.next
                }

            }  
         return head
        };


        //middle of the linkedlist

        this.middleNode = function(head) {

            let fast = head
            let slow = head
        
            while(fast != null && fast.next != null)
            {
                fast = fast.next.next
                slow = slow.next
            }
            return slow;
            
        }

        // merge two sorted list
        this.merge = function (list1, list2) {
            let newNode = new Node()
            let fake = newNode

            while(list1 !=null && list2 != null)
            {
                if(list1.element < list2.element)
                {
                    fake.next = list1
                    list1 = list1.next
                    fake = fake.next
                }
                else
                {
                    fake.next = list2
                    list2 = list2.next
                    fake = fake.next
                }
            }

            fake.next = (list1 != null)? list1:  list2
                  
            return newNode.next;

        };

        // reverse a linkedlist

        this.reverse = function(head)
        {           
            let present = head
            let previous = null
            let next = present.next

            while(present != null)
            {
                present.next = previous
                previous = present
                present = next

                if(next != null)
                {
                    next = next.next
                }                           
            }        
            return previous

        }

        // palindrom 
        this.palindrome = function()
        {
            let mid = this.middleNode(this.head())
            let rev = this.reverse(mid)

            let currentNode = head

            while(currentNode != null && currentNode.next != null)
            {
                if(currentNode.element == rev.element)
                {
                    currentNode = currentNode.next
                    rev = rev.next
                }
                else
                {
                    this.reverse(mid)
                    return false
                }
            }
            this.reverse(mid)
            return true

        }


        // binary to decimal

        this.binaryToDecimal = function()
        {
            let binary = 0
            let position = 0
            let currentNode = head
            let rev = this.reverse(head)
            console.log(rev);
        

            while(rev)
            {
                binary += rev.element*Math.pow(2,position)
                rev = rev.next
                position ++
            }
            return binary

        }

        // shift method

        this.unshiftLL = function(element)
        {
            let node = new Node(element)
            console.log(node);

            let currentNode = head
            node.next = currentNode
            head = node

            console.log(node);
            return node
            
        }

    // find binding point
    // we have two list that connected each other in one node. find and return that node....

    this.bindingPoint = function(list1, list2)
    {
        let length1 = list1.length()
        let length2 = list2.length()
        let firstNode = list1.head()
        let secondNode = list2.head()
        if(length1>length2)
        {
            while(length1!=length2)
            {
                console.log(firstNode);
                head = firstNode.next
                console.log(head);
                length --     
                length1 -- 
                console.log(list1.length()); 
            }
        }
        else
        {
            while(length1!=length2)
            {
                secondNode = secondNode.next 
                head = firstNode

                length--  
                length2--            
            }

        }
        let length3 = list1.length()
        let length4 = list2.length()
        console.log(length3, length4);

    }




}
}


let L1 = new main()
let L2 = new main()
let L3 = new main()



L1.add(0)
L1.add(1)
L1.add(2)
L1.add(3)
L1.add(4)

L2.add(1)
L2.add(2)
L2.add(3)
L2.add(4)



console.log(L3.bindingPoint(L1,L2));



roshan,'=========' 













