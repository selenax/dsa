//* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

//* In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

//! In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.

// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") should return false.

// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") should return false.

// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") should return true.

// truthCheck([{"single": "yes"}], "single") should return true.

// truthCheck([{"single": ""}, {"single": "double"}], "single") should return false.

// truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false.

// truthCheck([{"single": "double"}, {"single": NaN}], "single") should return false.


// should have key and truthy value 
// input: array of objects
// output: boolean
// if each obj in array has pre, and has a truthy value, return true else return false 

function truthCheck(collection, pre) {
  return collection.every(obj => obj.hasOwnProperty(pre) && Boolean(obj[pre]))
}
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

console.log(Boolean(''));
