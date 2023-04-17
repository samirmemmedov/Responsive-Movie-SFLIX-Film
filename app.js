// Add click event listener to hamburger menu icon
$('#hamburger-menu').click(() => {
    // Toggle the 'active' class on the hamburger menu icon and the navigation menu
    $('#hamburger-menu').toggleClass('active')
    $('#nav-menu').toggleClass('active')
})

// Setting up owl carousel for hero section
let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]
$('#hero-carousel').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    nav:true,
    navText: navText,
    autoplay: true,
    autoplayHoverPause: true
})

// Setting up owl carousel for top movies section
$('#top-movies-slide').owlCarousel({
    items: 2,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        500: {
            items: 3
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})

// Setting up owl carousel for movies section
$('.movies-slide').owlCarousel({
    items: 2,
    dots: false,
    nav:true,
    navText: navText,
    margin: 15,
    responsive: {
        500: {
            items: 2
        },
        1280: {
            items: 4
        },
        1600: {
            items: 6
        }
    }
})
