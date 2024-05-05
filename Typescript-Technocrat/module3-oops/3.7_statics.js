"use strict";
// static in OOPs
// static use for same memory allocation
class Counter {
    static increment() {
        return (Counter.count = Counter.count + 1);
    }
    static decrement() {
        return (Counter.count = Counter.count - 1);
    }
}
Counter.count = 0;
// const instance1 = new Counter()
console.log(Counter.increment());
