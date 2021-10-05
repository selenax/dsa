//return in array 
//need to be in order of sequence of both strings


function missingWords(s, t) {
  // Write your code here
  let result = []
  let str1 = s.split(' ')
  let str2 = t.split(' ')
  let index1 = 0, index2 = 0;
    while(index1 <= str1.length) {
      if(str2[index2] !== str1[index1]) {
        result.push(str1[index1])
        index1++;
      } else {
        index1++;
        index2++
      }
}
return result
}
console.log(missingWords('i like cheese','cheese'));
console.log(missingWords('Python is an easy to learn powerful programming language It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing','Python is an easy to learn powerful programming language')); //It has efficient high-level data structures and a simple but effective approach to objectoriented programming Python elegant syntax and dynamic typing


