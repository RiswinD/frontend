//Write a function that takes temperature in Celsius and returns Fahrenheit.
function convertfagrenheit(c)
{
    let fahrenheit =c*9/5+32;
    return fahrenheit+"F";
}
console.log(convertfagrenheit(100));
function convertcelcius(f)
{
    let celcius =(f-32 )*5/9;
    return celcius+"C";
}
console.log(convertcelcius(212));