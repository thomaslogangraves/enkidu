var parser = require('./pull_parse')
var compute = require('./compute');

var file = "HR.csv"

var value = parser(file)
var computation = compute([1,2,3,4,5,6]);
console.log(value, "this is the value");
console.log("computation", computation);
