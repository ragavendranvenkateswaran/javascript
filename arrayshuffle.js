let a=[1,2,3,4,5,6,7,8,9,10]
  
let b=a[0];
 a[0]=a[4];
 a[4]=b;
 let c=a[1];
 a[1]=a[3];
 a[3]=c;
 let d=a[5];
 a[5]=a[9];
 a[9]=d;
 let e=a[6];
 a[6]=a[8];
 a[8]=e;
 
 console.log(a)

  