let person = {
    name: "Harry", 
    age: 19, 

    introduce: function(){
        return `Hello my name is ${this.name} and I am ${this.age} years old.`
    }
}

console.log(person.introduce())