const versionControl = function(v1, v2) {
  // split string by . into individual value in array
  let new1 = v1.split('.'); 
  let new2 = v2.split('.'); 
  
  // get rid of ending 0's to prevent edge cases
  if(new1[new1.length-1] == 0) {
    new1.splice(-1,1)
  }
  if(new2[new2.length-1] == 0) {
    new2.splice(-1, 1)
  }

  // compare each value and immediate return the version with bigger value
  for(let x = 0; x < new1.length; x++) { 
      if(Number(new1[x]) > Number(new2[x])) {
        console.log(`${Number(new1[x])} = v1, ${Number(new2[x])} = v2`);
        return v1;
    } else if (Number(new1[x]) < Number(new2[x])) {
      return v2;
    } 
  } 

  // if both version are equal and in length, return -1 
  if(new1.length == new2.length) return -1;

  // both version have same values up til this point, return version with longer length
  if(new1.length > new2.length) {
    return v1
  } else {
    return v2
  }
}

console.log(versionControl('20', '2.0.4'))
console.log(versionControl('1', '0.0.4'))
console.log(versionControl('1.3', '1.2.2'))
console.log(versionControl('2.0.1', '2.0.1'));
console.log(versionControl('1.1.2', '1.1')); 
console.log(versionControl('1.2.2', '1.3'))
console.log(versionControl('12.0.1.0', '12.0.1'))
console.log(versionControl('12.0.1', '12.0.1.1.0'))