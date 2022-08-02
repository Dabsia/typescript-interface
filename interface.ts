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

interface Bird {
    flyingSpeed: number;
    type: 'bird'
}

interface Horse {
    runningSpeed: number;
    type: 'horse'
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal): void {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed
    }

    console.log('The animal is moving at', speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})