
/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
    "use strict";


    $('select').niceSelect();


})(jQuery);

//get input
let input = document.getElementById("search");
//get list of value
let list = document.querySelectorAll(".list li");

//function search on the list.
function search (){
  for(let i = 0; i < list.length; i += 1){
   //check if the element contains the value of the input
   if(list[i].innerText.toLowerCase().includes(input.value.toLowerCase())){
     list[i].style.display = "block";
   }else{
     list[i].style.display = "none";
   }
  }
}

//to the change run search.
input.addEventListener('input', search);

