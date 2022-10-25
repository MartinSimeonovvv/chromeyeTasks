const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};
const primeDividers = (num) => {
    const result = num % 2 === 0 ? [2] : [];
    let start = 3;
    while (start <= num) {
        if (num % start === 0) {
            if (isPrime(start)) {
                result.push(start);
            }
        }
        start++;
    }
    return result;
};

console.log(primeDividers(18));
console.log(primeDividers(113));
