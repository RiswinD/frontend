//Write a function with a default parameter: greet(name='friend') prints "Hello friend" if no name given.
function greet1 (name)
{
    if (name)
    {
        return "hello " + name + "!";
    }
    else
    {
        return "hello friend!";
    }
}
console.log(greet1 ("riswin"));
//other method 
function greet (name = "friend")
{
    return "hello "+ name + "!";
}
console.log(greet());