class Stack:
     # Constructor
     def __init__(self):
         self.collection = []

     # Append data on the top of the stack
     def push(self, data):
         self.collection.append(data)

     # Remove and return the last item on the top of the stack
     def pop(self):
         return self.collection.pop()

     # Observe top-most element without popping it off the stack
     def peek(self):
         return self.collection[len(self.collection) - 1]

     # Returns the size of the stack
     def size(self):
         return len(self.collection)