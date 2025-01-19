let car = {
    brand: "McLaren",
    model: "720S", 

    getDetails: function(){
        return `This car is a ${this.brand} ${this.model}.`
    }
}

console.log(car.getDetails())