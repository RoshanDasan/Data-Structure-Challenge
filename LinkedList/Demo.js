const { count } = require("console")

class main 
{
    constructor()
    {
       var  head = 0
       var  length = 0
       class Node
       {
        constructor(element)
        {
            this.element = element
            this.next = null
        }
       }
       this.head = function()
       {
        return head
       }
       this.length = function()
       {
        return length
       }


       this.add = function(element)
       {
        let node = new Node(element)

        if(head == 0)
        {
            head = node

        }
        else
        {
        let currentNode = head

            console.log('else');
            while(currentNode.next)
            {
                currentNode = currentNode.next

            }
            currentNode.next = node
        }
        length++  

       }

       this.display = () =>
       {
        let currentNode = head
        let variable = ""
        while(currentNode)
        {
            variable += `${currentNode.element} -> `
            currentNode = currentNode.next
        }
        console.log(variable);
       }

       this.deleteNode = function(index)
       {
        let currentNode = head
        if(index>=length)
        {
            return
        }
        else
        {
            let count = 1
            while(count != index)
            {
                currentNode = currentNode.next
                count++
            }
            currentNode.next = currentNode.next.next
        }
       }
    }
    
}

let l = new main()

l.add(1)
l.add(2)
l.add(3)
l.add(4)

l.deleteNode(2)

l.display()