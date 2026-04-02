// Write a function that counts how many vowels are in a string.
function vowel(str)
{
    let count =0;
    for (let i=0;i<str.length;i++)
    {
        let ch =str[i].toLowerCase();
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')
        {
            count++;
        }
    }

    return count;
}
console.log(vowel("riswin"));