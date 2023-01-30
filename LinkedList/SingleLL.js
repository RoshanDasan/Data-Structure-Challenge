
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

            let arr = [];
            while (temp != null) {
                if (length != 0) {
                    arr.push(temp.element);
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
                    currentNode.next = currentNode.next.next;
                    length--;
                }

                else {
                    currentNode = currentNode.next;
                }

            }


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


}
}


let L1 = new main()


L1.add(1)
L1.add(2)
L1.add(3)
L1.add(2)
L1.add(1)


console.log(L1.palindrome());















