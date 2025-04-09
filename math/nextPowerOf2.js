//Given a positive integer, find the next power of two greater than the given number 

// Input: N = 6
// Output: 8
// Explanation: The next power of two greater than 6 is 8.

// Input: N = 16
// Output: 16
// Explanation: 16 is already a power of two, so the next power of two is also 16.

//ALGORITHM: TIME:O(N) - while loop; SPACE:O(1)
const nextPower = (num) => {
    if(num <= 0) return false;
    //multiply result by 2 til we get to num
    let result  = 1;
    while(result < num) {  //n=9; 2,4,8,16; loop exit 16 < 9
        result *= 2
    }
    return result;
}

//ALGORITHM: TIME:O(1) - math function; SPACE:O(1)
const nextPower2 = (num) => {
    //math.log2 returns log base 2 of num
    //to get the next integer higher than curr exponent, round up using math.ceil
    let exponent = Math.ceil(Math.log2(num))

    //raise 2 to this power to get the next power of 2
    return 2 ** exponent;
}

// console.log(nextPower(6)); //8
// console.log(nextPower(9)); //16
// console.log(nextPower2(16)); //16
console.log(nextPower2(32)); //32
