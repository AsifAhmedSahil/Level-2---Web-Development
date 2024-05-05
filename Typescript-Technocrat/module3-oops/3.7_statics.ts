
// static in OOPs

// static use for same memory allocation



class Counter {
    static count : number= 0

    static increment(){
        return (Counter.count = Counter.count + 1)
    }
    static decrement(){
        return (Counter.count = Counter.count - 1)
    }
}

// const instance1 = new Counter()
console.log(Counter.increment()) 