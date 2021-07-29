class Queue<T> {
  private readonly _list: T[] = [];

  // Gets the length of this queue.
  public get length(): number {
    return this._list.length;
  }

  // Adds the element to the tail of this queue.
  public enqueue(value: T): void {
    this._list.push(value);
  }

  // Removes the element at the head of this queue and returns it.
  public dequeue(): T {
    return this._list.shift();
  }

  // Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
  public peek(): T {
    return this._list[0] || null;
  }

  // Retrieves and removes the head of this queue, or returns null if this queue is empty.
  public poll(): T {
    return this.length === 0 ? null : this._list.pop();
  }

  // Retrieves, but does not remove, the head of this queue. 
  // This method differs from peek only in that it throws an exception if this queue is empty.
  public element(): T {
    return this._list[this.length - 1];
  }
}