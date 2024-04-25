let a=prompt("enter the gender")
let b=prompt("enter the age")
let c=prompt("enter the hemo level")

if(a==="male"){
    if(c>12 && c<18){
        if(b>13.2 && b<15.1){
           console.log("normal");
        }
        else{
         console.log("abnormal");
        }

    }
    else if(c>18){
        if(b>13.6 && b<17.7){
            console.log("normal");
        }
        else{
           console.log("abnormal");
        }
    }
    else{
    console.log("invalid age");
    }
}
else if(a==="female"){
    if(c>12 && c<18){
        if(b>12 && b<16){
          console.log("normal");
        }
        else{
            console.log("abnormal");
        }
    }
    else if(c>18){
        if(b>12.1 && b<15.1){
            console.log("normal");
        }
        else{
            console.log("abnormal");
        }
    }
    else{
        console.log("invalid age");
    }
 }
 else{
    console.log("invalid gender");
 }