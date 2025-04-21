// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz


//x % 3 == 0 'fizz'
//  % 5 == 0 'buzz'
// 3 & 5,    'fizzbuzz'

 const fizzBuzz = (n) => {
    //loop 1 <= n 
    //set conditions 
        //x % 3 == 0 'fizz'
        //  % 5 == 0 'buzz'
        // 3 & 5,    'fizzbuzz'
    //else log n 

    for(let i = 1; i <= n; i++) {
        console.log((i%3 ? '' : 'fizz') + (i%5 ? '':'buzz') || i )
    }
 }


 console.log(fizzBuzz(5));
