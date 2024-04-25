let arr=['' , 'a','b','c','d','e','f','g','h','i']
let  a=Number(prompt("enter the value"))

while(a!=0){
 console.log(a%10)
 console.log(arr[a%10])
   a=(Math.floor(a/10))
}

