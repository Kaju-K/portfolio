let initialWidth = window.innerWidth
let numberOfProjects = 1

window.addEventListener( "resize" , resizeListener)

function resizeListener() {
    let w = window.innerWidth

    if (w < 900) {
        numberOfProjects = 1.5
    } else {
        numberOfProjects = 3
    }

    const swiper = new Swiper('.swiper', {
        slidesPerView: numberOfProjects,
    });
}

if (initialWidth < 900) {
    numberOfProjects = 1.5
} else {
    numberOfProjects = 3
}

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: numberOfProjects,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
