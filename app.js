var Person = {
    name: 'Dabsia',
    age: 20,
    hobbies: ['Code', 'play football']
};
for (var _i = 0, _a = Person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(3, 6));
var newHobbies = ['sports', 'cooking'];
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, newHobbies);
console.log(activeHobbies);
