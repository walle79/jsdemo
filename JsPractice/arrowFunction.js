const square = num => num * num;
const result = square(5)
console.log(result);

const mess = () => 'hello JS';
console.log(mess());

const add = (a, b) => a + b;
console.log(add(5, 6));

const getFullName = person => `${person.firstName} ${person.lastName}`

const person = {
    firstName: 'Son',
    lastName: 'H'
}

console.log(getFullName(person));

//
const greet = (username='guest', age=0) => `Hello, ${username}! You are ${age} years old`
console.log(greet('Son', 30))