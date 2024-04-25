let vowels=prompt("enter the char")
i=0;
while(( (vowels=='a')||(vowels=='e')||(vowels=='i')||(vowels=='o')||(vowels=='u'))&& (i==0)){
    console.log(vowels+" is a vowel")
    i++;
}
if(i==0){
    console.log("not a vowels")
}
