const Array1=[10,15,20,25]
function first_last(Array1)
{
  var end_pos = Array1.length - 1;
  return Array1[0] == 10 || Array1[end_pos] == 10;
}
console.log(first_last(Array1));
