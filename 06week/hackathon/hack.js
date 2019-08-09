function rampNum (num)
{
var k;
var arrk;
var i;
let count = 0
let check = 0
for (k=0; k<num; k++){
  arrs = k.toString()
  arrk = arrs.split("")
for (var i = 0; i < arrk.length; i++){

if (parseInt(arrk[i]) < parseInt(arrk[i+1])){
  check = 1
}else{
  check = 0
  break;
}
count += check;
}
}
return count
}
rampNum (99999)