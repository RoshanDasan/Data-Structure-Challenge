
function DLL()
{
  let head = 0
  let length = 0
  
  class Node {
        constructor(element) {
            this.element = element
            this.next = null
            this.previous = null
        }
    }

  this.head = function()
  {
    return head
  }

  this.length = function()
  {
    console.log(length);
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
        currentNode = head

        while(currentNode.next)
        {
            currentNode = currentNode.next;
        }
        currentNode.next = node
        node.previous = currentNode.previous
    }
    length ++
  }

  this.display = function()
  {
    let currentNode = head
    
    let last = null
    let arr = []
    let arr1 = []
    
    while(currentNode != null)
    {
        arr.push(currentNode.element)
        arr1.push(currentNode.element)
        currentNode = currentNode.next       
    }
    

    
    arr1.reverse()
    console.log(arr);
    console.log(arr1);
 
  }

  this.insert = function(index, element)
  {
    let node = new Node(element)
    let currentNode = head
    let previousNode
    let count = 0

    if(index>length)
    {
        console.log('Invalid index');
        return
    }
    if(index==0)
    {
        node.next = currentNode
        node = head
             
    }
    else{
        while(index != count)
        {
            previousNode = currentNode
            currentNode = currentNode.next
            count ++
        }
        node.next = currentNode
        node.previous = currentNode.previous
        previousNode.next = node
    }
    length ++
  }
}


let LinkList = new DLL()

LinkList.add('cat')
LinkList.add('dog')
LinkList.add('tiger')
LinkList.add('lion')


LinkList.insert(2,'Roshan')
LinkList.display()

LinkList.length()


