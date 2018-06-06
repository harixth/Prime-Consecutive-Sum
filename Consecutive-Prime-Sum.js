const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return true;
}

const getPrimes = max => {
    let sum = 0;
    var sieve = [], i, j, primes = [];
    while (sum < max) {
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                primes.push(i);
                for (j = i << 1; j <= max; j += i) {
                    sieve[j] = true;
                }
            }           
            sum =  primes.reduce((x, y) => x + y);            
        }
    }    
    return primes;   
}

const getPrimeConsecutivePrime = limit => { 
    let count = 0;
    let sum = 0;
    let arrPrimes = [];

    let finalSum = 0;
    let finalCount = 0; 
    let finalPrimes = [];

    let primeIntegers = getPrimes(limit);
    let totalPrimes = primeIntegers.length;

    for (let start = 0; start < totalPrimes; start++) {
        sum = 0;count = 1;arrPrimes = [];
        for (let current = start; current < totalPrimes; current++) {
            let actual = primeIntegers[current];
            arrPrimes.push(actual);
            sum += actual;
            if ( sum >= limit ) {
                break;
            }
            if ( isPrime(sum) ) {
                if ( count > finalCount ) {
                    finalCount = count;
                    finalSum = sum;
                }
            }
            count++;
        }
    }

    console.log(finalSum + " is the sum of the most consecutive primes with " + finalCount + " terms");

}

getPrimeConsecutivePrime(1000000);

