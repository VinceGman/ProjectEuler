function reverse(num) {
    let num_reverse = 0;
    while (num > 0) {
        num_reverse = 10 * num_reverse + num % 10;
        num = Math.floor(num / 10);
    }
    return num_reverse;
}

let largest_palindrome_product = 0;
let num, num_reverse;

for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= i; j--) {
        num = i * j;
        if (num <= largest_palindrome_product) break;

        // num_reverse = (i * j).toString().split('').reverse().join(''); // character array reversal

        num_reverse = reverse(num); // mod number reversal

        if (num == num_reverse) {
            largest_palindrome_product = num;
        }
    }
}

console.log(largest_palindrome_product);
