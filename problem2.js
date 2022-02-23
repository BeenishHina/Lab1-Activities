 var nums="23617";
 var A1=nums.toString().split('').map(Number).reduce(function(a,b){
     console.log("a= "+a+" , "+"b= "+b+""+"\n"+"a+b= "+ (a+b))
 return (a+b)},0)
 
  console.log("Result:--",A1)