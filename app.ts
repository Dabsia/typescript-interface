
const Person = {
    name: 'Dabsia',
    age: 20,
    hobbies: ['Code', 'play football']
}

for (const hobby of Person.hobbies) {
    console.log(hobby.toUpperCase())
}

const addNumbers = (a: number, b: number) => {
    return a + b
}

console.log(addNumbers(3, 6))

const newHobbies = ['sports', 'cooking']
const activeHobbies = ['Hiking']

activeHobbies.push(...newHobbies)
console.log(activeHobbies)