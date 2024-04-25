let a=document.getElementById('a').addEventListener('submit',function(event){
    event.preventDefault();
  
    let name =document.getElementById('name').value;
    let Email =document.getElementById('email').value;
    let password =document.getElementById('password').value;

    console.log(name)
    console.log(Email)
    console.log(password)

})
