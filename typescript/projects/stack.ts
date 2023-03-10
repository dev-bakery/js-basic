{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    // stack의 클래스 생성할때 최대 길이를 인자로 받아서 지정한다.
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }
    push(value: string) {
      if (this._size === this.capacity) {
        throw new Error("Stack is full!");
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push("qwe");
  stack.push("asd");
  stack.push("zxc");
  // stack.push("rty");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
