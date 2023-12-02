
let btn = document.getElementById('btn')
let spn = document.getElementById('pp')


btn.addEventListener("click", function(){
let num1 =parseFloat(document.getElementById('n1').value) 
let num2 =parseFloat(document.getElementById('n2').value)

 if(num1 ||num2 >= 0){
  sum = num1 + num2
 spn.innerHTML =` total ${sum} ` 
 spn.style.color = "green"
  return sum
}else{
  spn.innerHTML =` plz before submmit must input 2 value > 0`
  spn.style.color = "red "
}
 
})

function refreshPage(){
  window.location.reload();
} 