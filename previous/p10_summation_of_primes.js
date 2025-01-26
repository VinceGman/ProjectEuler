/* 

Start Date: April 14th 2020 - 4:53 pm
Finish Date: April 25th 2020 - 12:07 am

Description: 

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

Notes: 
4/14/20 - 5:29 pm : This took 27.3073033 min to run. That's why it took me so long. I'm going to redo this to answer in 60 secs.
4/14/20 - 5:53 pm : This took 20.28544655 min to run. I was able to shave off 7 minutes by not checking primes.
4/14/20 Session: 
    - Number Reached: 393123 <-- I changed to run for 60 seconds and spit out the number it reached instead because it's faster.
    - Number Reached: 532315 <-- inner for loop to while so that it'll break once prime = false
4/16/20 Session: 
    - This took 9.87397796667 min to run. After several changes, I got it under 10 minutes. Next attempt will feature Sieve Method.
4/24/18 Session:
    - I wrote Sieve method under more optimized conditions (ie ignroing evens) and can run 2M in 0.125 seconds. That's a wrap. 
*/

const { performance } = require('perf_hooks');

function sumOfPrimesBelow(upTo)
{
    var startTime = performance.now();
    var prime = true;
    var sum = 2;
    for (var i = 3; i <= upTo; i += 2)
    {
        if (((performance.now() - startTime) / 1000) < 60)
        {
            var check = 3;
            while (check < i && prime)
            {
                if (i % check == 0)
                {
                    prime = false;
                }
                check++;
            }

            if (prime)
            {
                //console.log("Added: " + i);
                sum += i;
            }
            prime = true;
        }
        else
        {
            console.log("ERROR: Runtime Exceeded Target: 60 sec");
            console.log("Number Reached: " + i);
            break;
        }
    }
    //console.log("\n------- Number To Match: " + upTo + " -------");
    var timeTaken = ((performance.now() - startTime) / 1000).toFixed(6); 
    console.log("Time Elapsed (Sum Of Primes): " + timeTaken + " sec");
    console.log("Sum: " + sum);
    return timeTaken; 
}

function sumOfPrimesSieveBelow(upTo)
{
    var startTime = performance.now();
    var boolArray = [];
    var sum = 0;

    for (var i = 0; i <= upTo; i++)
    {
        boolArray.push(true);
    }

    var n = 2;
    while (n <= upTo)
    { 
        if (boolArray[n] == true)
        {
            sum += n;
            var t = 0; 
            var currentIndex = 0;
            while (currentIndex <= upTo)
            {
                currentIndex = Math.pow(n, 2) + (t * n);
                boolArray[currentIndex] = false;
                //console.log("Index: " + Math.pow(n, 2) + (t * n) + " | n: " + n + " | t: " + t);
                t++;
            }
        }
        n++;
    }

    //console.log("\n------- Primes Up To: " + upTo + " -------");
    var timeTaken = ((performance.now() - startTime) / 1000).toFixed(6);
    console.log("Time Elapsed (Sieve Method): " + timeTaken + " sec");
    console.log("Sum: " + sum);
    return timeTaken; 
}

function sumOfPrimesSieveFaster(upTo)
{
    var startTime = performance.now();
    var boolArray = [];
    var sum = 2;

    for (var i = 3; i <= upTo; i += 2)
    {
        boolArray.push(true);
    }

    var n = 0;
    while (n <= upTo)
    { 
        var num = n*2 + 3
        if (boolArray[n] == true)
        {
            sum += num;

            var t = n + num;
            while (t <= upTo)
            {
                boolArray[t] = false;
                t += num;
            }
        }
        n++;
    }

    //console.log("\n------- Primes Up To: " + upTo + " -------");
    var timeTaken = ((performance.now() - startTime) / 1000).toFixed(6);
    console.log("Time Elapsed (Faster Sieve Method): " + timeTaken + " sec");
    console.log("Sum: " + sum);
    return timeTaken; 
}

/*
var upTo = 500000;
var faster;
var slower;
var tracker = "-----------Attempts Log-----------";
for (var i = 50000; i <= upTo; i += 50000)
{
    console.log("\n------- Primes Up To: " + i + " -------");
    faster = sumOfPrimesSieveFaster(i);
    slower = sumOfPrimesSieveBelow(i);

    if (slower <= faster)
    {
        tracker += "\nFailed (" + i + ") | Sieve: " + faster + " | Standard: " + slower;
    }
    else
    {
        tracker += "\nPassed (" + i + ") | Sieve: " + faster + " | Standard: " + slower;
    }
}

console.log(tracker);*/
//sumOfPrimesBelow(2000000); // 142913828922

sumOfPrimesSieveFaster(2000000);