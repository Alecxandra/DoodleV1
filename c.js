function Wind() {
  var one=document.getElementById("ein");
  var two=document.getElementById("zwei");
  var three=document.getElementById("drei");
  
  one.style.transform="rotate(10000deg)";
  two.style.transform="rotate(9920deg)"; // -80 grados
  three.style.transform="rotate(10080deg)"; // + 80 grados
  
  setTimeout(function(){
    one.style.transform="rotate(-360deg)";
    two.style.transform="rotate(-280deg)";
    three.style.transform="rotate(-410deg)";
  },8000);
  
}

$(document).ready(function () {
  Wind();
  
});