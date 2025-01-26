/* 

Start Date: March 8th 2020 - 1:24 am
Finish Date: March 8th 2020 - 1:38 am

Description: 

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.

Notes: Writing the palindrome checker first was the play. After that, it was simple iteration through all possibilities.
This solution was not elegant or fast but it got the job done.
*/

var maxPalindrome = 0;

function isPalindrome(num)
{
    var numStringArray = num.toString().split("");

    for (var i = 0; i < Math.ceil(numStringArray.length / 2); i++)
    {
        if (numStringArray[i] != numStringArray[numStringArray.length - i - 1])
        {
            return false;
        }
    }

    return true;
}


for (var i = 100; i <= 999; i++)
{
    for (var j = 100; j <= 999; j++)
    {
        if (isPalindrome(i * j) && (i * j > maxPalindrome))
        {
            maxPalindrome = i * j;
        }
    }
}

console.log(maxPalindrome);