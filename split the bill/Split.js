 const amount = document.getElementById('billAmt');
 const friend = document.getElementById('friends');
 const submit = document.getElementById('submit');
 const output = document.getElementById('output')
 const warning = document.getElementById('warning');
 const warning2 = document.getElementById('warning2');
 
 warning.style.visibility = "hidden";
 warning2.style.visibility = "hidden";
 

 submit.addEventListener('click', function() {
//   e.preventDefault;

  output.innerHTML = amount.value / friend.value;

  if (amount.value == ("") || friend.value==("")){
   warning.style.visibility = "visible";
  } else if (amount.value === ( 0 ) || friend.value ===( 0 ) ){
   warning2.style.visibility = "visible";
  }
 })




