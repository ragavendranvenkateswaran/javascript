let a=document.getElementById('a').addEventListener('submit',function(event){
  event.preventDefault();

  let product=document.getElementById("product").value
  document.getElementById('td1').innerHTML=product;
  let quatity=document.getElementById("quatity").value
  document.getElementById('td2').innerHTML=quatity;
  let price=document.getElementById('price').value
  document.getElementById('td3').innerHTML=price
})
function create1(){
  let a=document.createElement('submit');
   a.textcontent="table"
   document.getElementsById("table").append(a)

}
  

