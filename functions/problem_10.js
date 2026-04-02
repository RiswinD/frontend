//Write a function that takes two functions as arguments and calls both.
function first()
{
    console.log("hello");
}
function second()
{
    console.log("riswin");
}
function both(f1,f2)
{
    f1();
    f2();
}
both(first,second);