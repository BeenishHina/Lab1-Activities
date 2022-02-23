function str_vowel()
{
	var str="Orange";
	for(var i = 0; i<str.length; i++)
	{
		if (str.charAt(i) =='a' || str.charAt(i) == 'e' || str.charAt(i) =='i'
		|| str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' ||
		str.charAt(i) == 'E' || str.charAt(i) =='I' || str.charAt(i) =='O' || str.charAt(i) == 'U')
		{
            console.log("The position of the leftmost vowel " +str.charAt(i)+ " is at: " +i+ " index"+" \n")   
			break;
		}
	}
}
str_vowel();

function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }
  console.log("The number with its digits in the reverse order: ",reversedNum(84893))