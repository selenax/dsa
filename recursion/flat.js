function steamrollArray(arr) {
  // Recursion is the breakfast of champions. ― Don Stewart
  let steamrolled = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let subArray = steamrollArray(arr[i]);
      steamrolled.push(...steamrollArray(arr[i]))
    } else {
      steamrolled.push(arr[i]);    
    }
  }
  return steamrolled;
}



console.log(steamrollArray([1,[[2]],[[[3]]]]));

console.log([].concat([[2]]));
console.log([2].concat([[[2]]]));


