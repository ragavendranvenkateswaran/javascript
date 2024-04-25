let m=5;
let time=m*60;
count=document.getElementById('timer');
setInterval(clock,100)
function clock() {
    let min=Math.floor(time/60)
    let sec=time%60;
    if(time>=0){
        count.innerHTML=min +":"+sec ;
        time--;
    }
    
}
function hidden1(){
    document.getElementById('timer').style.display="none"
    
}
function show1(){
    document.getElementById("timer").style.display="block"
}



