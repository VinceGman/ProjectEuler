let num = 600851475143;
let largest_prime_factor = 0;

for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
        largest_prime_factor = i;
        num = num / i;
    }
}

console.log(largest_prime_factor);
