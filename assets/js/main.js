
/* -----------------------------------------------------------------------------
File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
(function ($) {
    "use strict";
    

    
  /* ==================================================
    # Responsive Menu
   ===============================================*/
   document.addEventListener("DOMContentLoaded", () => {
    const menu = new MmenuLight(
      document.querySelector("#ham-navigation"),
      "(max-width: 768px)"
    );

    const navigator = menu.navigation({
      selectedClass: "Selected",
      slidingSubmenus: true,
      theme: "light",
      title: "Menu",
    });
    const drawer = menu.offcanvas({
      position: "left",
    });

    document
      .querySelector('a[href="#ham-navigation"]')
      .addEventListener("click", (evnt) => {
        evnt.preventDefault();
        drawer.open();
      });
  });


    $('select').niceSelect(); 


})(jQuery);

let suggestions = [ 
  "Product support",
  "What is AppSumo Plus?",
  "My deal is live! Now what?",
  "How do I ask for reviews once my product goes live?",  
  "Product support", 
  "AppSumo Affiliate Program",
  "Update profile photo",
  "Product Reviews and Questions",
  "Manage email preferences or unsubscribe",
  "How do I login to my licensed product?",
  "How do I partner with AppSumo and submit my product?",
  "How do I ask for reviews once my product goes live?", 
];


//Create this file first before writing javascript





// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{ 
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData; 
}