
let a="child"
let b=prompt("enter the age")
let c=prompt("hemo level")





if(a=="child"){
    if(b>=6&&b<=12){
        if(c>=11.5&&c<=15.5){
           console.log("normal");
        }
        else{
            console.log("up normal");
        }
    }
    else if(b>=2&&b<=6){
        if(c>=11.5&&c<=15.5){
            console.log("normal");
        }
        else{
            console.log("upnormal");
        }
    }
    else if(b>=0.5&&b<=2){
        if(c>=10.5&&c<=13.5){
            console.log("normal");
        }
        else{
            console.log("upnormal");
        }
    }
    else if(b>=2&&b<=6){
        if(c>=9.5&&c<=14.0){
            console.log("normal");
        }
        else{
            console.log("upnormal");
        } 
    }
     else if(b>=1&&b<=2){
        if(c>=9.5&&c<=14.0){
            console.log("normal");
        }
        else{
            console.log("upnormal");
        }   
    }
    else if(b<=1){
        if(c>=10.0&&c<=20.0){
            console.log("normal");
        }
        else{
            console.log("upnormal");
        } 
    }
    
   else{
    console.log("invalid age");
    }
}