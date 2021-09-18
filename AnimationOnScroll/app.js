window.addEventListener('scroll', function () {
    let section3 = document.querySelector(".section3");
    let sec3pos = section3.getBoundingClientRect().top
    let screenPos = window.innerHeight
    let section4 = document.querySelector(".section4")
    let sec4pos = section4.getBoundingClientRect().top
    let section5 = document.querySelector(".section5")
    // let section6 = document.querySelector(".section6")

    let sec5pos = section5.getBoundingClientRect().top
    // let sec6pos = section6.getBoundingClientRect().top
    // let sec7pos = section7.getBoundingClientRect().top

    if (sec3pos < screenPos) {
        section3.classList.add("animatefromright")
    }
    else {
        section3.classList.remove("animatefromright")
    }

    if (sec4pos < screenPos) {
        section4.classList.add("animatescale")
    }
    else {
        section4.classList.remove("animatescale")
    }

    if (sec5pos < screenPos) {
        section5.classList.add("animateopacity")
    }
    else {
        section5.classList.remove("animateopacity")
    }

    // if(sec6pos < screenPos){
    //     section6.classList.add("animateopacity")
    // }
    // else{
    //     section6.classList.remove("animateopacity")
    // }

    // if(sec7pos < screenPos){
    //     section7.classList.add("animateopacity")
    // }
    // else{
    //     section7.classList.remove("animateopacity")
    // }
})


let section7 = document.querySelector(".section7")

section7.addEventListener('click', function () {
    location.reload()
})






