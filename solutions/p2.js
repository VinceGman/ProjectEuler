let prev = 0;
let curr = 1;
let next = null;
let sum = 0;

while (next <= 4000000) {
    next = prev + curr;

    if (curr % 2 == 0) sum += curr;

    prev = curr;
    curr = next;
}

console.log(sum);
