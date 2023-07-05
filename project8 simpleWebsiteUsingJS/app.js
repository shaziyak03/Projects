let home = document.getElementById('home');
let contact = document.getElementById('contact');
let information = document.getElementById('information');
let guide = document.getElementById('guide');

let diva =document.querySelector('.diva');
let divb = document.querySelector('.divb');
let divc = document.querySelector('.divc');
let divd = document.querySelector('.divd');

home.addEventListener('click', ()=>{
    diva.style.display = 'block';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'none';
} )
contact.addEventListener('click', ()=>{
    diva.style.display = 'none';
    divb.style.display = 'block';
    divc.style.display = 'none';
    divd.style.display = 'none';
} )
information.addEventListener('click', ()=>{
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'block';
    divd.style.display = 'none';
} )
guide.addEventListener('click', ()=>{
    diva.style.display = 'none';
    divb.style.display = 'none';
    divc.style.display = 'none';
    divd.style.display = 'block';
} )
// ---- activeLink ----

// The window.addEventListener("DOMContentLoaded", function() {...}) code wraps the JavaScript logic, ensuring it runs when the DOM is fully loaded.
window.addEventListener("DOMContentLoaded", function() {
    var links = document.getElementsByClassName("alinks");//retrieves all elements with the class name "alinks" and stores them in the links variable.
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() { //adds a click event listener to each link element.
        var current = document.getElementsByClassName("active");// retrieves any element that currently has the class "active" and stores it in the current variable. This allows us to remove the "active" class from the current active link.
        if (current.length > 0) {//The if condition checks if the length of the current collection is greater than 0. If it is, it means there is an active link present.
          current[0].classList.remove("active");//removes the "active" class from the first element in the current collection. This ensures that only one link can have the "active" class at a time.
        }
        this.classList.add("active");// adds the "active" class to the clicked link.
      });
    }
  });
  
  
  
  
  
  





