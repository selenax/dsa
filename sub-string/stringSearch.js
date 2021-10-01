//count number of times a smaller string appears in a longer string

// O(N^2)
function stringSearch(str1, str2) {
  //find the longer string 
  //counter and two loop to loop over each letter to see if there's match 
  if(str1.length < str2.length) return stringSearch(str2, str1);

  let count = 0;
  for(let x = 0; x < str1.length; x++) {
    for(let y = 0; y < str2.length; y++) {
      if(str1[x+y] !== str2[y]) {
        break;
      } 
      if(y === str2.length-1)
      count++;
    }
  }
  return count;
}
console.log(stringSearch('omgkhaha', 'haha'));
console.log(stringSearch('haha', 'omghahanoohaha'));
