const leftArr = '<i class="fas fa-arrow-left"></i>'
const rightArr = '<i class="fas fa-arrow-right"></i>'

$('#owl-first').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    stagePadding: 50,
    navText:[
        '<i class="fas fa-arrow-left"></i>',
        rightArr
    ],
    navSpeed:1000,
    mouseDrag: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('#owl-second').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplaySpeed: 1500,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})