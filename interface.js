var addNumbers = function (a, b) {
    return a + b;
};
console.log(addNumbers(4, 9));
var user1;
user1 = {
    name: 'Dabo',
    greet: function (phrase) { console.log(phrase, this.name); }
};
user1.greet('Hello, Good evening');
