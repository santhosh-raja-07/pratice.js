class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`Hello Iam ${this.name} and Iam ${this.age} old`)
    }
}
let person = new Person("Santhosh Raja" , 20)
person.greeting()