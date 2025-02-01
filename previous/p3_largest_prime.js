/*

Start Date: March 8th 2020 - 1:07 am
Finish Date: March 8th 2020 - 1:20 am

Description: 

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

Notes: I felt like this was pretty easy. I solved it recursively again and I'm really impressed and happy about that. I did however forget to
call the function since I've been calling the function in the console.log usually. It slowed me down a little bit. 
*/

var factors = [];

function largestPrime(num)
{
    if (num == 1)
    {
        return;
    }
    var i = 2;
    while (true)
    {
        if (num % i == 0)
        {
            factors.push(i);
            return largestPrime(num / i);
        }
        i++;
    }
}

largestPrime(600851475143);

console.log(factors[factors.length - 1]);
console.log(factors);