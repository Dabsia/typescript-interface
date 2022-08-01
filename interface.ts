interface Greetable {
    name: string;
    greet(phrase: string): void;
}

const addNumbers = (a: number, b: number): number => {
    return a +  b
}

console.log(addNumbers(4,9))

let user1: Greetable;
user1 = {
    name: 'Dabo',
    greet(phrase) { console.log(phrase, this.name) }
} 

user1.greet('Hello, Good evening')

