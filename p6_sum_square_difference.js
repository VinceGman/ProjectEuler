/* 

Start Date: April 12th 2020 - 1:18 am
Finish Date: April 12th 2020 - 1:30 am

Description: 

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 +...+ 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 +...+ 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


Notes: I'm writing these in like 12/13 mins and that's pretty good for me. I should do more so I can get to the hard ones. 
*/


function sumSquareDifference(upTo)
{
    var sumOfSquares = 0;
    var sumThenSquare = 0;
    var sumSquareDifference = 0;

    for (var i = 1; i <= upTo; i++)
    {
        sumOfSquares += Math.pow(i, 2);
        sumThenSquare += i;
    }

    sumThenSquare = Math.pow(sumThenSquare, 2);

    sumSquareDifference = sumThenSquare - sumOfSquares;
    
    console.log("Sum Square Difference (" + upTo + "): " + sumSquareDifference);
}

sumSquareDifference(100);