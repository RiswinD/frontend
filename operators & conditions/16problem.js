// Check if a year is a leap year.
let year = 2000;


if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
{
    console.log("leap year");
}
else
{
     console.log("not a leap year");
}
     