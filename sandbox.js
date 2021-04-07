// stringifying and parsing data

const todos = [
    {text: 'play mariokart', author:'shaun'},
    {text: 'buy milk', author:'mario'},
    {text: 'buy bread', author:'luigi'}
];

//console.log(JSON.stringify(todos)); // this will turn the above const into a long string by using stringify and json to make it valid JSON
localStorage.setItem('todos', JSON.stringify(todos)); //this will store the todos in localStorage as valid JSON and as a long string

const stored = localStorage.getItem('todos'); // retrieving stored todos
console.log(stored); //this will retrieve the data but still as JSON format

console.log(JSON.parse(stored)); // if we use parse this will turn it back into an array