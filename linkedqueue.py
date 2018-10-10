class Node:
    def __init__(self,data,next=None):
        self.data= data
        self.next= next
class LinkedQueue:
    def __init__(self):
        self.first = None
        self.last= None
    def enqueue(self, x):
        ny= Node(x)
        if self.first== None:
            self.first= ny
            self.last = ny
        else:
            self.last.next= ny
            self.last= ny
    def dequeue(self):
        temp = self.first.data
        self.first = self.first.next
        return temp
class Stack:
    def __init__(self):
        self.root = None
    def push(self,x):
        ny = Node(x)
        ny.next= self.root
        self.root= ny
    def pop(self):
        x= self.root.data
        self.root = self.root.next
        return x
    def isEmpty(self):
        if self.root== None:
            return True
        else:
            return False
