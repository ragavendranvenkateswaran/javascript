let a=[10,6,8,7,4,]
let b=[5,11,3,22,1]
let c=[]
let d=[]
c=a.concat(b)
console.log(c)
for(let i=0;i<=c.length;i++){
    for(let j=0;j<c.length;j++){
        if(c[i]<c[j]){
           d=c[i];
           c[i]=c[j];
           c[j]=d;

          
        }
        
    }
   
}
console.log(c)
