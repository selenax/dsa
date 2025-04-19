//Sum of all Prime up to or equal N

//prime number is any # >= 2 that is divisible only by 1 and itself.
//2*1=2, 5*1=5, etc


//NOTE: INTUITION Square Root :
    //!  a non-prime-number's maximum possible factorial would have to be its square root b/c sqrt(n) * sqrt(n) = n
    //!  sqrt(9)=3, 3 is the highest factorial for 9 because 3*3=9
         //if a * b = n, a or b would have to be smaller or equal to sqrt(n)
    //!  therefore, to check the possible factorials for a #, check the vales up to the square root.

//ALGORITHM: O(N)
const sumPrimes = (num) => {
	//prime number's only factor is 1 and itself, so we can check for reminders by dividing values up to num

	function isPrime(val) {
		//max factorial for non-prime # is it's square root.
		for (let i = 2; i <= Math.sqrt(val); i++) {
			//If no factors are found less than or equal to sqrt(n), n must be a prime. 
			if (val % i == 0) return false;
		}
		return true;
	};

	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
};
console.log(sumPrimes(5)); //10

// function sumPrimes(num) {
// 	let primes = [];
// 	for (let i = 2; i <= num; i++) {
// 		if (primes.every((prime) => i % prime !== 0)) primes.push(i);
// 	}
// 	return primes.reduce((sum, prime) => sum + prime, 0);
// }

console.log(sumPrimes(3));
// console.log(sumPrimes(9));
