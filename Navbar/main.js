
function navbar(){
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".navbarr");
    var line1 = document.querySelector(".line1");
    var line2 = document.querySelector(".line2");
    var line3 = document.querySelector(".line3");

    burger.addEventListener("click", function(){
        nav.classList.toggle("navbar-active");
        line1.classList.toggle("line1-active")
        line2.classList.toggle("line2-active")
        line3.classList.toggle("line3-active")

    });
       
    
}
navbar();