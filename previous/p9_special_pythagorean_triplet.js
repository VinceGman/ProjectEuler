/* 

Start Date: April 12th 2020 - 7:20 pm
Finish Date: April 12th 2020 - 7:32 pm

Description: 

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

Notes: Since I found a numberphile video that makes pythagorean triples from any m and n when m > n, I used those to find
pythagorean triples to check for the conditions.
*/


const { performance } = require('perf_hooks');

function findSpecialPythagoreanTripleProduct(numberToSum)
{
    var startTime = performance.now();

    var a, b, c, sum, product;
    var unfound = true;
    for (var m = 1; m <= numberToSum; m++)
    {
        for (var n = 1; n <= numberToSum; n++)
        {
            if (m > n && unfound)
            {
                a = Math.pow(m, 2) - Math.pow(n, 2);
                b = 2*m*n;
                c = Math.pow(m, 2) + Math.pow(n, 2);
                sum = a + b + c; 
                if (sum == numberToSum)
                {
                    product = a * b * c;
                    unfound = false;
             
                }
            }
        }
    }

    console.log("\n------- Number To Match: " + numberToSum + " -------");
    console.log("Time Elapsed (Special Pythagorean Triple): " + ((performance.now() - startTime) / 1000).toFixed(6) + " sec");
    console.log("Special Pythagorean Triple (" + a + ", " + b + ", " + c + "): " + product);
    return product;
}

findSpecialPythagoreanTripleProduct(1000);