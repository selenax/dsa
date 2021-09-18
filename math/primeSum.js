/* 

Sieve of Eratosthenes (siv of air-uh taws thuh-neeze)

Prime number is any number bigger than 1 and is only divisble by itself and 1. 

!
If n is not prime, it can be factored into a and b: 
             n = a * b; 
!
Now a and b can't be greater than square root of n, since sqrt(n) * sqrt(n) = n
!
Therefore, at least one of the factors must be smaller than or equal to the square root of n. 
!
If no factors are found less than or equal to sqrt(n), n must be a prime. 


*/ 

function sumPrimes(num) {

  function isPrime(num1) {
    // if(num1 < 2) { return false }
    for(let x = 2; x <= Math.sqrt(num1); x++) {
      if(num1 % x == 0) return false;
    }
    return true;
  }

let sum = 0;
for(let x = 2; x <= num; x++) {
  if(isPrime(x)) sum += x;
  }
  return sum;
}


// refactor
function sumPrimes(num) {

  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumPrimes(3));

