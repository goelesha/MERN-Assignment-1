//pseudocode
// a = num1;
//b = num2;
//i= 1;
// gcd = 1;
// if(a>b)
//     while (i<=b)
//         if(a%i==0 and b%i==0)
//             gcd *= i;
//         i++;
// else
//     while (i<=a)
//         if(a%i==0 and b%i==0)
//             gcd *= i;
//         i++;

let a= 4;
let b = 8;
let i=1;
let gcd = 1;
if(a>b)
{
    while(i<=b)
    {
        if((a%i==0) && (b%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
else
{
    while(i<=a)
    {
        if((a%i==0) && (b%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
console.log(gcd);