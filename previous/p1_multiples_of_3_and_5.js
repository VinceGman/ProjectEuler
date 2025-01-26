/* 

Start Date: March 7th 2020 - 8:17 pm
Finish Date: March 8th 2020 - 12:46 am

Description: 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

Notes: The main issue with finishing this problem was remembering to remove duplicates.
*/

function sumOfMultiples(num, max) 
{
    var sum = 0;
    for (var i = 1; i < max; i++) 
    {
        if (i % num == 0) // Kailyn's Solution -> (i % 3 == 0 || i % 5 == 0)
        {
            sum += i;
            //console.log("Num: " + num + " | Added " + i);
        }
    }
    return sum;
}


console.log(sumOfMultiples(3, 1000) + sumOfMultiples(5, 1000) - sumOfMultiples(15, 1000));
