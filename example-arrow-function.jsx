// var names = ['Andrew', 'Julia','Jen'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });


function add(a,b) {
  return a+b;
}

//Add statement
var addStatement = (a,b) => {
  return a+b;
}

//Add expression
var addExpression = (a,b) => a + b;

console.log(addStatement(1,3));
console.log(addExpression(9,0));
