/* 

Start Date: September 3rd 2021 - 10:22 pm
Finish Date: September 4th 2021 - 3:44 pm

Description: 

// omitted

Notes:
9/4/21 - 3:31 pm : I didn't initially write any notes but I was doing it poorly. 
I was checking primes by brute force and I had an array copy pasted. Today I decided
that I would instead make a custom prime array from code in p7 and wrote a speedy
binary search algorithm that I can use in problems now. The logic in the OR statement 
took me the longest.
*/


function createPrimeArray(primeCount) { // general use
    console.log(`Creating Prime Array: ${primeCount} Primes`)
    let primes = [];

    var found = 0;
    var tryNum = 2;
    var isPrime = true;
    var currentPrime = 2;

    while (found != primeCount) {
        for (var i = 2; i < tryNum; i++) {
            if (tryNum % i == 0 && tryNum != i) {
                isPrime = false;
            }
        }

        if (isPrime) {
            found++;
            currentPrime = tryNum;
            primes.push(tryNum);
        }

        isPrime = true;
        tryNum++;
    }

    return primes;
}

function binarySearch(target, array) { // general use
    let arr = [...array];

    let check_index = Math.floor((arr.length - 1) / 2);

    //console.log(`Array: ${arr}\nChecking: ${arr[check_index]} @ Index: ${check_index}`);

    if (target == arr[check_index]) {
        return true;
    }
    else if (arr.length == 1) {
        return false;
    }
    else if (target > arr[check_index]) {
        return binarySearch(target, arr.splice(++check_index, arr.length - check_index));
    }
    else if (target < arr[check_index]) {
        return binarySearch(target, arr.splice(0, check_index));
    }
}

function run_quadratic_formula(bounds) {
    let highscore = 0;
    for (let a = -bounds; a <= bounds; a++) {
        for (let b = -bounds; b <= bounds; b++) {
            let match = true;
            let n = 0;
            let current = 0;
            while (match) {
                //console.log(`Checking: n^2 + ${a}n + ${b}`);
                current = (n * n) + (a * n) + b;
                if (current <= 1 || (current % 2 == 0 && current != 2) || !binarySearch(current, primes)) {
                    match = false;
                    if (n > highscore) {
                        highscore = n;
                        console.log(`New High Score: ${highscore} : n^2 + ${a}n + ${b} : New Best Solution: ${a*b}`);
                    }
                }
                n++;
            }
        }
    }
}

let primes = createPrimeArray(10000);

run_quadratic_formula(1000);