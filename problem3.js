
var string1= 23617;
var A1=string1.toString().split('');
console.log("even digits from the above input: ");
var evenNumbers = A1.filter(function(item) {
   return (item % 2 == 0);
});
console.log(evenNumbers);

console.log("sum of even digits:- ");
var A2=evenNumbers.map(Number).reduce(function(a,b){
    console.log("a="+a+" , " + "b="+b+"\n"+"a+b= "+ (a+b))
return (a+b)},0)
console.log("Result: ",A2)
