let a=prompt("ENTER THE VALUE A")
let b=prompt("ENTER THE VALUE B")
let c=prompt(" ENTER THE VALUE C")
if(a>b&&a>c){
    console.log("A is first greater")
    if(b>c){
        console.log("b is second greater")
        console.log("c is smaller")
    }
    else{
        console.log("c is second greater")
        console.log("b is smaller")
    }
        
}
if(b>a&&b>c){
    console.log("B is first greater")
    if(c>a){
        console.log("c is second greater")
        console.log("a is smaller")
    }
    else{
        console.log("a is second greater")
        console.log("c is smaller")
    }
     
    }
   if(c>b&&c>a){
      console.log("c is first greater")
      if(a>b){
       console.log("a is second greater")
       console.log("b is smaller")
      }
      else{
        console.log("b is second greater")
        console.log("a is smaller")
      }
    }
