/* 

Start Date: March 8th 2020 - 1:41 am
Finish Date: April 12th 2020 - 1:12 am

Description: 

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Notes: Started this really late and I'm too tired to brain the solution.

4/5/20 - 4:00 am : It's been months but I wanted to see if I could solve this. 
4/6/20 - 5:35 pm : I'm going to start over and make two solutions to time them.
4/7/20 - 12:43 am : I ended up coding it the brute force way and it's slow and garbage.
4/11/20 - 3:48 am : I had to take a break to finish school projects. I'm back at it again. I want to write Cake/Ladder. 
4/12/20 - 1:08 am : After implementing the Cake Algorithm, I realized it would only be faster with an array of random values.
After this, I essentially realized it was time to move on and call this challenge over.
*/

const { performance } = require('perf_hooks');

var numsUpTo = 20;

function smallestMultipleForced(upTo) // Brute force implementation
{
    var startTime = performance.now();
    var num = 0;
    var loop = true;
    while (loop)
    {
        num++;
        var i = 1;
        while (loop && i < upTo)
        {
            i++;
            if (num % i != 0)
            {
                loop = false;
            }
        }

        loop = !loop;
    }
    console.log("\nTime Elapsed (Brute Force Algorithm):    " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
    console.log("Brute Force Algorithm Answer:            " + num);
    return num;
}

function smallestMultipleMethodical(upTo)
{
    var startTime = performance.now();
    var arrayOfPrimeArrays = [];
    var smallestMultiple = 1;

    // Prime Factorization of every number
    for (var tracker = 2; tracker <= upTo; tracker++)
    {
        var primeFactors = [];
        var current = tracker;
        while (current > 1)
        {
            for (var i = 2; i <= current; i++)
            {
                if (current % i == 0)
                {
                    primeFactors.push(i);
                    current = current / i;
                    i = 1;
                }
            }
        }
        arrayOfPrimeArrays.push(primeFactors);
        primeFactors = [];
    }

    // Checks highest prime count in every single prime factorization array
    for (var i = 2; i <= upTo; i++)
    {
        var highestFitCount = 0;
        for (var j = 0; j < arrayOfPrimeArrays.length; j++)
        {
            var fitCount = 0;
            for (var k = 0; k < arrayOfPrimeArrays[j].length; k++)
            {
                if (arrayOfPrimeArrays[j][k] == i)
                {
                    fitCount++
                }
            }
            if (fitCount > highestFitCount)
            {
                highestFitCount = fitCount;
            }
        }
        smallestMultiple *= Math.pow(i, highestFitCount);
    }

    console.log("\nTime Elapsed (LCM Algorithm):            " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
    console.log("LCM Algorithm Answer:                    " + smallestMultiple);
    return smallestMultiple;
}

function smallestMultipleCustom(upTo)
{
    var startTime = performance.now();
    var primes = [];
    for (var i = 2; i <= upTo; i++)
    {
        primes.push(i);
        for (var j = 2; j <= i; j++)
        {
            if (i % j == 0 && i != j)
            {
                for (var n = 0; n < primes.length; n++)
                {
                    if (primes[n] == i)
                    {
                        primes.splice(n, 1);
                    }
                }
            }
        }
    }

    var smallestMultiple = 1;
    for (var i = 0; i < primes.length; i++)
    {
        var max = upTo;
        var fitCount = 1;
        while (max / primes[i] >= primes[i])
        {
            fitCount++;
            max = max / primes[i];
        }
        //console.log("fitCount: " + fitCount + " for " + primes[i]);
        smallestMultiple *= Math.pow(primes[i], fitCount);
    }
    console.log("\nTime Elapsed (Custom Algorithm):         " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
    console.log("Custom Algorithm Answer:                 " + smallestMultiple);
    return smallestMultiple;
}

function smallestMultipleCake(upTo)
{
    var startTime = performance.now();
    var smallestMultiple = 1;

    var numbers = [];
    for (var i = 1; i <= upTo; i++)
    {
        numbers.push(i);
    }

    var max = Math.max(...numbers);
    var check = 2;
    var fitCount = 0;
    while (check <= max)
    {
        for (var i = 0; i < numbers.length; i++)
        {
            if (numbers[i] % check == 0)
            {
                fitCount++;
            }

        }

        if (fitCount >= 2)
        {
            fitCount = 0; 
            smallestMultiple *= check;
            for (var i = 0; i < numbers.length; i++)
            {
                if (numbers[i] % check == 0)
                {
                    numbers[i] = numbers[i] / check;
                }
            }
            check--;
            max = Math.max(...numbers);
        }

        check++;
    }

    for (var i = 0; i < numbers.length; i++)
    {
        smallestMultiple *= numbers[i];
    }


    console.log("\nTime Elapsed (Cake Algorithm):           " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
    console.log("Cake Algorithm Answer:                   " + smallestMultiple);
    return smallestMultiple;
}


for (var i = 1; i <= 25; i++)
{
    console.log("\n------- Number: " + i + " -------");
    smallestMultipleCake(i);
    smallestMultipleCustom(i);
    smallestMultipleMethodical(i);
    if (i <= 25)
    {
        smallestMultipleForced(i);
    }
}