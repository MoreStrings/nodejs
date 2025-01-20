const incrementDecrement = () => {
    let count = 0;
    return{
        increment: () => {
            count++
        },
        decrement: () => {
            count++
        },
        getCount: () => {
            return count
        }
    }
}

const counter = incrementDecrement()
console.log(counter)
counter.increment()
console.log(counter.getCount())
counter.decrement()
console.log(counter.getCount())