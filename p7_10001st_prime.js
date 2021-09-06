/* 

Start Date: April 12th 2020 - 1:34 am
Finish Date: April 12th 2020 - 2:27 am

Description: 

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10001st prime number?


Notes: I got carried away with timing my functions and setting a runable (setTimeout) function for them. Maybe I can make
custom code that will run things like this for me and time them automatically. 
*/

const { performance } = require('perf_hooks');

function findPrime(numPrime)
{
    var startTime = performance.now();

    var found = 0;
    var tryNum = 2;
    var isPrime = true;
    var currentPrime = 2;

    while (found != numPrime) 
    {
        for (var i = 2; i < tryNum; i++)
        {
            if (tryNum % i == 0 && tryNum != i)
            {
                isPrime = false;
            }
        }

        if (isPrime)
        {
            found++;
            currentPrime = tryNum;
        }

        isPrime = true;
        tryNum++;
    }
    console.log("\n------- Number: " + numPrime + " -------");
    console.log("Time Elapsed (Find Prime Algorithm): " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
    console.log("Found Prime #" + numPrime + ": " + currentPrime);
}

/*
function run(value)
{
    setTimeout(() => { findPrime(value); }, 300 * value);
}


for (var i = 1; i <= 10001; i++)
{
    run(i);
}*/

function run(value)
{
    var startTime = performance.now();

    for (var i = 1; i <= value; i++)
    {
        findPrime(i);
    }

    console.log("Time Elapsed (Finding First " + value + " Primes): " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
}

//run(1000);
findPrime(20000);


